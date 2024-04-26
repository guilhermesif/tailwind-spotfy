import { HomeIcon, Search, Library } from "lucide-react"

export function Sidebar(){
  return ( 
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
  )
}