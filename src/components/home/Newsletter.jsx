const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-primary text-primary-content rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-4">
            Get the latest stories, tutorials and insights
            delivered directly to your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered text-black w-full md:w-96"
            />

            <button className="btn btn-neutral">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;