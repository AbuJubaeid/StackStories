"use client";

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search blogs..."
        className="input input-bordered w-full"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;