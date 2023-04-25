import SearchBudget from '@/components/utility/SearchBudget/SearchBudget';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export interface IHeroSlider {}

const HeroSlider: React.FC<IHeroSlider> = () => {
  return (
    <div className="relative">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          rewind: true,
        }}
      >
        <SplideSlide>
          <img src="/heroUnit__bg--1.jpg" alt="Hero Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/heroUnit__bg--2.jpg" alt="Hero Image 2" />
        </SplideSlide>
      </Splide>
      <div className="absolute bottom-0 w-full p-8 bg-black/50">
        <div className="mx-auto max-w-5xl">
          <SearchBudget searchButtonText={'Search'} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
