"use client";

import { logoutUser } from "@/firebase/firebase.auth";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserDropdown = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      router.push("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co/GJ4Y8xB/default-avatar.png"
            }
            alt="user"
          />
        </div>
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 z-[100] w-64 rounded-box bg-base-100 shadow-lg p-2"
      >
        <div className="px-3 py-2 border-b">
          <h3 className="font-semibold">
            {user?.displayName || "User"}
          </h3>

          <p className="text-sm text-gray-500">
            {user?.email}
          </p>
        </div>

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

        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;