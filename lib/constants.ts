export const APP_NAME = 'Tobika'
export const APP_VERSION = '1.0.0'

export const API_ENDPOINTS = {
  HEALTH: '/api/health',
  USERS: '/api/users',
} as const

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export const APP_URL =
  process.env.NODE_ENV === 'production' ? 'https://tobika.site' : 'http://localhost:3000'
