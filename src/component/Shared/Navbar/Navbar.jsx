import { Link, NavLink } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-pink-400 transition-colors duration-200"
              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-pink-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltoys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All Toys
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link className="normal-case text-xl flex items-center ">
            House Henter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-lg">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {/* {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOut} className="btns-primary">
                log Out
              </button>
            </div>
          ) : ( */}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          {/* )} */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;