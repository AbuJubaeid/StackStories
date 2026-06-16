import Categories from "@/components/home/Categories";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials.jsx";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBlogs />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}