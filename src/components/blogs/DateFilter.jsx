const DateFilter = ({
  sortOrder,
  setSortOrder,
}) => {
  return (
    <select
      className="select select-bordered w-full"
      value={sortOrder}
      onChange={(e) =>
        setSortOrder(e.target.value)
      }
    >
      <option value="newest">
        Newest First
      </option>

      <option value="oldest">
        Oldest First
      </option>
    </select>
  );
};

export default DateFilter;