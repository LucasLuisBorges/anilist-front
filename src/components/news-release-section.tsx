'use client'

import { NewReleaseCard } from '@/components/cards/new-release-card';
import { NewMovies } from '@/data/movie';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const SCROLL_SPEED = 15;
const SCROLL_DISTANCE = 300;
const SCROLL_STEP = 15;

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number,
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export function NewsReleaseSection() {
  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleScrollLeft = () => {
    if (contentWrapperRef.current) {
      sideScroll(contentWrapperRef.current, SCROLL_SPEED, SCROLL_DISTANCE, -SCROLL_STEP);
    }
  };

  const handleScrollRight = () => {
    if (contentWrapperRef.current) {
      sideScroll(contentWrapperRef.current, SCROLL_SPEED, SCROLL_DISTANCE, SCROLL_STEP);
    }
  };

  return (
    <section className="relative">
      <button
        className="hidden lg:flex absolute top-1/2 z-50 -left-10 text-white"
        onClick={handleScrollLeft}
      >
        <ChevronLeft size={34} />
      </button>
      <div
        className="w-full h-[300px] 2xl:h-[15vw] gap-3 flex flex-col flex-wrap overflow-x-hidden overflow-y-hidden"
        ref={contentWrapperRef}
      >
        {NewMovies.map((movie) => (
          <NewReleaseCard key={movie.id} name={movie.name} description={movie.description} episodes={movie.episodes} genre={movie.genre} />
        ))}
      </div>
      <button
        className="hidden lg:flex absolute top-1/2 z-50 -right-10 text-white"
        onClick={handleScrollRight}
      >
        <ChevronRight size={34} />
      </button>
    </section>
  );
}
