export interface ISearch {
  searchButtonText?: string;
}

const Search: React.FC<ISearch> = ({
  searchButtonText = 'Search vehicles',
}) => {
  return (
    <form className="flex flex-row items-center gap-x-6">
      <select className="select-box" placeholder="Any Make">
        <option>Audi</option>
        <option>BMW</option>
        <option>Mercedes-Benz</option>
        <option>Volkswagen</option>
      </select>
      <select className="select-box" placeholder="Any Model" disabled>
        <option>A1</option>
        <option>A3</option>
        <option>A4</option>
        <option>R8</option>
      </select>
      <button className="btn-primary">{searchButtonText}</button>
    </form>
  );
};

export default Search;
