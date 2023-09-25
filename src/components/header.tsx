import {
  Crown,
  List
} from "lucide-react";
import Link from 'next/link';

import Image from 'next/image';
import { AccountMenu } from './account-menu';
import { NavigationMenu } from './navigation-menu';
import { SearchDialog } from './search-dialog';
import { Button } from './ui/button';

export function Header() {
  return (
    <section className='fixed z-[100] flex px-4 md:px-12 base:px-24 justify-between w-full items-center bg-foreground'>
      <div className='flex items-center lg:gap-20'>
        <Link href="/">
          <Image
            src='/logo.svg'
            height={50}
            width={50}
            alt='Logo'
          />
        </Link>
        <div className='hidden lg:flex items-center gap-4'>
          <NavigationMenu />
          <Link href='' className='text-sm font-medium text-white'>Mangá</Link>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <SearchDialog />
        <Button variant='link' className='md:hover:bg-black p-8 hidden lg:flex cursor-pointer text-white'>
          <Crown size={28} />
        </Button>
        <AccountMenu />
        <Button variant='link' className='md:hover:bg-black flex lg:hidden p-8 cursor-pointer text-white'>
          <List size={28} />
        </Button>
      </div>
    </section>
  )
}