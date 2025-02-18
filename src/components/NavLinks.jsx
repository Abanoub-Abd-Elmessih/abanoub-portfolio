import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const NavLinks = ({ links, classes }) => {
  return (
    <ul
      className={twMerge(
        "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50",
        classes
      )}
    >
      {links.map((link) => (
        <li key={link.path}>
          <Link className="font-ovo" href={link.path}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
