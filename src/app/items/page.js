"use client";

import { useMemo, useState } from "react";

import BlogGrid from "@/components/blogs/BlogGrid";
import CategoryFilter from "@/components/blogs/CategoryFilter";
import DateFilter from "@/components/blogs/DateFilter";
import SearchBar from "@/components/blogs/SearchBar";

import { blogs as staticBlogs } from "@/data/blogs";
import { filterBlogs } from "@/lib/filterBlogs";
import { getAllBlogs } from "@/lib/localStorage";

const ItemsPage = () => {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sortOrder, setSortOrder] =
    useState("newest");

  const blogs = useMemo(
    () => getAllBlogs(staticBlogs),
    []
  );

  const filteredBlogs =
    useMemo(() => {
      return filterBlogs(
        blogs,
        search,
        category,
        sortOrder
      );
    }, [
      blogs,
      search,
      category,
      sortOrder,
    ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-10">
        Explore Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <DateFilter
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      <BlogGrid
        blogs={filteredBlogs}
      />
    </div>
  );
};

export default ItemsPage;