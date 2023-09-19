import {
  CalendarIcon,
  ClapperboardIcon,
  Crown,
  List,
  PlusCircleIcon,
  PopcornIcon,
  Settings,
  User
} from "lucide-react";
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Genre } from '@/data/movie';
import { SearchDialog } from './search-dialog';
import { Button } from './ui/button';

export function Header() {
  return (
    <div className='fixed z-[100] flex px-4 md:px-12 base:px-24 justify-between w-full items-center bg-foreground'>
      <div className='flex items-center gap-20'>
        <Link href="/">
          <span className="text-white">LOGO</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            Navegar
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Navegação</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <ClapperboardIcon className="mr-2 h-4 w-4" />
                  <span>Generos</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {Genre.map(itens => (
                      <DropdownMenuItem key={itens.id}>
                        <itens.icon className="mr-2 h-4 w-4" />
                        <span>{itens.name}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircleIcon className="mr-2 h-4 w-4" />
                      <span>Todos...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendário</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PopcornIcon className="mr-2 h-4 w-4" />
                <span>Populares</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Crown className="mr-2 h-4 w-4" />
                <span>Plus</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-1">
        <SearchDialog />
        <Button variant='link' className='hover:bg-black p-8 hidden lg:flex cursor-pointer text-white'>
          <Crown size={28} />
        </Button>
        <Button variant='link' className='hover:bg-black p-8 hidden lg:flex cursor-pointer text-white'>
          <User size={28} />
        </Button>
        <Button variant='link' className='hover:bg-black flex lg:hidden p-8 cursor-pointer text-white'>
          <List size={28} />
        </Button>
      </div>
    </div>
  )
}