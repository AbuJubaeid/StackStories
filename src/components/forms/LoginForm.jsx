
"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { loginUser, googleLogin } = useAuth();
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login successful!");
      router.push("/");
    } catch {
      setError("Invalid email or password.");
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-1">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Login to your StackStories account
          </p>

          <form onSubmit={handleLogin} className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-error text-sm">{error}</p>}

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full flex gap-2 items-center"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;