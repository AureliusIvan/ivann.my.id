import Image from "next/image";
import { getContents } from '@/services/contents/content';
import { Suspense } from 'react';
async function Contents() {
  // Wait for the playlists
  const Contents = await getContents()
  return (
    <ul>
      {Contents.map((content: any, index: number) => (
        <li key={index}>
          {content.title}
        </li>
      ))}
    </ul>
  )
}

export default async function Page() {
  console.log('test')
  // Wait for the artist
  return (
    <>
      <h1>testing</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Contents />
      </Suspense>
    </>
  )
}
