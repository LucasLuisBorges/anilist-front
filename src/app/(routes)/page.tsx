import { Plus } from 'lucide-react'

import { LastMovies } from '@/components/cards/last-movies'
import { LastReleaseCard } from '@/components/cards/last-release-card'
import { NewsReleaseSection } from '@/components/news-release-section'
import { NewMovies } from '@/data/movie'

export default function Page() {
  return (
    <div className="flex flex-col gap-20 items-center text-white">
      <div className='px-10 mt-20'>
        <NewsReleaseSection />
      </div>
      <div className='w-full max-w-7xl p-2 space-y-20'>
        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl'>Últimos Lançamentos</h1>
            <Plus size={48} className='cursor-pointer hover:bg-foreground rounded-full p-1' />
          </div>
          <div className='grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 gap-8'>
            {NewMovies.map(movie => (
              <LastReleaseCard
                key={movie.id}
                name={movie.name}
                episodes={movie.episodes}
                type={movie.type}
              />
            ))}
          </div>
        </section>

        <section className='space-y-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl'>Últimos Animes</h1>
            <Plus size={48} className='cursor-pointer hover:bg-foreground rounded-full p-1' />
          </div>
          <div className='grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 gap-8'>
            {NewMovies.map(movie => (
              <LastMovies
                key={movie.id}
                name={movie.name}
                episodes={movie.episodes}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}