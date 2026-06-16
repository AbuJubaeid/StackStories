import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-5 lg:py-5">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge badge-primary mb-4">
              Welcome to StackStories
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Discover Stories
              <span className="text-primary block">
                That Matter
              </span>
            </h1>

            <p className="text-lg text-gray-600 mt-6 max-w-xl">
              Explore insightful articles on web development,
              programming, artificial intelligence, career growth,
              and modern technologies from passionate writers.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/items"
                className="btn btn-primary"
              >
                Explore Blogs
              </Link>

              <Link
                href="/about"
                className="btn btn-outline"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://i.ibb.co.com/bMFt9pYT/pexels-karola-g2-6440.jpg"
              alt="Hero"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;