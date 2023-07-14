import Development from "@/component/development";
import { Header, Maquee } from "@/component/home/header";
import { HeroSection } from "@/component/home/hero";
import { SecHeader } from "@/component/home/secHeader";
import { Text } from "@/component/home/text";


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
    <Text />
    <Development />
    <HeroSection />
    </>
  )
}