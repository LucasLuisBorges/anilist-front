import {
  Crown,
  List,
  User
} from "lucide-react";
import Link from 'next/link';

import { NavigationMenu } from './navigation-menu';
import { SearchDialog } from './search-dialog';
import { Button } from './ui/button';

export function Header() {
  return (
    <div className='fixed z-[100] flex px-4 md:px-12 base:px-24 justify-between w-full items-center bg-foreground'>
      <div className='flex items-center lg:gap-20'>
        <Link href="/">
          <span className="text-white">LOGO</span>
        </Link>
        <div className='hidden lg:flex'>
          <NavigationMenu />
        </div>
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