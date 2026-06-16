"use client";

import Link from "next/link";
import { useState } from "react";

import toast from "react-hot-toast";

import ProtectedRoute from "@/components/shared/ProtectedRoute";

import {
    deleteStoredBlog,
    getStoredBlogs,
} from "@/lib/localStorage";

const ManageBlogsPage = () => {
  const [blogs, setBlogs] =
    useState(() =>
      getStoredBlogs()
    );

  const handleDelete = (id) => {
    deleteStoredBlog(id);

    setBlogs((prevBlogs) =>
      prevBlogs.filter(
        (blog) =>
          blog.id !== id
      )
    );

    toast.success(
      "Blog deleted successfully"
    );
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-10">
          Manage Blogs
        </h1>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            No blogs found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>

                    <td>
                      {blog.category}
                    </td>

                    <td>{blog.date}</td>

                    <td className="flex gap-2">
                      <Link
                        href={`/items/${blog.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            blog.id
                          )
                        }
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default ManageBlogsPage;