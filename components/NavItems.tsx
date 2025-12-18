"use client"

import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathname = usePathname()
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'

    return pathname.startsWith(path)
  }
  return (
    <ul className="sm:flex p-2 gap-3 sm:gap-10 font-medium hidden">
      {NAV_ITEMS.map(({ title, href }) => (
        <li key={title} className="flex">
          <Link href={href}>{title}</Link>
        </li>
      ))
      }
    </ul >
  )
}

export default NavItems
