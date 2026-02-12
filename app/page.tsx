"use client";

import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[url('/mobile-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat md:bg-[url('/bg-desktop.jpeg')] md:bg-cover md:bg-bottom flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Only show decorative blobs on mobile if needed, or remove completely if desktop bg covers it. 
            The previous blobs were hidden md:block, but now we have a full desktop image. 
            We can probably remove the blobs or keep them hidden for now. 
        */}
      <div className="hidden absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-orange-300 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-yellow-300 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="z-10 w-full max-w-lg flex flex-col items-center gap-0 md:gap-8">
        {/* Header / Logo Section */}
        <div className="flex flex-col items-center text-center space-y-4 relative z-0">
          {/* Mobile Heading Image */}
          <img
            src="/heading-mobile.png"
            alt="Srengenge Surfing"
            className="block md:hidden w-[110%] max-w-none -ml-[0] object-contain drop-shadow-lg -mb-25 -mt-35"
          />

          {/* Desktop Logo (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-center space-y-4 md:mb-8">
            <img
              src="/logoo.png"
              alt="Srengenge Surfing"
              className="w-48 h-48 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col items-center gap-4 mt-10 md:-mt-7 relative z-10">
          <LinkButton
            href="https://srengengetrip.online"
            label="Pesan Disini"
            imageSrc="/pesan_disini.png"
            className="w-[70%] -rotate-0 mt-25 -translate-x-10 md:w-80 md:-mt-6 md:-translate-x-20 md:rotate-0"
          />

          <LinkButton
            href="https://s.shopee.co.id/7pnT4TNAZH"
            label="Get Our Merch"
            imageSrc="/get_our_merch.png"
            className="w-[70%] rotate-0 -mt-4 translate-x-10 md:w-80 md:-mt-6 md:translate-x-30 md:rotate-0"
          />

          <LinkButton
            href="https://api.whatsapp.com/send/?phone=6285183001691&text=Hi+kak+saya+mau+nanya+soal+srengenge+dong!%21&type=phone_number&app_absent=0"
            label="Mau tanya sesuatu? Ask it here"
            imageSrc="/ask_it_here.png"
            className="w-[70%] -rotate-0 -mt-4 -translate-x-10 md:w-80 md:-mt-2 md:translate-x-2 md:rotate-0"
          />
        </div>

        {/* Mobile Decorative Aaaaaaaaassets */}
        <img
          src="/tagline.png"
          alt="Tagline"
          className="absolute bottom-4 left-5 w-50 md:hidden pointer-events-none z-0"
        />

        {/* Social Media Icons */}
        <div className="absolute bottom-7 right-[20px] md:left-auto md:right-8 flex items-center gap-4 z-20">
          <a
            href="https://www.instagram.com/srengenge__trip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-10 h-10 object-contain hover:scale-110 transition-transform drop-shadow-md"
            />
          </a>
          <a
            href="https://www.tiktok.com/@srengengesurftrip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tiktok.png"
              alt="TikTok"
              className="w-10 h-10 object-contain hover:scale-110 transition-transform drop-shadow-md"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6285183001691&text=Hi+kak+saya+mau+nanya+soal+srengenge+dong!%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="w-10 h-10 object-contain hover:scale-110 transition-transform drop-shadow-md"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
