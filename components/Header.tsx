import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { UserDropDown } from './UserDropDown'
const Header = () => {
  return (
    <div className="sticky top-0 border-b">
      <div className="container sm:flex sm:justify-between items-center">
        <Link href="/" className='flex gap-2 items-center'>
          <Image src="/logo.png" alt='hehe' width={140} height={32} className='h-20 w-auto cursor-pointer' />
          <h1 className='text-4xl'>StockIsh</h1>
        </Link>

        <nav className='hidden md:flex'>
          <NavItems />
        </nav>

        <UserDropDown />
      </div>
    </div>
  )
}

export default Header
