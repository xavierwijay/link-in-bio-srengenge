'use client';

import { LinkButton } from '@/components/LinkButton';


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[url('/mobile-bg.png')] bg-cover bg-center bg-no-repeat md:bg-none md:bg-[#FFE4C4] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Decorative Elements - Subtle Waves/Sun (Hidden on mobile to show BG image clear) */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-orange-300 blur-3xl"/>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-yellow-300 blur-3xl"/>
        </div>



        {/* Content Container */}
        <div className="z-10 w-full max-w-lg flex flex-col items-center gap-0 md:gap-8">
            
            {/* Header / Logo Section */}
            <div 
                className="flex flex-col items-center text-center space-y-4 relative z-0"
            >


                {/* Desktop Logo & Text (Hidden on Mobile) */}
                <div className="hidden md:flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-orange-500 overflow-hidden">
                         {/* You should replace this with <Image /> if you have the asset */}
                         <span className="text-4xl font-black text-orange-500">S</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
                        Srengenge Surfing
                    </h1>
                    <p className="text-stone-600 font-medium max-w-xs">
                        Ride the waves with the warmth of the sun.
                    </p>
                </div>
            </div>

            {/* Links Section */}
            <div 
                className="w-full flex flex-col items-center gap-4 mt-10 md:mt-0 relative z-10"
            >
                <LinkButton 
                    href="https://wa.me/6281234567890" 
                    label="Pesan Disini"
                    imageSrc="/pesan_disini.png"
                    className="w-[70%] -rotate-0 mt-25 -translate-x-10"
                />
                
                <LinkButton 
                    href="/shop" 
                    label="Get Our Merch"
                    imageSrc="/get_our_merch.png"
                    className="w-[70%] rotate-0 -mt-4 translate-x-10"
                />
                
                <LinkButton 
                    href="mailto:info@srengengesurfing.com" 
                    label="Mau tanya sesuatu? Ask it here"
                    imageSrc="/ask_it_here.png"
                    className="w-[70%] -rotate-0 -mt-4 -translate-x-10"
                />
            </div>
        
        </div>


    </main>
  );
}
