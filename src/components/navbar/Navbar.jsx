import { useState } from "react";
import {
  RiSparkling2Fill,
  GiHamburgerMenu,
  IoClose,
} from "../../assets/icons/index.js";
import PurpleButton from "../ui/Button/PurpleButton.jsx";
import Logo from "../nexus-ai-logo/Logo.jsx";

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
        <Logo />
        <ul className="hidden md:flex items-center gap-6 border border-border py-2 px-4">
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

        <PurpleButton buttonText="Get 14 Days Free Trail" />

        {hamburgerIsOpen ? (
          <IoClose
            onClick={() => setHamburgerIsOpen((prev) => !prev)}
            className="md:hidden cursor-pointer text-xl"
          />
        ) : (
          <GiHamburgerMenu
            className="md:hidden cursor-pointer"
            onClick={() => setHamburgerIsOpen((prev) => !prev)}
          />
        )}
      </nav>
      {hamburgerIsOpen && (
        <div className="lg:hidden flex flex-col items-center py-4">
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
          <PurpleButton buttonText="Get 14 Days Free Trail" />
        </div>
      )}
    </>
  );
}

export default Navbar;
