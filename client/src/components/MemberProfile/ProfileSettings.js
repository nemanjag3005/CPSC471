import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
  {
    name: "Workout Bookings",
    href: "/bookings",
    icon: UsersIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileSettings() {
  const [userinfo, setUserinfo] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function getUserinfo() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: {
          token: localStorage.token,
        },
      });

      const parseRes = await response.json();
      setUserinfo(parseRes);
    } catch (err) {
      console.log(err.message);
    }
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  useEffect(() => {
    getUserinfo();
  });

  return (
    <>
      <div>
        <div className="bg-gray-800">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt="Your Company"
                        />
                      </div>
                      <nav className="mt-5 space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-300"
                                  : "text-gray-400 group-hover:text-gray-300",
                                "mr-4 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="flex flex-shrink-0 bg-gray-700 p-4">
                      <a href="/profile" className="group block flex-shrink-0">
                        <div className="flex items-center">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="inline-block stroke-gray-300 h-10 w-10 rounded-full"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-white">
                              {userinfo.firstname} {userinfo.lastname}
                            </p>
                            <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="w-14 flex-shrink-0">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="w-full flex px-5 rounded-lg">
            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                  <nav className="mt-5 flex-1 space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 bg-gray-700 p-4">
                  <a
                    href="/profile"
                    className="group block w-full flex-shrink-0"
                  >
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="inline-block stroke-gray-300 h-9 w-9 rounded-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          {userinfo.firstname} {userinfo.lastname}
                        </p>
                        <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-gray-900">
              <div className="sticky top-0 z-10 bg-gray-900 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                <button
                  type="button"
                  className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <main className="flex-1">
                <div className="py-12">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-semibold text-gray-200">
                      My Profile
                    </h1>
                  </div>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    {/* Replace with your content */}
                    <div className="py-4">
                      <div className="rounded-xl py-8 w-full px-4 w-xl flex flex-col justify-center shadow-xl bg-gray-800">
                        <h1 className="text-2xl  font-bold px-8 text-red-700">
                          {userinfo.firstname} {userinfo.lastname}
                        </h1>
                        <h1 className="text-xl mt-12 font-semibold px-8 text-gray-200">
                          Email
                        </h1>
                        <h1 className="text-lg mt-4 px-8 text-gray-400">
                          {userinfo.email}
                        </h1>
                        <h1 className="text-xl mt-6 font-semibold px-8 text-gray-200">
                          Phone Number
                        </h1>
                        <h1 className="text-lg mt-4 px-8 text-gray-400">
                          {userinfo.phonenumber}
                        </h1>
                        <h1 className="text-xl mt-6 font-semibold px-8 text-gray-200">
                          Address
                        </h1>
                        <h1 className="text-lg mt-4 px-8 text-gray-400">
                          {userinfo.street}, {userinfo.city}, {userinfo.cstate},{" "}
                          {userinfo.zip}
                        </h1>
                        <h1 className="text-xl mt-6 font-semibold px-8 text-gray-200">
                          Membership
                        </h1>
                        <div className="px-8">
                          <div className="rounded-xl bg-gray-500 flex flex-col items-center shadow-xl w-96 mt-6 p-5">
                            <h1 className="text-lg text-red-700">
                              {userinfo.membershiptier == "standard"
                                ? "Standard"
                                : "Premium"}
                            </h1>
                            <h1 className="text-md text-gray-300">
                              Purchase date: {userinfo.to_char}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
