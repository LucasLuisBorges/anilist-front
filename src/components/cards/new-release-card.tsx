import { Clapperboard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './../ui/button';
import { Card, CardContent } from './../ui/card';

interface MovieProps {
  name: string;
  description: string;
  episodes: number;
  genre: string;
  href: string;
}

export function NewReleaseCard({ name, description, episodes, genre, href }: MovieProps) {
  return (
    <Link href={href}>
      <Card className='group relative overflow-hidden h-[300px] 2xl:h-[15vw] w-[200px] 2xl:w-[250px] select-none bg-transparent rounded-xl'>
        <CardContent>
          <Image
            src="/anime.jpg"
            alt="thumbnail"
            fill
            className='object-cover transition duration rounded-xl group-hover:opacity-60 group-hover:scale-105 duration-300'
          />
          <div className='flex flex-col absolute justify-between opacity-0 hover:opacity-100 w-full h-full left-0 bottom-0 text-white p-3 bg-zinc-600/70 bg-opacity-60 lg:group-hover:scale-105 duration-300 transition'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
                <Clapperboard size={14} />
                <h1 className='text-sm'>{episodes} episódios</h1>
              </div>
              <p className='text-xs py-1 px-4 rounded-md bg-black/25 w-fit'>{genre}</p>
            </div>
            <div className='space-y-1'>
              <h1 className='text-base line-clamp-2'>{name}</h1>
              <p className='text-xs line-clamp-5'>{description}</p>
            </div>
            <Button>
              Assistir
            </Button>
          </div>
        </CardContent>
      </Card></Link>
  )
}