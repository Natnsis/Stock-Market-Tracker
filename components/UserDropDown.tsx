"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { IconLogout } from "@tabler/icons-react"
import NavItems from "./NavItems"

export function UserDropDown() {
  const router = useRouter()

  const handleSignOut = async () => {
    router.push("/sign-in");
  }

  const user = { name: 'josh', email: 'nsisay49@gmail.com' }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 tex-gray-4">
          <Avatar>
            <AvatarImage src='/logo.png' />
            <AvatarFallback className="text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium capitalize"> {user.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400 px-2 h-full">
        <DropdownMenuLabel className="h-full">
          <div className="flex relative items-center gap-3 py-2">
            <div className="flex flex-col items-start">
              <span className="text-base font-medium capitalize"> {user.name}</span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent cursor-pointer">
          <IconLogout />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
