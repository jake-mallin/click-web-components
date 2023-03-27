import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export interface IHeroSlider {}

const HeroSlider: React.FC<IHeroSlider> = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        rewind: true,
      }}
      aria-label="Hero Unit Images"
    >
      <SplideSlide>
        <img src="/heroUnit__bg--1.jpg" alt="Hero Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="/heroUnit__bg--2.jpg" alt="Hero Image 2" />
      </SplideSlide>
    </Splide>
  );
};

export default HeroSlider;
