import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">
              StackStories
            </h2>

            <p className="mt-3 text-gray-600">
              Discover insightful blogs on
              development, technology,
              programming, AI and career growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>

              <Link href="/items">
                Blogs
              </Link>

              <Link href="/about">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Connect
            </h3>

            <div className="flex gap-4 text-2xl">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StackStories.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;