import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

interface IProps {
  name: string;
  episodes: number | undefined;
}
export function LastMovies({ name, episodes }: IProps) {
  return (
    <Card className="group relative h-[42vw] md:h-[22vw] xl:h-[15vw] select-none bg-darkSecondary cursor-pointer rounded-xl">
      <CardContent>
        <Image
          src="/anime.jpg"
          alt="thumbnail"
          fill
          className="object-cover transition opacity-75 duration rounded-xl group-hover:opacity-60 group-hover:scale-105 duration-300"
        />

        <h1 className="absolute w-full left-0 top-0 font-bold p-3 text-white cursor-pointer bg-darkShadow bg-opacity-60">
          Episódios: {episodes}
        </h1>

        <h1 className="absolute w-full font-bold left-0 bottom-0 text-white p-3 cursor-pointer bg-darkShadow bg-opacity-60">
          {name}
        </h1>
      </CardContent>
    </Card>
  );
}
