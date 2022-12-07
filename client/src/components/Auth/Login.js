import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function submit(data) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);

      setAuth(true);
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setError("Wrong email or password.");
      console.log(err.message);
      setLoading(false);
      return;
    }
  }
  return (
    <>
      <div className="flex h-screen bg-gray-900">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 bg-gray-800 rounded-md py-20 shadow-xl px-10">
            <div>
              <h2 className=" text-3xl text-center font-bold tracking-tight text-gray-200">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit(submit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full appearance-none bg-gray-600 rounded-md text-gray-100 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                        type="email"
                        id="email"
                        {...register("email", {
                          required: true,

                          pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                        })}
                        required
                      />
                      {errors.email && errors.email.type === "required" && (
                        <h2 className="text-red-400 font-medium mt-2">
                          This field is required.
                        </h2>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <h2 className="text-red-400 font-medium mt-2">
                          This is not an email address.
                        </h2>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        className="block w-full appearance-none rounded-md bg-gray-600 text-gray-100 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                        type="password"
                        id="password"
                        required
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 30,
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <Oval
                          height={20}
                          width={20}
                          color="#bfdbfe"
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#a5b4fc"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      ) : (
                        <>Log in</>
                      )}
                    </button>
                    {error && (
                      <h2 className="text-red-400 font-medium mt-2">{error}</h2>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
