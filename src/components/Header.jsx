import Image from "next/image"
import Search from "@/components/Search"
import MobileNav from "@/components/MobileNav"
import { Cog8ToothIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="px-4 flex h-14 shrink-0 items-center gap-4">
      <a href="/" className="flex items-center gap-2">
        <Image src="/tonexp.png" alt="ToneXP Logo" width={120} height={40} loading="eager" />
      </a>

      <Search />

      <nav className="flex gap-4 md:gap-6">
        <a href="#">
          <Cog8ToothIcon className="w-6 h-6" />
        </a>

        <MobileNav />
      </nav>


    </header>
  )
}