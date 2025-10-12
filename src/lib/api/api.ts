import axios from 'axios'
import { getAccessToken, removeAccessToken, setAccessToken } from '../utils'
import { QUERY_KEYS } from '@/constants'
import { authService } from '../services'
import { queryClient } from '../tanstack'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  withCredentials: true,
})

api.interceptors.request.use(config => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

let isRefreshing = false
let refreshPromise: Promise<string> | null = null

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        if (!isRefreshing) {
          isRefreshing = true
          refreshPromise = authService.refreshToken().then(res => {
            const token = res.data.access_token
            setAccessToken(token)
            return token
          })
        }

        const token = await refreshPromise
        originalRequest.headers.Authorization = `Bearer ${token}`

        return api(originalRequest)
      } catch (refreshError) {
        removeAccessToken()
        queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, null)
        queryClient.clear()
        window.location.href = '/signin'

        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
        refreshPromise = null
      }
    }

    return Promise.reject(error)
  }
)
