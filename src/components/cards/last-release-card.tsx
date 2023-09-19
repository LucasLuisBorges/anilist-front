import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

interface IProps {
  name: string;
  episodes: number | undefined;
  type: string;
}

export function LastReleaseCard({ name, episodes, type }: IProps) {
  return (
    <Card className="group relative h-[42vw] md:h-[22vw] xl:h-[15vw] select-none cursor-pointer overflow-hidden lg:overflow-visible">
      <CardContent>
        <Image
          src="/anime.jpg"
          alt="thumbnail"
          fill
          className="object-cover transition opacity-75 duration rounded-xl group-hover:opacity-60 group-hover:scale-105 duration-300"
        />
        <div className="flex w-full absolute p-3 left-0 top-0 items-center justify-between">
          <h1 className="font-bold text-white cursor-pointer">
            Episódio: {episodes}
          </h1>
          <div className="px-2 py-1 text-base rounded-lg text-white bg-gray-500">
            {type}
          </div>
        </div>
        <h1 className="absolute font-bold left-0 bottom-0 w-full text-white p-3 cursor-pointer bg-darkShadow" >
          {name}
        </h1>
      </CardContent>
    </Card>
  );
}
