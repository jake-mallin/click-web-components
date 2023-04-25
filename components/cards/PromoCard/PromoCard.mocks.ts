import { IPromoCard } from './PromoCard';

const base: IPromoCard = {
  title: `Step Promo Title`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  stepNo: 1,
  url: '/step-promo-1.svg',
};

export const mockPromoCardProps = {
  base,
};
