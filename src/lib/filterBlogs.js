export const filterBlogs = (
  blogs,
  search,
  category,
  sortOrder
) => {
  let filtered = [...blogs];

  if (search) {
    filtered = filtered.filter(
      (blog) =>
        blog.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );
  }

  if (
    category &&
    category !== "All"
  ) {
    filtered = filtered.filter(
      (blog) =>
        blog.category ===
        category
    );
  }

  filtered.sort((a, b) => {
    if (sortOrder === "oldest") {
      return (
        new Date(a.date) -
        new Date(b.date)
      );
    }

    return (
      new Date(b.date) -
      new Date(a.date)
    );
  });

  return filtered;
};