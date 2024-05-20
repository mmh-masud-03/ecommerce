"use client";

import { FaEnvelope, FaLock, FaUserCheck } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";
import Cookies from "js-cookie";
import { Toaster } from "react-hot-toast";

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === "register") {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Registered successfully");
        router.push("/user/login");
      } else if (res.status === 409) {
        toast.error("User already exists");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Something went wrong");
      }
    }

    if (type === "login") {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const user = await res.json();
      const { _id, username } = user;
      const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);

      if (res.ok) {
        Cookies.set("userName", username, { expires: inOneHour });
        Cookies.set("userId", _id, { expires: inOneHour });
        toast.success("Logged in successfully");
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else if (res.status === 400) {
        toast.error("Invalid email or password");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Something went wrong");
      }
      console.log(res.status);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3">
        <p className="text-2xl font-bold mb-4 text-center">Gadget Hub</p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {type === "register" && (
            <div>
              <div className="flex items-center border rounded-md px-3 py-2">
                <input
                  defaultValue=""
                  {...register("username", {
                    required: "Username is required",
                    validate: (value) => {
                      if (value.length < 3) {
                        return "Username must be at least 3 characters";
                      }
                    },
                  })}
                  type="text"
                  placeholder="Username"
                  className="flex-1 outline-none"
                />
                <FaUserCheck className="text-gray-400" />
              </div>
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
          )}

          <div>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="flex-1 outline-none"
              />
              <FaEnvelope className="text-gray-400" />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                    if (
                      value.length < 5 ||
                      !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                    ) {
                      return "Password must be at least 5 characters and contain at least one special character";
                    }
                  },
                })}
                type="password"
                placeholder="Password"
                className="flex-1 outline-none"
              />
              <FaLock className="text-gray-400" />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full text-lg"
            type="submit"
          >
            {type === "register" ? "Join Now" : "Let's Explore"}
          </button>
        </form>
        {type === "register" ? (
          <Link
            href="/user/login"
            className="block mt-4 text-center text-blue-500"
          >
            Already have an account? Sign In Here
          </Link>
        ) : (
          <Link
            href="/user/register"
            className="block mt-4 text-center text-blue-400"
          >
            Do not have an account? Register Here
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Form;
