const STORAGE_KEY = "stackstories_blogs";

export const getStoredBlogs = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(
      STORAGE_KEY
    );

    return stored
      ? JSON.parse(stored)
      : [];
  } catch {
    return [];
  }
};

export const saveStoredBlogs = (
  blogs
) => {
  if (typeof window === "undefined")
    return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(blogs)
  );
};

export const addStoredBlog = (
  blog
) => {
  const blogs =
    getStoredBlogs();

  saveStoredBlogs([
    ...blogs,
    blog,
  ]);
};

export const deleteStoredBlog = (
  id
) => {
  const blogs =
    getStoredBlogs();

  const updated =
    blogs.filter(
      (blog) =>
        blog.id !== id
    );

  saveStoredBlogs(updated);
};

export const getAllBlogs = (
  staticBlogs
) => {
  return [
    ...staticBlogs,
    ...getStoredBlogs(),
  ];
};