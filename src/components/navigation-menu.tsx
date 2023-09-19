import {
  CalendarIcon,
  ClapperboardIcon,
  Crown,
  PlusCircleIcon,
  PopcornIcon,
  Settings,
  User
} from "lucide-react";

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

export function NavigationMenu() {
  return (
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
  )
}