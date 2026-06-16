"use client";

import { addStoredBlog } from "@/lib/localStorage";
import { useState } from "react";
import toast from "react-hot-toast";

const AddBlogForm = () => {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const newBlog = {
      id: Date.now(),
      title:
        form.title.value,
      shortDescription:
        form.shortDescription
          .value,
      fullDescription:
        form.fullDescription
          .value,
      category:
        form.category.value,
      image:
        form.image.value,
      author:
        "Current User",
      date:
        form.date.value,
    };

    addStoredBlog(newBlog);

    toast.success(
      "Blog Added Successfully"
    );

    form.reset();

    setLoading(false);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-3xl font-bold">
          Add New Blog
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4"
        >
          <div>
            <label className="label">
              Title
            </label>

            <input
              type="text"
              name="title"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              required
              rows="3"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              required
              rows="6"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Category
            </label>

            <select
              name="category"
              required
              className="select select-bordered w-full"
            >
              <option>
                Web Development
              </option>

              <option>
                Programming
              </option>

              <option>
                AI
              </option>

              <option>
                Career
              </option>

              <option>
                DevOps
              </option>
            </select>
          </div>

          <div>
            <label className="label">
              Published Date
            </label>

            <input
              type="date"
              name="date"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading
              ? "Adding Blog..."
              : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;