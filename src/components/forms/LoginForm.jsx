"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import {
    googleLogin,
    loginUser,
} from "@/firebase/firebase.auth";

const LoginForm = () => {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password =
      form.password.value;

    try {
      setLoading(true);

      await loginUser(
        email,
        password
      );

      toast.success(
        "Login successful"
      );

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        await googleLogin();

        toast.success(
          "Login successful"
        );

        router.push("/");
      } catch (error) {
        toast.error(
          error.message
        );
      }
    };

  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">
            Login
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-4"
          >
            <div>
              <label className="label">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                className="input input-bordered w-full"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          <div className="divider">
            OR
          </div>

          <button
            onClick={
              handleGoogleLogin
            }
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;