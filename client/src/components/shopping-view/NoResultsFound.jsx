import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function NoResultsFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center gap-6">
        <Search className="w-16 h-16 text-gray-400" />
        <h1 className="text-4xl font-semibold text-gray-800">
          No Results Found!
        </h1>
      </div>
    </div>
  );
}

export default NoResultsFound;
