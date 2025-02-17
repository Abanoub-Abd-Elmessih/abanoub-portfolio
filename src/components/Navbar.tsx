"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaMoon } from "react-icons/fa6";

export const Navbar = () => {
  const pathName = usePathname();

  const links = [
    { path: "/", name: "Home" },
    { path: "/About", name: "About" },
    { path: "/Portfolio", name: "Portfolio" },
    { path: "/Skills", name: "Skills" },
    { path: "/Contact", name: "Contact" },
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-light-subtle shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand text-uppercase fw-light text-main"
          href="/"
        >
          Abanoub
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBarsStaggered />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-md-center">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  className={`nav-link ${pathName === link.path && "active"}`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="btn p-0 mx-md-2 text-start fs-4">
            <FaMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};
