import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './ui/MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className="flex-between fixed bg-gray-800 text-white px-6 py-4 lg:px-10 z-50 w-full ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src = '/icons/logo.svg'
          width = {32}
          height = {32}
          alt = "Yomo logo"
          className = 'max-sm:size-10'
        />
        <p className="text-[26px]  font-extrabold text-white max-sm:hidden">ArenaMeet</p> 
        </Link>

        <div className = "flex between gap-5">
          <SignedIn>
              <UserButton />
            </SignedIn>

            
          <MobileNav />
        </div>
    </nav>
  )
}

export default Navbar