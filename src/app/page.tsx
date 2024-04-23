import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2 } from 'lucide-react'
import {Play as Playicon} from 'phosphor-react'
import Image from 'next/image'
import{useState, useEffect} from 'react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6 ">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Imagine Dragons</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Michael Jackson</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Alan Walker</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">System of a Down</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Maroon5</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Iron Maiden</a>
            <a href ="" className=''></a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
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
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
        <Image src="/alan.webp" width={56} height={56}  alt="Capa do álbum"/>
        
        <div className="flex flex-col" >
          <strong className='font-normal'>Faded</strong>
          <span className='text-xs text-zinc-500'>Alan Walker</span>
        </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                <Play />
              </button>

              <SkipForward size={20} className='text-zinc-200'/>
              <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='h-1 rounded-full w-40 bg-zinc-200'></ div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex place-items-center gap-4'>
          <Mic2 size={20} className='text-zinc-200'/>
          <LayoutList size={20} className='text-zinc-200'/>
          <Laptop2 size={20} className='text-zinc-200'/>
          <div className='flex items-center gap-2'>
            <Volume2 size={20} className='text-zinc-200'/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='h-1 rounded-full w-8 bg-zinc-200'></div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
