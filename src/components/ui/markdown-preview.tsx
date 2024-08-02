"use client"

import dynamic from 'next/dynamic';

const Preview = dynamic(() => import('@uiw/react-markdown-preview'), {
  ssr: false
})

const MarkdownPreview = (data: any) => {
  return (
      <Preview source={data.content}/>
  )
}

export default MarkdownPreview