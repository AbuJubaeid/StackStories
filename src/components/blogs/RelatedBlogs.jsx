import BlogCard from "./BlogCard";

const RelatedBlogs = ({
  blogs,
  currentBlogId,
  category,
}) => {
  const relatedBlogs = blogs
    .filter(
      (blog) =>
        blog.id !== currentBlogId &&
        blog.category === category
    )
    .slice(0, 3);

  if (!relatedBlogs.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8">
        Related Blogs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedBlogs;