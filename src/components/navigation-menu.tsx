'use client'

import {
  NavigationMenu as MenuNavigation,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Genre } from '@/data/movie'

export function NavigationMenu() {
  return (
    <MenuNavigation>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Navegação</NavigationMenuTrigger>
          <NavigationMenuContent className='py-2'>
            <section className='flex min-w-max'>
              <div className='flex flex-col gap-4'>
                <h1 className='col-span-3 px-4 py-2 uppercase opacity-75'>Navegação</h1>
                <NavigationMenuLink href=''>
                  <h1 className='w-60 px-4 hover:bg-foreground py-2'>Populares</h1>
                </NavigationMenuLink>
                <NavigationMenuLink href=''>
                  <h1 className='w-60 px-4 hover:bg-foreground py-2'>Novidades</h1>
                </NavigationMenuLink>
                <NavigationMenuLink href=''>
                  <h1 className='w-60 px-4 hover:bg-foreground py-2'>Calendário</h1>
                </NavigationMenuLink>
              </div>
              <div className='min-h-full w-[2px] bg-foreground' />
              <div className='grid grid-cols-3 gap-4'>
                <h1 className='col-span-3 px-4 py-2 uppercase opacity-75'>Gêneros</h1>
                {Genre.map(itens => (
                  <NavigationMenuLink key={itens.id} href={`genero/${itens.href}`}>
                    <h1 className='w-40 px-4 hover:bg-foreground py-2'>{itens.name}</h1>
                  </NavigationMenuLink>
                ))}
              </div>
            </section>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </MenuNavigation>
  )
}