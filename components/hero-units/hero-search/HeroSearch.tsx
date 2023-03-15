import Search from '@/components/utility/Search/Search';
import SearchBudget from '@/components/utility/SearchBudget/SearchBudget';
import Image from 'next/image';
import styles from './HeroSearch.module.css';

export interface IHeroSearch {
  heroMainHeading: string;
  heroSubHeading: string;
}

const HeroSearch: React.FC<IHeroSearch> = ({
  heroMainHeading,
  heroSubHeading,
}) => {
  return (
    <div className="relative flex flex-row items-end justify-center w-screen min-h-[560px] h-[75vh] min-w-full overflow-hidden rounded-b-[48px]">
      <div className="absolute pointer-events-none h-full w-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:z-1">
        <Image
          src="/heroUnit__bg.jpg"
          alt="Audi A3"
          width="1920"
          height="1080"
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-full min-h-full z-0"
        />
      </div>
      <div className="relative mb-16 z-2">
        <div className={styles.heroSearch__message}>
          <h2 className="text-4xl text-white font-bold text-center mb-2 text-shadow-md">
            {heroMainHeading}
          </h2>
          <em className="block text-2xl text-white not-italic text-center mb-8 text-shadow">
            {heroSubHeading}
          </em>
        </div>
        <div className={styles.heroSearch__form}>
          <SearchBudget searchButtonText={'Search'} />
          <Search searchButtonText={'Search Vehicles'} />
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
