import Card from "./shared/Card";
import { HiSearch } from "react-icons/hi";
function Search({ search, setSearch }) {
  return (
    <>
      <div className="w-full sm:w-[32rem]">
        <Card className="w-full  flex justify-start items-center h-14 px-6 py-4 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id=""
            className="w-full bg-pink-500 bg-opacity-0 px-6 focus:outline-none text-sm dark:placeholder:text-white placeholder:text-[#111517]"
            placeholder=" Search for a country ..."
          />
          <HiSearch className="left-4 text-2xl absolute text-[#111517] dark:text-white" />
        </Card>
      </div>
    </>
  );
}
export default Search;
