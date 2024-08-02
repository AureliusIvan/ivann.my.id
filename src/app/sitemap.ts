import {MetadataRoute} from 'next'
import {getAllSlugs} from "@/app/action";

const getPostSiteMap = async () => {
  const slugs = await getAllSlugs()
  return slugs.map(slug => {
    return {
      url: `https://ivann.my.id/posts/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }
  })
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getPostSiteMap()

  let sitemapData = [
    {
      url: 'https://ivann.my.id',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://ivann.my.id/log',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  sitemapData = sitemapData.concat(data)
  return sitemapData as MetadataRoute.Sitemap
}