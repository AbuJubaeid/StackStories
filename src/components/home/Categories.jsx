import {
    FaBrain,
    FaCode,
    FaLaptopCode,
    FaServer,
} from "react-icons/fa";

const categories = [
  {
    title: "Web Development",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Programming",
    icon: <FaCode size={40} />,
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain size={40} />,
  },
  {
    title: "DevOps",
    icon: <FaServer size={40} />,
  },
];

const Categories = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          Browse Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category) => (
            <div
              key={category.title}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">
                {category.icon}

                <h3 className="text-xl font-semibold mt-4">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;