import Image from 'next/image';

interface Props {
  title?: string;
  body?: string;
  stepNo?: number;
  url: string;
}

const PromoCard: React.FC<Props> = (props) => {
  const { url, title, body, stepNo } = props;
  return (
    <div className="relative rounded-2xl bg-white text-center py-8 px-4 shadow-2xl transition-all hover:translate-y-[-16px]">
      <span className="absolute top-[16px] left-[16px] flex justify-center items-center w-[40px] h-[40px] bg-yellow-400 text-blue-800 text-lg font-bold rounded-full shadow-lg">
        {stepNo}
      </span>
      <div className="relative mb-4">
        <Image
          src={url ? url : '/step-promo-1.svg'}
          alt="Step Icon"
          className="mx-auto w-[80px] sm:w-[100px] h-auto md:w-[120px]"
          width="1"
          height="1"
        />
      </div>
      <div className="px-4">
        <h3 className="text-2xl font-bold mb-2 text-blue-800">{title}</h3>
        <p className="text-md text-blue-500">{body}</p>
      </div>
    </div>
  );
};

export default PromoCard;
