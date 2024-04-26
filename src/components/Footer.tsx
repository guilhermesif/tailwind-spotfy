import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2 } from 'lucide-react'
import Image from 'next/image'
export function Footer() {
    return (
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className='flex items-center gap-3'>
      <img src="/alan.webp" width={56} height={56}  alt="Capa do álbum"/>
      
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
    )
}