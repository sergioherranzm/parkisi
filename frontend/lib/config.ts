export const MAPS_API_URL = '/api/maps';
export const PAYMENTS_URL = '/api/payments';
export const MAILER_URL = '/api/mailer';
export const PROXY_URL = '/api/backend';
export const FRONT_URL =
  process.env.NEXT_PUBLIC_FRONT_URL ?? 'MISSING frontend url in .env';
export const BACK_URL =
  process.env.NEXT_PUBLIC_BACK_URL ?? 'MISSING backend url in .env';
export const GOOGLE_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? 'MISSING Google API key in .env';
export const SENDGRID_API_KEY =
  process.env.SENDGRID_API_KEY ?? 'MISSING Stripe API key in .env';
export const STRIPE_SECRET =
  process.env.STRIPE_SECRET ?? 'MISSING Stripe API key in .env';
