import PromoCard from '@/components/cards/PromoCard/PromoCard';

export interface IStepPromo {
  promoTitle?: string;
  subtext?: string;
}

const StepPromo: React.FC<IStepPromo> = ({ promoTitle, subtext }) => {
  return (
    <div className="bg-blue-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="block mb-12 text-3xl font-bold text-center text-white">
          {promoTitle}
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[32px] w-full">
          <PromoCard
            url={'/step-promo-1.svg'}
            stepNo={1}
            title={'Enter your vehicle registration'}
          />
          <PromoCard
            url={'/step-promo-2.svg'}
            stepNo={2}
            title={
              'We will contact you with an up-to-the-minute market valuation of your vehicle'
            }
          />
          <PromoCard
            url={'/step-promo-3.svg'}
            stepNo={3}
            title={
              'We can either collect your vehicle, or you can deliver it to our showroom'
            }
          />
          <PromoCard
            url={'/step-promo-4.svg'}
            stepNo={4}
            title={'Get paid in seconds once everything is agreed'}
          />
        </div>

        <div className="block mt-12 text-2xl font-bold text-center text-white">
          {subtext}
        </div>
      </div>
    </div>
  );
};

export default StepPromo;
