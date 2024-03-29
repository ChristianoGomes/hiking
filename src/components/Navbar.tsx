import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/svg0.svg" alt="logo" width={100} height={100} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" 
        title="Login"
        icon="svg1.svg"
        variant="btn_dark_green"
         />
      </div>
      <Image 
      src="svg2.svg" 
      alt="menu"
      width={32}
      height={32}
      className='inline-block lg:hidden cursor-pointer'
      />
    </nav>
  );
}

export default Navbar

