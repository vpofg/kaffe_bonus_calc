import React from 'react'
import Image from 'next/image'
import { buttonVariants } from "@/components/ui/button"



type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40
    backdrop-blur-lg z[100] flex items-center border-b-[1px]
    border-neutral-900 justify-betwen">
        <aside className='flex items-center gap-[2px]'>
            <Image src='/logo.png' width={50} height={50} alt='logo' />
        </aside>
        <nav className='absolute left-[50%] top-[50%] transform 
        translate-x-[-50%] translate-y-[-50%] hidden md:block'>
            <ul className='flex items-center gap-20 list-none'>
                <li className={buttonVariants({ variant: "link" })}>Jak używać?</li>
                <li className={buttonVariants({ variant: "link" })}>Kalkulator</li>
            </ul>
        </nav>
    </header> 
  )
}

export default Navbar