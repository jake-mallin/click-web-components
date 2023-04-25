export interface ISearchBudget {
  searchButtonText: string;
}

const SearchBudget: React.FC<ISearchBudget> = ({ searchButtonText }) => {
  return (
    <form className="flex flex-row items-center gap-x-6 mt-[40px]">
      <div className="formgroup relative flex flex-row items-center gap-x-6">
        <select className="select-box" placeholder="Any make">
          <option>Audi</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Volkswagen</option>
        </select>
        <select className="select-box" placeholder="Any model" disabled>
          <option>A1</option>
          <option>A3</option>
          <option>A4</option>
          <option>R8</option>
        </select>
      </div>
      <div className="formgroup relative flex flex-row justify-center">
        <div className="budgettoggle absolute bottom-full flex flex-row items-center justify-center gap-x-2 mb-[8px]">
          <div className="text-right text-white">Price</div>
          <div className="text-center">
            <input
              type="checkbox"
              className="relative block w-[64px] h-[32px] bg-white rounded-full appearance-none before:content-[''] before:inline-block before:absolute before:bg-black before:h-[28px] before:w-[28px] before:rounded-full before:top-[2px] before:left-[2px] before:checked:left-[34px] before:transition-all"
            ></input>
          </div>
          <div className="text-left text-white">Finance</div>
        </div>
        <select className="select-box" placeholder="Select your budget">
          <option>£2,000</option>
          <option>£3,000</option>
          <option>£4,000</option>
          <option>£5,000</option>
          <option>£6,000</option>
          <option>£7,000</option>
          <option>£8,000</option>
          <option>£9,000</option>
          <option>£10,000</option>
          <option>£11,000</option>
          <option>£12,000</option>
          <option>£13,000</option>
          <option>£14,000</option>
          <option>£15,000</option>
        </select>
      </div>
      <button className="btn-primary whitespace-nowrap" type="submit">
        {searchButtonText}
      </button>
    </form>
  );
};

export default SearchBudget;
