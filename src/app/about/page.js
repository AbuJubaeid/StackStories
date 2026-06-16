export const metadata = {
  title: "About | StackStories",
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          About StackStories
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
          StackStories is a modern blogging platform
          where developers, tech enthusiasts and learners
          can discover valuable insights about web
          development, programming, artificial
          intelligence, DevOps and career growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
        <img
          src="https://i.ibb.co.com/MDb1VMgh/pexels-brettjordan-5714178.jpg"
          alt="About StackStories"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-600">
            We aim to create a platform where quality
            technical content is accessible to everyone.
            Whether you are a beginner or an experienced
            developer, StackStories helps you learn,
            share and grow.
          </p>

          <h2 className="text-3xl font-bold mt-10">
            Our Vision
          </h2>

          <p className="mt-4 text-gray-600">
            To become a trusted knowledge hub for the
            global developer community through
            meaningful stories and educational content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;