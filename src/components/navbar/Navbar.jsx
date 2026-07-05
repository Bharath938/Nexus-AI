import { useState } from "react";
import {
  RiSparkling2Fill,
  GiHamburgerMenu,
  IoClose,
} from "../../assets/icons/index.js";

function Navbar() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const navOptions = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="flex items-center bg-surface justify-between px-4 py-2">
        <div className="flex items-center cursor-pointer gap-2">
          <RiSparkling2Fill className="text-primary" />
          <span>Nexus-AI</span>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {navOptions.map((option) => (
            <a href={option.href}>
              <li
                className="hover:text-primary"
                onClick={() => setHamburgerIsOpen(false)}
              >
                {option.label}
              </li>
            </a>
          ))}
        </ul>

        <button className="hidden md:block bg-primary hover:bg-primary-hover px-4 py-2 rounded-full text-white cursor-pointer">
          GET STARTED
        </button>

        {hamburgerIsOpen ? (
          <IoClose
            onClick={() => setHamburgerIsOpen((prev) => !prev)}
            className="cursor-pointer text-xl"
          />
        ) : (
          <GiHamburgerMenu
            className="md:hidden cursor-pointer"
            onClick={() => setHamburgerIsOpen((prev) => !prev)}
          />
        )}
      </nav>
      {hamburgerIsOpen && (
        <div className="flex flex-col items-center py-4">
          <ul className="flex flex-col items-center gap-6">
            {navOptions.map((option) => (
              <a href={option.href}>
                <li
                  className="hover:text-primary"
                  onClick={() => setHamburgerIsOpen(false)}
                >
                  {option.label}
                </li>
              </a>
            ))}
          </ul>
          <button className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-full text-white mt-4 cursor-pointer">
            GET STARTED
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
