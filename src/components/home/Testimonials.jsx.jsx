const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "StackStories helped me stay updated with the latest web technologies.",
  },
  {
    id: 2,
    name: "Michael Lee",
    review:
      "One of the best platforms for learning development concepts.",
  },
  {
    id: 3,
    name: "Emily Davis",
    review:
      "The articles are practical, detailed and easy to understand.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          What Readers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-lg"
            >
              <div className="card-body">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img
                      src="/default-avatar.png"
                      alt={testimonial.name}
                    />
                  </div>
                </div>

                {/* <p className="italic">
                  "{testimonial.review}"
                </p> */}

                <h4 className="font-semibold">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;