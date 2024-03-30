import { CardDemo } from '@/components/ui/example-card';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section>
        <h1>Home</h1>
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <Link href="/showcase">Showcase</Link>
        <CardDemo />
      </section>
    </main>
  )
}
