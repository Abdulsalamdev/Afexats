import Development from "@/component/development";
import { Header, Maquee } from "@/component/home/header";
import { HeroSection } from "@/component/home/hero";
import { SecHeader } from "@/component/home/secHeader";
import { Text } from "@/component/home/text";


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
    <Text />
    <Development />
    <HeroSection />
    </>
  )
}