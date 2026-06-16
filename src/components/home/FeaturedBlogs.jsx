import Link from "next/link";

const featuredBlogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Introduction to AI",
    category: "Artificial Intelligence",
  },
];

const FeaturedBlogs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          Featured Blogs
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Hand-picked articles from our community.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition"
            >
              <div className="card-body">
                <div className="badge badge-primary">
                  {blog.category}
                </div>

                <h3 className="text-xl font-bold mt-3">
                  {blog.title}
                </h3>

                <p className="text-gray-500">
                  Read insightful stories and practical
                  guides from experienced developers.
                </p>

                <Link
                  href={`/items/${blog.id}`}
                  className="btn btn-primary btn-sm mt-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;