import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
      <figure>
        <img
          src={blog.image}
          alt={blog.title}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <div className="badge badge-primary">
          {blog.category}
        </div>

        <h2 className="card-title">
          {blog.title}
        </h2>

        <p className="text-gray-500 line-clamp-2">
          {blog.shortDescription}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link
            href={`/items/${blog.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;