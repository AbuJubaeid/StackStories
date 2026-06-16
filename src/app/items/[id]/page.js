"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

import BlogDetails from "@/components/blogs/BlogDetails";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import { blogs as staticBlogs } from "@/data/blogs";
import { getAllBlogs } from "@/lib/localStorage";

const BlogDetailsPage = () => {
  const params = useParams();

  const allBlogs = useMemo(
    () => getAllBlogs(staticBlogs),
    []
  );

  const blog = useMemo(() => {
    return allBlogs.find(
      (item) =>
        item.id === Number(params.id)
    );
  }, [allBlogs, params.id]);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">
          Blog not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <BlogDetails blog={blog} />

      <RelatedBlogs
        blogs={allBlogs}
        currentBlogId={blog.id}
        category={blog.category}
      />
    </div>
  );
};

export default BlogDetailsPage;