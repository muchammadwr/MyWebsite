import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const menu = [
  {
    page: "Home",
    href: "#home",
  },
  {
    page: "About",
    href: "#about",
  },
  {
    page: "Services",
    href: "#services",
  },
  {
    page: "Portfolio",
    href: "#portfolio",
  },
  {
    page: "Contact",
    href: "#contact",
  },
];

const Navbar = ({ style }: { style: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`active ${show && "hidden"} w-full ${style} bg-neutral-800 px-4 py-2 md:py-2`}
    >
      <div className="m-auto flex items-center justify-between lg:max-w-5xl">
        {/* logo */}
        <a href="#home">
          <img src="/public/logowhite.png" alt="" className="h-12" />
        </a>
        <ul className="hidden flex-row gap-8 md:flex">
          {menu.map((item, index) => (
            <li key={index} className="group cursor-pointer">
              <a
                href={item.href}
                className="text-neutral-400 group-hover:text-neutral-200 group-focus:text-neutral-200"
              >
                {item.page}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {menuOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="transform transition-all duration-150 ease-in-out"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                size="lg"
                className="transform transition-all duration-150 ease-in-out focus:rotate-3"
              />
            )}
          </button>
        </div>
      </div>

      {/* menu items */}
      {menuOpen ? (
        <ul className="mt-6 flex flex-col md:hidden">
          {menu.map((item, index) => (
            <li key={index} className="group w-full cursor-pointer py-2">
              <a
                href={item.href}
                className="text-neutral-400 focus:text-neutral-200  group-hover:text-neutral-200"
              >
                {item.page}
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
