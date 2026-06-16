import Link from "next/link";

const BlogDetails = ({ blog }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <div className="mt-8">
        <div className="badge badge-primary">
          {blog.category}
        </div>

        <h1 className="text-4xl font-bold mt-4">
          {blog.title}
        </h1>

        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>
            Author: {blog.author}
          </span>

          <span>{blog.date}</span>
        </div>

        <p className="mt-8 text-lg leading-8">
          {blog.fullDescription}
        </p>

        <Link
          href="/items"
          className="btn btn-outline mt-8"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;