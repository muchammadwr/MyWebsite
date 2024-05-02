import { useState } from "react";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menu = ["Home", "About Me", "Services", "Portfolio", "Contact Me"];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-neutral-800 px-4 py-2 md:py-2">
      <div className="m-auto flex items-center justify-between lg:max-w-5xl">
        {/* logo */}
        <a href="#">
          <img src="/public/logowhite.png" alt="" className="h-12" />
        </a>
        <ul className="hidden flex-row gap-8 md:flex">
          {menu.map((item) => (
            <li key={item} className="group cursor-pointer">
              <a
                href="#"
                className="text-neutral-400 focus:text-neutral-200 group-hover:text-neutral-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} size="lg" />
            )}
          </button>
        </div>
      </div>

      {/* menu items */}
      {menuOpen ? (
        <ul className="mt-6 flex flex-col">
          {menu.map((item) => (
            <li key={item} className="group w-full cursor-pointer py-2">
              <a
                href="#"
                className="text-gray-400 focus:text-white  group-hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
