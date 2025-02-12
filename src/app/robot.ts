import {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://ivann.my.id/sitemap.xml',
    host: 'https://ivann.my.id',
  }
}
