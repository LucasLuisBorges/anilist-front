import Image from "next/image";
import Link from 'next/link';

export default function Anime({ params }: { params: { anime: string } }) {
  return (
    <div className="w-full flex flex-col gap-10 items-center p-2 text-white pt-20">
      <section className="relative w-full flex flex-col gap-4 max-w-7xl p-2 bg-foreground rounded-xl">
        <div className="flex gap-4">
          <Image
            src="/anime.jpg"
            alt="thumbnail"
            width={250}
            height={500}
            className="object-cover rounded-xl"
          />
          <div className="w-full space-y-4">
            <h1 className="w-full font-bold text-3xl text-white">Nome anime</h1>
            <div className="w-full h-[1px] bg-zinc-700" />
            <div className="space-y-2">
              <h1 className="w-full text-lg text-white">Episódios: qnt</h1>
              <h1 className="w-full text-lg text-white">Idioma: DUB</h1>
            </div>
            <div className='space-y-2'>
              <h1 className="w-full text-xl font-bold text-white">Sinopse</h1>
              <div className='overflow-y-scroll max-h-40'>
                <p>
                  O ano é 2222. Já se passaram anos desde que Tears of the New
                  Moon, uma chuva misteriosa, caiu e destruiu quase toda a raça
                  humana. A chuva venenosa deu origem a criaturas deformadas
                  devorando humanos, e a humanidade fugiu do perigo. Como meio de
                  sobrevivência, os humanos então constroem um refúgio
                  subterrâneo; Amasia. Nesta cidade distópica recém-construída, em
                  busca de manter sua existência, eles se deparam com uma
                  Inteligência Artificial chamada Magus. Sem saber como as coisas
                  vão funcionar entre eles, começa a história de como humanos e IA
                  coincidem e tentam encontrar suas verdades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col gap-4 max-w-7xl min-h-screen p-2 bg-foreground rounded-xl'>
        <div className='w-full h-12 flex gap-4 items-center bg-background rounded-xl overflow-hidden'>
          <div className='flex h-full items-center justify-center w-20 bg-blue-600'>
            <h1>1</h1>
          </div>
          <h1>Temporada 1</h1>
        </div>
        <div className='space-y-2'>
          <div className='w-full flex gap-4 items-center h-14 bg-black/30 rounded-xl'>
            <div className='relative h-full w-28'>
              <Image
                src="/anime.jpg"
                alt="thumbnail"
                fill
                className="rounded-xl"
              />
            </div>
            <h1>1 - 1</h1>
            <div className='w-[1px] h-[60%] bg-zinc-700' />
            <Link href={`${params.anime}/episodio=1`} className='hover:underline'>Episódio 1</Link>
          </div>
          <div className='w-full flex gap-4 items-center h-14 bg-black/30 rounded-xl'>
            <div className='relative h-full w-28'>
              <Image
                src="/anime.jpg"
                alt="thumbnail"
                fill
                className="rounded-xl"
              />
            </div>
            <h1>1 - 2</h1>
            <div className='w-[1px] h-[60%] bg-zinc-700' />
            <Link href={`${params.anime}/episodio=2`} className='hover:underline'>Episódio 2</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
