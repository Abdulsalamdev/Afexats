import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header, Maquee } from '@/component/home/header' 
import { Hambuger, SecHeader } from '@/component/home/secHeader'
import {BeginSection} from '@/component/home/begin'
import { FirstValue } from '@/component/home/values'
import { Timer } from '@/component/home/timeCount'
import { Students } from '@/component/home/students'
import { HeroSection } from '@/component/home/hero'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <div className='fixed top-0 left-0 right-0 backdrop-blur-sm flex items-center border border-b-[#A0AEC0] bg-white'>
      <Header />
      <Maquee />
    </div>
    <div className='bg-[#F9FAFB] py-[20px] mt-[30px] fixed top-0 left-0 right-0 backdrop-blur-sm '>
      <SecHeader />
    </div>
   
      <BeginSection />
      <FirstValue />
      <Timer />
      <Students />
      <HeroSection />
    </>
  )
}
