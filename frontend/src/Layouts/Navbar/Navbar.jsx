import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import AuthenContext from "../../Context/AuthenContext/AuthenContext";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNav(true);
  };
  const handleIsNav = () => {
    setIsDropdownOpen(false);
    setIsNav(false);
  };
  const navigate = useNavigate();
  const {
    handleLogout,
    auth: { isAuthenticated },
  } = useContext(AuthenContext);
  const { auth } = useContext(AuthenContext);
  const logOut = async () => {
    localStorage.removeItem("accessToken");
    await handleLogout();
    navigate("/login");
  };
  return (
    <nav className="bg-gray-600 h-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative  flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-5">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-12 w-auto"
                src="https://i.pinimg.com/736x/e4/09/6f/e4096f0afce5bbb76ef00df733a2e951.jpg"
                alt="Your Avatar"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                    activeLink === "home" ? "bg-gray-700 text-white" : ""
                  }`}
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </Link>
                {/* <Link
                  to={"/music"}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                    activeLink === "music" ? "bg-gray-700 text-white" : ""
                  }`}
                  onClick={() => setActiveLink("music")}
                >
                  Musics
                </Link> */}
                {/* <Link
                  to={"/premium"}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                    activeLink === "premium" ? "bg-gray-700 text-white" : ""
                  }`}
                  onClick={() => setActiveLink("premium")}
                >
                  Premium
                </Link> */}
                <Link
                  to={"/contact"}
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium ${
                    activeLink === "contact" ? "bg-gray-700 text-white" : ""
                  }`}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* ảnh */}
          {isAuthenticated ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!--  dropdown --> */}
              <div className="relative ml-3">
                <div className="flex">
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mt-5"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen ? "true" : "false"}
                    aria-haspopup="true"
                    onClick={handleDropdownClick}
                  >
                    {/* <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span> */}
                    <img
                      className="h-12 w-12 rounded-full"
                      src={auth.user.profilePic}
                      alt=""
                    />
                  </button>
                  <div className="flex flex-col mx-3 mt-3">
                    <span className="text-gray-300 font-bold text-lg">
                      {auth.user.username}{" "}
                    </span>
                    <span className="text-gray-300">
                      Admin{" "}
                      <FaCrown className="inline-block text-yellow-500 " />
                    </span>
                  </div>
                </div>
                <div
                  className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-lg text-gray-700  hover:font-bold"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={handleIsNav}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to={"/favourite"}
                    className="block px-4 py-2 text-lg text-gray-700  hover:font-bold"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                    onClick={handleIsNav}
                  >
                    My Favourites
                  </Link>
                  {auth.user.isAdmin && (
                    <Link
                      to={"/dashboard/home"}
                      className="block px-4 py-2 text-lg text-gray-700  hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                      onClick={handleIsNav}
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-lg text-gray-700  hover:font-bold"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={() => {
                      logOut();
                      handleIsNav();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium mt-5"
              >
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
