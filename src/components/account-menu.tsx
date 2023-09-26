"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { User } from 'lucide-react'
import Link from 'next/link'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='relative md:hover:bg-black p-8 hidden lg:flex cursor-pointer text-white'>
          <User size={28} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuCheckboxItem>
          <Link href="/perfil">
            <div className="flex flex-col gap-1 cursor-pointer hover:bg-foreground w-[450px] px-8 py-2">
              <h1 className="text-white text-xl w-full">
                SEU PERFIL
              </h1>
              <p className="text-gray-400 ">Visualize seu perfil</p>
            </div>
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>
          <Link href="/auth">
            <div className="flex flex-col gap-1 cursor-pointer hover:bg-foreground w-[450px] px-8 py-2">
              <h1 className="text-white text-xl w-full">
                SAIR
              </h1>
              <p className="text-gray-400 ">
                Quer entrar com outra conta?
              </p>
            </div>
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}