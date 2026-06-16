"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import {
    registerUser,
    updateUserProfile,
} from "@/firebase/firebase.auth";

const RegisterForm = () => {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name =
      form.name.value;

    const photo =
      form.photo.value;

    const email =
      form.email.value;

    const password =
      form.password.value;

    try {
      setLoading(true);

      await registerUser(
        email,
        password
      );

      await updateUserProfile(
        name,
        photo
      );

      toast.success(
        "Registration successful"
      );

      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-4"
          >
            <div>
              <label className="label">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                Photo URL
              </label>

              <input
                type="text"
                name="photo"
                className="input input-bordered w-full"
              />
            </div>

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
                minLength={6}
                className="input input-bordered w-full"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;