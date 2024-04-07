'use server'
import { Loading } from '@/components/ui/loading/loading';

async function Footer() {
  return (
    <footer
      className='bg-gray-800 text-white p-4'
    >
      <div>
        <h1>Footer</h1>
        <section>
          <Loading />
        </section>
      </div>
    </footer>
  )
}

export default Footer;