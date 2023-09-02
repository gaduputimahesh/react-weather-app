import React from "react";
import PrimaryButton from "./button/PrimaryButton";

const Search = ({ setCity, onSearch, placeholder, loading }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => setCity(e.target.value)}
        className="p-1.5 px-2 bg-gray-50 border-2  border-slate-950 text-gray-900 text-sm   "
      />
      <PrimaryButton
        text="search"
        sx="p-1.5 px-2 inline"
        disabled={loading}
        onClickHandler={onSearch}
      />
    </div>
  );
};

export default Search;
