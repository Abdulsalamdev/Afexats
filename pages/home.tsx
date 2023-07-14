import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header, Maquee } from '@/component/home/header' 
import { SecHeader } from '@/component/home/secHeader'
import { FirstValue } from '@/component/home/values'
import { Timer } from '@/component/home/timeCount'
import { Students } from '@/component/home/students'
import { HeroSection } from '@/component/home/hero'
import { BeginSec } from '@/component/home/begins'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex items-center border border-b-[#A0AEC0] '>
      <Header />
      <Maquee />
    </div>
    <div className='bg-[#F9FAFB] py-[20px]'>
      <SecHeader />
    </div>
      <BeginSec />
      <FirstValue />
      <Timer />
      <Students />
      <HeroSection />
    </>
  )
}
