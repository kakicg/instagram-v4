import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Home from "@/app/page";
export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
            {/* Left */}
            <div className="h-12 w-24 mx-2 my-6 relative hidden lg:inline-grid cursor-pointer">
                <Image className="objecty-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png" layout="fill" />
            </div>
            <div className="h-12 w-12 my-6 relative lg:hidden cursor-pointer">
                <Image className="objecty-contain" src="/Instagram_Glyph_Gradient.png" layout="fill" />
            </div> 

            {/* Center */}
            <div className="relative">
                <div className="absolute top-2 mt-1 left-2">
                    <SearchIcon className="h-5 text-gray-500" />
                </div>
                <input type="text" placeholder="search" className="bg-gray-50 pl-10 border-gray-500 text:sm focus:ring-black focus:border-black rounded-md" />
            </div>
            {/* Right */}
            <div className="flex space-x-2 items-center">
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <img src="/kakiyama.jpg" alt="柿山" className="h-10 rounded-full" />
            </div>
        </div>
    </div>
    
  )
}
