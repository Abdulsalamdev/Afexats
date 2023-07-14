import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/component/home/header' 


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <h2 className=''>Let us test</h2>
      <Header />
    </div>
    </>
  )
}
