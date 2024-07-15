import { Searchbar } from "./Searchbar";

export const Appbar = () => {
  return (
    <div className="flex justify-between pt-1 p-3">
      <div className="text inline-flex items-center pb-2">Youtube</div>
      <div>
        <Searchbar></Searchbar>
      </div>
      <div className="text inline-flex items-center pb-2">Sign In</div>
    </div>
  );
};
