import Logo from "../assets/bg-Logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setemail] = useState("");
  const [password_hash, setpassword] = useState("");
  const [fname, setfirstname] = useState("");
  const [lname, setlastname] = useState("");
  const [street, setstreetaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzipcode] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", {
        fname,
        lname,
        email,
        password_hash,
        street,
        city,
        state,
        zip,
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
      alert("Invalid credentials" + error);
    }
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 ">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto m-3 h-48 w-auto" src={Logo} alt="Your Company" />
        <h2 class="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create your own Account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form class="space-y-6" onSubmit={handleSubmit}>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm/6 font-medium text-gray-900"
              >
                First name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  value={fname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  value={lname}
                  onChange={(e) => setlastname(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div class="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="Password"
                  autocomplete="Password"
                  value={password_hash}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="street-address"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Street address
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  value={street}
                  onChange={(e) => setstreetaddress(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-sm/6 font-medium text-gray-900"
              >
                City
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="region"
                class="block text-sm/6 font-medium text-gray-900"
              >
                State / Province
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm/6 font-medium text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  value={zip}
                  onChange={(e) => setzipcode(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-LightBlue-100 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-DarkBlue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-8 text-center text-sm/6 text-gray-500">
          Already Have an Account?{" "}
          <a
            href="Login"
            class="font-semibold text-LightBlue-100 hover:text-Darkblue"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
