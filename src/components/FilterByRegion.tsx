import Card from "./shared/Card";
import { HiChevronDown } from "react-icons/hi";
function FilterByRegion({ onClick, ...props }) {
  return (
    <div {...props} onClick={onClick}>
      <Card className="px-4 py-2 w-52 h-14 flex items-center justify-between rounded-[0.63rem] cursor-pointer">
        <span className="text-sm tracking-wider"> Filter by Region</span>
        <HiChevronDown />
      </Card>
    </div>
  );
}
export default FilterByRegion;
