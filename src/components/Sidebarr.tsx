import { HomeIcon, Search, Library } from "lucide-react"

export function Sidebarr(){
  return ( 
    <aside className="w-96 bg-black p-6 ">
    <nav className="space-y-5  bg-zinc-900 flex flex-col rounded-lg ">
        <div  className="flex flex-cols gap-3 text-sm font-semibold text-zinc-200">
        <a href='#' className=' group rounded align- gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
        <img src="/alan.webp" width={350} height={56}  alt="Capa do álbum"/>
              <strong className="ml-32">Radioactive</strong>
            </a>
      </div>
      
    </nav>
    <div className=" h-5/6 w-25% bg-zinc-900 flex flex-col gap-3 mt-5 rounded-lg " >
    <a href="" className="flex items-center mt-3 font-semibold gap-2 text-zinc-200 ">
        <Library  className="ml-5 "/>
        Your Library
      </a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">Imagine Dragons</a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">Michael Jackson</a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">Alan Walker</a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">System of a Down</a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">Maroon5</a>
      <a href="" className="ml-5 text-sm text-zinc-400 hover:text-zinc-100">Iron Maiden</a>
      <a href ="" className=''></a>
    </div>
  </aside>
  )
}