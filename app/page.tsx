import ProductCards from '@/components/ProductCards'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Hello, world!
      <Link href="/users">users</Link>
      <ProductCards/>
    </main> 
  )
}
