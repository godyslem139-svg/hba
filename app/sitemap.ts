import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.halaselim.com';

  // الصفحات الرئيسية
  const mainPages = [
    '',
    '/about',
    '/booking',
    '/privacy-policy',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // صفحات الخدمات الطبية الفرعية
  const servicePages = [
    '/services/chronic-diseases-followup',
    '/services/stomach-colon-acid-reflux',
    '/services/liver-gallbladder-digestive-diseases',
    '/services/cardiac-thoracic-assessment',
    '/services/hematology-immunology',
    '/services/internal-medicine-evaluation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...servicePages];
}