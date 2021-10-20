import React from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "./hc-logo.png";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to="/">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={logo}
                      alt="Heart Care"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={logo}
                      alt="Heart Care"
                    />
                    <h2 className="text-2xl font-bold px-2">Heart Care</h2>
                  </div>
                </NavLink>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex text-lg">
                    <nav className="space-x-4 mt-2">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/services">Services</NavLink>
                      <NavLink to="/finddoc">Find Doctor</NavLink>
                      <NavLink to="/aboutus">About Us</NavLink>
                      {/* hide login button when user email found */}
                      {user.email ? null : (
                        <NavLink className="positon-right" to="/login">
                          <button className="inline-block px-2 py-1 rounded-lg border-2 focus:outline-none text-indigo-500 border-indigo-500 hover:border-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">
                            Login
                          </button>
                        </NavLink>
                      )}

                      {/* hide signup button when user email found */}

                      {user.email ? null : (
                        <NavLink className="positon-right" to="/signup">
                          <button className="inline-block px-2 py-1 text-white border-indigo-500 border-2 rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">
                            Sign Up
                          </button>
                        </NavLink>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {/* profile img set */}
                      {user.email ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* display name */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Hello {user.displayName}
                          </a>
                        )}
                      </Menu.Item>
                      {/* Log out option */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {user.email ? (
                              <button onClick={logOut}>Log Out</button>
                            ) : null}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* mobileview navigation */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 font-bold justify-center">
              <nav>
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/services">Services</NavLink>
                <br />
                <NavLink to="/finddoc">Find Doctor</NavLink>
                <br />
                <NavLink to="/aboutus">About Us</NavLink>
                <br />
                {user.email ? null : (
                  <NavLink className="positon-right" to="/login">
                    <button className="inline-block pb-2 px-2 py-1 rounded-lg border-2 focus:outline-none text-indigo-500 border-indigo-500 hover:border-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">
                      Login
                    </button>
                  </NavLink>
                )}
                <br />
                {user.email ? null : (
                  <NavLink className="positon-right" to="/signup">
                    <button className="inline-block pb-2 px-2 py-1 text-white border-indigo-500 border-2 rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">
                      Sign Up
                    </button>
                  </NavLink>
                )}
              </nav>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
