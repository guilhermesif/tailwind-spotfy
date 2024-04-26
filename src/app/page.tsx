
import { Footer } from '@/components/Footer'
import { Sidebarl } from '@/components/Sidebarl'
import { Sidebarr } from '@/components/Sidebarr'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1">
    <Sidebarl />
            <main className="flex-1 mr- p-6">
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 hover:bg-black/80 p1'><ChevronLeft /></button>
            <button className='rounded-full bg-black/40 hover:bg-black/80 p1'><ChevronRight /></button>
          </div>
          <h1 className='font-medium text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4'>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/imagine.jpg" width={96} height={96}  alt="Capa do álbum"/>
              <strong>Radioactive</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/michael.jpg" width={96} height={96}  alt="Capa do álbum"/>
              <strong>Smooth Criminal</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/alan.webp" width={96} height={96}  alt="Capa do álbum"/>
              <strong>Faded</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/system.jpg"width={96} height={96}  alt="Capa do álbum"/>
              <strong>B.Y.O.B.</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/maroon.jpeg" width={96} height={96}  alt="Capa do álbum"/>
              <strong>Sugar</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/iron.jpg" width={96} height={96}  alt="Capa do álbum"/>
              <strong>The Trooper</strong>
              <button className='w-12 h-12 flex items-center justify-center p-1 rounded-full bg-green-500 text-black font-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='font-medium text-2xl mt-10'>Made for Schell Fernandes</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/imagine.jpg" className='w-full' width={120} height={120}  alt="Capa do álbum"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/michael.jpg" className='w-full' width={120} height={120}  alt="Capa do álbum"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/alan.webp" className='w-full' width={120} height={120}  alt="Capa do álbum"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/system.jpg" className='w-full' width={120} height={120}  alt="Capa do álbum"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/maroon.jpeg" className='w-full' width={120} height={120}  alt="Capa do álbum"/>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            
          </div>
        </main>
        <Sidebarr />
      </div>

        <Footer />
    </div>
  )
}
