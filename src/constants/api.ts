export const API_ENDPOINTS = {
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    SIGNOUT: '/auth/signout',
    ME: '/auth/me',
    REFRESH_TOKEN: '/auth/refresh-token',
  },
  PARTICIPANTS: {
    GET_ALL: '/participants',
    GET_BY_ID: '/participants',
    CREATE: '/participants',
    UPDATE: '/participants',
    DELETE: '/participants',
  },
} as const
