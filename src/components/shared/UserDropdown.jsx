

"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserDropdown = () => {
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.displayName || "User"}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="px-4 py-2 font-semibold text-sm">
          {user?.displayName || "User"}
        </li>
        <li><Link href="/items/manage">Manage Blogs</Link></li>
        <li><Link href="/items/add">Add Blog</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default UserDropdown;