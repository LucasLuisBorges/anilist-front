"use client";

import { DialogProps } from "@radix-ui/react-dialog";
import { Clapperboard } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

export function SearchDialog({ ...props }: DialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <Button
        variant="outline"
        className="relative w-[150px] sm:w-[200px] md:w-[300px] border-zinc-700 justify-between text-white/75"
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden md:inline-flex">Buscar anime...</span>
        <span className="inline-flex md:hidden">Buscar...</span>
        <kbd className="pointer-events-none select-none bg-zinc-700 items-center rounded px-1.5">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar anime..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Animes">
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Slime
            </CommandItem>
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Naruto
            </CommandItem>
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Mushoku
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Filmes">
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Slime film
            </CommandItem>
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Naruto film
            </CommandItem>
            <CommandItem className="flex gap-2">
              <Clapperboard size={14} />
              Mushoku film
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
