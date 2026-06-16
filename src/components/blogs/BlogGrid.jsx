import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default BlogGrid;