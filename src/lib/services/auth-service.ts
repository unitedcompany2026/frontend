import { API_ENDPOINTS } from '@/constants'
import { api } from '../api'
import type { SignInFormData, SignUpFormData } from '../validations'

export const authService = {
  getCurrentUser: () => api.get(API_ENDPOINTS.AUTH.ME),
  refreshToken: () => api.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN),
  signIn: (data: SignInFormData) => api.post(API_ENDPOINTS.AUTH.SIGNIN, data),
  signUp: (data: SignUpFormData) => api.post(API_ENDPOINTS.AUTH.SIGNUP, data),
  signOut: () => api.post(API_ENDPOINTS.AUTH.SIGNIN),
}
