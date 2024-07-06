import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const APP_URL = env?.APP_URL;

export const siteConfig = {
  name: 'Portfolio - Phan Hoang Quoc Tu',
  metaTitle: 'Bring your visions to life by innovative technologies',
  description: 'Bring your visions to life by innovative technologies',
  ogImage: `${APP_URL}/og-image.jpg`,
  linkedin: 'https://www.linkedin.com/in/phanhoangquoctu',
  facebook: 'https://www.facebook.com/phanhoangquoctu1206',
  email: 'tuphan694@gmail.com',
};
