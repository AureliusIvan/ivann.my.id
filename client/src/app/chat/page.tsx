'use server'

import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'

// async function GetData() {
//   const data = await axios.get('http://localhost:3000/api/login')
//     .then(response => {
//       console.log(response)
//       return response.data
//     })
//     .then(data => data)
//     .catch(error => console.error(error))
//   // console.log(data)
//   return data
// }

export default async function ChatPage() {

  return (
    <main>
      <section>
        <h1>Chat</h1>
        <section
          className='grid grid-cols-3 gap-4'
        >
          <Textarea />
        </section>
      </section>
    </main>
  )
}