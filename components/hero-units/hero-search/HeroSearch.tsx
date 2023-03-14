import Image from 'next/image';
import styles from './HeroSearch.module.css';

export interface IHeroSearch {}

const HeroSearch: React.FC<IHeroSearch> = () => {
  return (
    <div className={styles.heroUnit}>
      <div className={styles.heroUnit__bg}>
        <Image
          src="/heroUnit__bg.jpg"
          alt="Audi A3"
          width="1920"
          height="1080"
        />
      </div>
      <div className={styles.heroSearch}>
        <div className={styles.heroSearch__message}>
          <h2>Welcome to Jakes Cars</h2>
          <em>Quality used cars in Stoke-on-Trent</em>
        </div>
        <div className={styles.heroSearch__form}>
          <form>
            <select placeholder="Any Make">
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Volkswagen</option>
            </select>
            <select placeholder="Any Model" disabled>
              <option>A1</option>
              <option>A3</option>
              <option>A4</option>
              <option>R8</option>
            </select>
            <input type="submit" value="Search Vehicles" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
