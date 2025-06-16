// Production Configuration for Khalak Fakhem Agency
export const PRODUCTION_CONFIG = {
  // Admin Credentials for Production
  ADMIN_EMAIL: "admin@khalakfakhem.com",
  ADMIN_PASSWORD: "admin123",

  // Application Settings
  APP_NAME: "نظام إدارة الوكالات",
  APP_DOMAIN: "khalakfakhem.com",

  // Security Settings
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes

  // Features
  FEATURES: {
    REGISTRATION_ENABLED: true,
    PASSWORD_RESET_ENABLED: true,
    MULTI_LANGUAGE_SUPPORT: true,
    DARK_MODE_ENABLED: true,
  },

  // Contact Information
  CONTACT: {
    EMAIL: "support@khalakfakhem.com",
    PHONE: "+966-XX-XXX-XXXX",
    ADDRESS: "المملكة العربية السعودية",
  },

  // Social Media
  SOCIAL_MEDIA: {
    TWITTER: "https://twitter.com/khalakfakhem",
    INSTAGRAM: "https://instagram.com/khalakfakhem",
    TELEGRAM: "https://t.me/khalakfakhem",
  },
}

// Validation function for admin credentials
export function validateAdminCredentials(email: string, password: string): boolean {
  return email === PRODUCTION_CONFIG.ADMIN_EMAIL && password === PRODUCTION_CONFIG.ADMIN_PASSWORD
}
