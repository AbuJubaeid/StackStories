const features = [
  {
    title: "Expert Writers",
    description:
      "Content written by passionate developers and technology enthusiasts.",
  },
  {
    title: "Latest Insights",
    description:
      "Stay updated with modern technologies and industry trends.",
  },
  {
    title: "Community Driven",
    description:
      "Learn and grow together with a global developer community.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          Why Choose StackStories?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body">
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;