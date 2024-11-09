import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import logo from "../app/assets/logo.png";
import banner from "../app/assets/statistics.png";
import icon from "../app/assets/Content.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-[420px] rounded-[40px] mx-auto my-5">
      {/* Main Card */}
      <div className="flex flex-col items-center justify-center w-[420px] bg-gradient-to-b from-[#FFFFFF] to-[#8BC4F6] rounded-t-[40px] rounded-b-[90px] pt-10 pb-24">
        
        {/* Logo Image */}
        <Image src={logo} alt="Logo" className="w-[215px] h-[215px] object-contain" />
        
        {/* Banner Image */}
        <Image src={banner} alt="Statistics Banner" className="w-[356px] h-[288px] object-contain mt-6" />
      
      </div>

      {/* Button Section */}
      <div className="w-[420px] mb-16 mt-10 flex justify-center rounded-b-[40px]">
        <Link href="/signup">
          <div className="flex items-center justify-center gap-2 w-[393px] h-[60px] bg-[#4086C4] text-white font-semibold rounded-full shadow-lg">
            <Image src={icon} alt="icon"/>
          
          </div>
        </Link>
      </div>
    </div>
  );
}
