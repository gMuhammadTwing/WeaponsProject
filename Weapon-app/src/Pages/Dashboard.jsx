import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import NactaLogo from "../assets/NACTA LOGO.png";
// import NCPhoto from "../assets/NCPhoto.jpg";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import auth from "../auth";
// import { useApiContext } from "../ApiProvider";
// import Footer from "../Components/Footer";
// import Tippy from "@tippyjs/react";
// import useTokenRefresh from "../useTokenRefresh";
// import Footer from "../Components/Footer";
const user = {
  name: "IGP Tahir Rai",
  email: "NC@example.com",
  imageUrl:
    "https://i3.wp.com/static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg",
};
const navigation = [
  // {
  //   name: "Threat Alerts",
  //   href: "/threat-alerts",
  //   single:'/single-threat'
  // },
  // {
  //   name: "Request/Response",
  //   href: "/request-response",
  //   single:'/'
  // },
  {
    name: <HomeIcon className="w-5 h-5" />,
    href: "/Home",
    single: "/Home",
    permission: "6225ebcb30",
  },
  {
    name: "Threat",
    href: "/threat-alerts",
    single: "/threat-alerts",
    permission: "a663af2678",
  },
  {
    name: "Suspect",
    href: "/suspect",
    single: "/single-suspect",
    permission: "a663af2678",
  },
  {
    name: "Terrorist Organizations",
    href: "/terrorist-organizations",
    single: "/single-terrorist-org",
    permission: "b2162a0cbc",
  },
  {
    name: "Incidents",
    href: "/incidents",
    single: "/single-incident",
    permission: "b2162a0cbc",
  },
  // {
  //   name: "Live Profile",
  //   href: "/live-profile",
  //   single: "/live-profile",
  //   permission: "bb209f9518",
  // },
  {
    name: "Reports",
    href: "/user-activity",
    single: "/user-activity",
    permission: "9f83b7d41c",
  },

].filter(Boolean);

// Function to get permissions from localStorage
const getPermissionsFromLocalStorage = () => {
  const permissions = localStorage.getItem("permissions");
  return permissions ? JSON.parse(permissions) : [];
};
// Function to filter navigation items based on permissions
const filterNavigationByPermissions = (navigation, permissions) => {
  const permissionNames = permissions.map((p) => p.field_name);
  return navigation.filter((item) => permissionNames.includes(item.permission));
};

const userNavigation = [
  { name: "Your Profile", href: "#/profile" },
  { name: "Admin Panel", href: "#/admin" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
//   const [filteredNavigation, setFilteredNavigation] = useState([]);

//   useEffect(() => {
//     const permissions = getPermissionsFromLocalStorage();
//     const filteredNav = filterNavigationByPermissions(navigation, permissions);
//     setFilteredNavigation(filteredNav);
//   }, []);
  // const { apiData, fetchData } = useApiContext();
//   useTokenRefresh();
  useEffect(() => {
    // auth.checkAuth();
  }, []);
  const callApi = () => {
    // console.log(apiData)
  };
//   const location = useLocation();
//   const navigate = useNavigate();
//   if (!localStorage.token) {
//     navigate("/login");
//   }
  return (
    <>
      <div className="overflow-y-hidden h-[95vh]">
        <header className="bg-white shadow-sm">
          <div className="mx-auto py-1 lg:px-14 flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="h-14 w-14" src="" alt="Your Company" />
            </div>
            <div className=" font-bold text-2xl text-gray-900 flex justify-center items-center gap-2">
              <span>Data </span>
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl">
                X
              </span>
            </div>
            <div className="ml-4 flex items-center">
              {/* <Tippy content="View Notifications" placement="left" className="bg-gray-800 rounded-md shadow-xl" arrow={true}> */}
              <button
                type="button"
                className="relative rounded-full text-gray-900 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:-translate-z-1  duration-300"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>

                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
              {/* </Tippy> */}
              {/* User Menu */}
              <Menu as="div" className="relative ml-3">
                <div>
                  {/* <Tippy content="View Profile" placement="right" className="bg-gray-800 rounded-md shadow-xl" arrow={true}> */}
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400 ">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <h1 className="text-gray-800 px-2 font-semibold">
                      {localStorage?.user_name}
                    </h1>
                    {/* Replace this with your user image */}
                    <img
                      className="h-12 w-12 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </Menu.Button>
                  {/* </Tippy> */}
                </div>
                <Transition
                  as={Fragment}
                  enter=""
                  enterFrom=""
                  enterTo=""
                  leave=""
                  leaveFrom=""
                  leaveTo=""
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) =>
                          item.name == "Sign out" ? (
                            <button
                              onClick={async () => {
                                await auth.logout();

                                navigate("/login");
                              }}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "px-3 py-1 text-sm  text-gray-900 w-full justify-start "
                              )}
                            >
                              {item.name}
                            </button>
                          ) : (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )
                        }
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </header>
        <Disclosure
          as="nav"
          className=" bg-gradient-to-r to-blue-500 from-green-500 "
        >
          {({ open }) => (
            <>
              <div className=" mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-center  items-center">
                  <div className="flex items-center">
                    {/* <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div> */}
                    <div className="hidden md:block items-center">
                      {/* <div className="gap-1 flex items-center space-x-4">
                        {filteredNavigation?.map((item, index) => (
                          <Link
                            onClick={() => callApi()}
                            key={index}
                            to={item.href}
                            className={classNames(
                              location.pathname.includes(item.href) ||
                                location.pathname.includes(item?.single)
                                ? "bg-blue-800 text-white translate-z-1"
                                : "text-white hover:bg-blue-600 hover:text-white ",
                              "rounded-md px-3 py-2 text-sm font-medium hover:translate-z-1"
                            )}
                            aria-current={
                              location.pathname.includes(item.href) ||
                              location.pathname.includes(item?.single)
                                ? "page"
                                : undefined
                            }
                          >
                            {item.name === "Dashboard" ? (
                              <div className="flex gap-1 items-center">
                                {" "}
                                <svg
                                  width="24"
                                  height="24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 9a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2v3a2 2 0 01-2 2H5zm0-2h4V4H5v3zm0 15a2 2 0 01-2-2v-8a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2H5zm0-2h4v-8H5v8zm8 0a2 2 0 002 2h4a2 2 0 002-2v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2zm6 0h-4v-2h4v2zm-4-6a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4zm0-2h4V4h-4v8z"
                                    fill="currentColor"
                                  />
                                </svg>{" "}
                                {item.name}{" "}
                              </div>
                            ) : (
                              item.name
                            )}
                          </Link>
                        ))}
                      </div> */}
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                {/* <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div> */}
                {/* <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto bg-gray-100  overflow-y-scroll scrollbar-hide max-h-[79vh] min-h-[79vh]">
            <Outlet />
          </div>
        </main>
        {/* <Footer /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
