
import Link from "next/link";

const categories = [
  { name: "T-Shirt", href: "/products/tshirt" },
  { name: "Shirt", href: "/products/shirt" },
  { name: "Jeans", href: "/products/jeans" },
  { name: "Cotton Pants", href: "/products/cotton-pants" },
];

export default function Navbar() {
  return (
    <div className="navbar  border-gray-200 bg-white px-4  sm:px-6">
      {/* Brand */}
      <div className="navbar-start">
        <Link
          href="/"
          className="text-2xl font-bold tracking-[0.2em] text-black"
        >
          ROVYN<span className="text-blue-700 text-5xl">.</span>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {categories.map((category) => (
            <li key={category.href}>
              <Link
                href={category.href}
                className="font-bold text-black hover:bg-gray-100 hover:text-black"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop actions */}
      <div className="navbar-end hidden gap-2 lg:flex">
        <Link
          href="/signin"
          className="btn  bg-black border-0
           text-gray-400"
        >
          Sign In
        </Link>

        <Link
          href="/signup"
          className="btn bg-gray-600 border-0 text-gray-300 hover:bg-gray-800"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile navigation */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <button
            type="button"
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-white p-2 shadow-lg"
          >
            {categories.map((category) => (
              <li key={category.href}>
                <Link href={category.href}>
                  {category.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/signin">Sign In</Link>
            </li>

            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
