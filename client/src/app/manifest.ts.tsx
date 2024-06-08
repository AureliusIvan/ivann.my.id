import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aurelius Ivan Wijaya',
    short_name: 'Ivan',
    description: 'I am Ivan, a software engineer who loves to write about web development, technology, and life.',
    start_url: '/',
    display: 'standalone',
    background_color: '#450d9a',
    theme_color: '#190639',
    // icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon',
    //   },
    // ],
  }
}