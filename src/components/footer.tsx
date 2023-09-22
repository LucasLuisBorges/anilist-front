import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

import { Footer as FooterItens } from '@/data/movie';

export function Footer() {
  return (
    <div className="flex flex-col py-32 gap-8 bg-gradient-to-b from-background to-foreground items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-white font-medium text-5xl">
          Luganilist
        </h1>
        <p className="text-gray-400 text-center text-sm sm:text-lg w-[80%] sm:w-full">
          © Copyright Luganilist 2023 - Todos os direitos reservados
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-4 flex-wrap">
          {FooterItens.map(itens => (
            <Link href={itens.href} key={itens.id} className="text-gray-400 text-base sm:text-xl cursor-pointer hover:text-white font-normal transition duration-500 hover:underline underline-offset-2">
              {itens.name}
            </Link>
          ))}
        </div>
        <hr className="w-36 h-[1px] bg-zinc-700" />
        <div className="flex gap-6">
          <LinkedinIcon size={32} className='text-[#317ebc] cursor-pointer' />
          <TwitterIcon size={32} className='text-[#00acee] cursor-pointer' />
          <InstagramIcon size={32} className='text-[#8E24AA] cursor-pointer' />
        </div>
      </div>
    </div>
  );
}
