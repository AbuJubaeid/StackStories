"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/items">Blogs</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/items/add">
          Add Blog
        </Link>
      </li>

      <li>
        <Link href="/items/manage">
          Manage Blogs
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            StackStories
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <UserDropdown />
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-outline btn-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;