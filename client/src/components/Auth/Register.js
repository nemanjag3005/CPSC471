import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // @ts-ignore
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  async function registerUser(data) {
    setLoading(true);

    if (data.password !== data.password2) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    } else {
      try {
        const response = await fetch("http://localhost:5000/auth/register", {
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
        setError("Error");
        setLoading(false);
        return;
      }
    }
  }
  return (
    <>
      <div className="min-h-full w-full bg-gray-900">
        <div className="max-w-3xl mx-auto flex items-center flex-col text-gray-200 w-full space-y-4 py-12 px-4 justify-center">
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-200">
            Sign Up
          </h1>
          <p>
            Or <a className="text-red-600 cursor-pointer">log in</a> if you
            already have an account.
          </p>
          <div className="rounded-xl py-8 w-full px-4 w-xl flex flex-col items-center justify-center shadow-xl bg-gray-800">
            <form
              onSubmit={handleSubmit(registerUser)}
              className="flex flex-col items-center justify-col px-8 py-4 w-full "
            >
              <div className="w-full flex space-x-6">
                <div>
                  <label className="text-gray-300 font-medium mr-auto">
                    First Name
                  </label>
                  <input
                    className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                    type="text"
                    id="firstName"
                    {...register("firstName", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    required
                  />
                  {errors.firstName && errors.firstName.type === "required" && (
                    <h2 className="text-red-400 font-medium mt-2">
                      This field is required.
                    </h2>
                  )}
                  {errors.firstName &&
                    (errors.firstName.type === "minLength" ||
                      errors.firstName.type === "maxLength") && (
                      <h2 className="text-red-400 font-medium mt-2">
                        First name must be at least 2 characters long.
                      </h2>
                    )}
                </div>
                <div>
                  <label className="text-gray-300 font-medium mr-auto">
                    Last Name
                  </label>
                  <input
                    className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                  />
                  {errors.lastName && errors.lastName.type === "required" && (
                    <h2 className="text-red-400 font-medium mt-2">
                      This field is required
                    </h2>
                  )}
                  {errors.lastName &&
                    (errors.lastName.type === "minLength" ||
                      errors.lastName.type === "maxLength") && (
                      <h2 className="text-red-400 font-medium mt-2">
                        Last name must be at least 2 characters long
                      </h2>
                    )}
                </div>
              </div>

              <label className="text-gray-300 font-medium mr-auto">Email</label>
              <input
                type="email"
                className="border-gray-500 focus:ring-red-500 bg-gray-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                id="email"
                {...register("email", {
                  required: true,

                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
                required
              />
              {errors.email && errors.email.type === "required" && (
                <h2 className="text-red-400 font-medium mt-2">
                  This field is required
                </h2>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <h2 className="text-red-400 font-medium mt-2">
                  This is not a valid email address.
                </h2>
              )}
              <label className="text-gray-300 font-medium mr-auto">
                Phone Number
              </label>
              <input
                type="tel"
                className="border-gray-500 focus:ring-red-500 bg-gray-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                  minLength: 9,
                  maxLength: 16,
                })}
                required
              />
              {errors.phone &&
                (errors.phone.type === "minLength" ||
                  errors.phone.type === "maxLength") && (
                  <h2 className="text-red-400 font-medium mt-2">
                    Phone number too long.
                  </h2>
                )}
              <label className="text-gray-300 font-medium mr-auto">
                Password
              </label>
              <input
                type="password"
                className="border-gray-500 focus:ring-red-500 bg-gray-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 30,
                })}
                required
              />
              {errors.password &&
                (errors.password.type === "minLength" ||
                  errors.password.type === "maxLength") && (
                  <h2 className="text-red-400 font-medium mt-2">
                    Password must be at least 6 characters long.
                  </h2>
                )}
              <label className="text-gray-300 font-medium mr-auto">
                Confirm password
              </label>
              <input
                type="password"
                className="border-gray-500 focus:ring-red-500 bg-gray-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                id="password2"
                {...register("password2", {
                  required: true,
                  minLength: 6,
                  maxLength: 30,
                })}
                required
              />
              <label className="text-gray-300 font-medium mr-auto">
                Street Address
              </label>
              <input
                type="text"
                className="border-gray-500 focus:ring-red-500 bg-gray-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                id="street"
                {...register("street", {
                  required: true,
                })}
                required
              />
              {errors.street && errors.street.type === "required" && (
                <h2 className="text-red-400 font-medium mt-2">
                  This field is required
                </h2>
              )}
              <div className="w-full flex space-x-6">
                <div>
                  <label className="text-gray-300 font-medium mr-auto">
                    City
                  </label>
                  <input
                    className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                    type="text"
                    id="city"
                    {...register("city", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    required
                  />
                  {errors.city && errors.city.type === "required" && (
                    <h2 className="text-red-400 font-medium mt-2">
                      This field is required.
                    </h2>
                  )}
                  {errors.city &&
                    (errors.city.type === "minLength" ||
                      errors.city.type === "maxLength") && (
                      <h2 className="text-red-400 font-medium mt-2">
                        City must be at least 2 characters long.
                      </h2>
                    )}
                </div>
                <div>
                  <label className="text-gray-300 font-medium mr-auto">
                    State
                  </label>
                  <input
                    className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                    type="text"
                    id="state"
                    {...register("state", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                  />
                  {errors.state && errors.state.type === "required" && (
                    <h2 className="text-red-400 font-medium mt-2">
                      This field is required
                    </h2>
                  )}
                  {errors.state &&
                    (errors.state.type === "minLength" ||
                      errors.state.type === "maxLength") && (
                      <h2 className="text-red-400 font-medium mt-2">
                        State must be at least 2 characters long
                      </h2>
                    )}
                </div>
                <div>
                  <label className="text-gray-300 font-medium mr-auto">
                    Zip
                  </label>
                  <input
                    className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                    type="text"
                    id="zip"
                    {...register("zip", {
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                  />
                  {errors.zip && errors.zip.type === "required" && (
                    <h2 className="text-red-400 font-medium mt-2">
                      This field is required
                    </h2>
                  )}
                  {errors.zip &&
                    (errors.zip.type === "minLength" ||
                      errors.zip.type === "maxLength") && (
                      <h2 className="text-red-400 font-medium mt-2">
                        Zip must be at least 2 characters long
                      </h2>
                    )}
                </div>
              </div>
              <label className="text-gray-300 font-medium mr-auto">
                Membership
              </label>

              <select
                id="membershipTier"
                name="membershipTier"
                {...register("membershipTier")}
                className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
              >
                <option value="standard">Standard - 79$</option>
                <option value="premium">Premium - 99$</option>
              </select>

              <label className="text-gray-300 font-medium mr-auto">
                Card Number*
              </label>
              <input
                className="border-gray-500 bg-gray-500 focus:ring-red-500 w-full border-2 mb-6 rounded-md px-4 py-2 shadow-md"
                type="text"
                id="cardNumber"
                {...register("cardNumber", {
                  required: true,
                  minLength: 16,
                  maxLength: 16,
                })}
              />
              {errors.cardNumber && errors.cardNumber.type === "required" && (
                <h2 className="text-red-400 font-medium mt-2">
                  This field is required
                </h2>
              )}
              {errors.cardNumber &&
                (errors.cardNumber.type === "minLength" ||
                  errors.cardNumber.type === "maxLength") && (
                  <h2 className="text-red-400 font-medium mt-2">
                    Card number must have 16 digits.
                  </h2>
                )}

              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-md font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? <Oval /> : <>Sign Up</>}
              </button>

              {error && (
                <h2 className="text-red-400 font-medium mt-2">{error}</h2>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
