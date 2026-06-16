const CategoryFilter = ({
  category,
  setCategory,
}) => {
  return (
    <select
      className="select select-bordered w-full"
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
    >
      <option value="All">
        All Categories
      </option>

      <option value="Web Development">
        Web Development
      </option>

      <option value="Programming">
        Programming
      </option>

      <option value="AI">
        AI
      </option>

      <option value="Career">
        Career
      </option>

      <option value="DevOps">
        DevOps
      </option>
    </select>
  );
};

export default CategoryFilter;