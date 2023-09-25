import { SettingsIcon } from 'lucide-react';

import { Avatar } from '@/components/avatar';
import { ListMoviesCard } from '@/components/cards/list-movies-card';
import { NewMovies } from '@/data/movie';

export default function Perfil() {
  return (
    <div className='w-full flex flex-col gap-20 items-center p-2 text-white pt-20'>
      <section className='relative w-full flex flex-col gap-4 items-center max-w-xl p-2 bg-foreground rounded-xl'>
        <h1 className='text-2xl font-bold'>Meu perfil</h1>
        <Avatar src='/anime.jpg' name='LB' className='h-40 w-40 cursor-pointer' />
        <h1 className='text-lg font-medium'>Meu nome</h1>
        <SettingsIcon className='cursor-pointer absolute right-2 top-2 text-white h-6 w-6' />
      </section>
      <section className='max-w-7xl p-2 w-full space-y-4 bg-foreground rounded-xl'>
        <h1 className='text-2xl font-bold'>Meus favoritos</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
          {NewMovies.map(movie => (
            <ListMoviesCard
              key={movie.id}
              name={movie.name}
              episodes={movie.episodes}
            />
          ))}
        </div>
      </section>
    </div>
  )
}