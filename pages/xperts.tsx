import { Header, Maquee } from "@/component/home/header";
import { HeroSection } from "@/component/home/hero";
import { OurXperts } from "@/component/home/ourXperts";
import { SecHeader } from "@/component/home/secHeader";
import { MySelf, Short } from "@/component/home/text";


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
    <Short />
    <OurXperts />
    <MySelf />
    <HeroSection />
    </>
  )
}