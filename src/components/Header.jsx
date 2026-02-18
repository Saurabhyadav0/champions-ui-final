import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Framework", path: "/framework" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Login", path: "/login" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full py-4 px-4 md:py-6 md:px-10 flex justify-between items-center bg-transparent absolute top-0 left-0 right-0 z-50 safe-area-inset-top">
        <div className="flex items-center space-x-2 min-w-0">
          <div className="flex-shrink-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-white" aria-hidden />
          <Link
            to="/"
            className="text-white font-bold tracking-widest uppercase text-xs md:text-sm truncate"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            CHAMPIONS<br /><span className="text-gray-400">AGENCY</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest hover:text-white transition-colors duration-300 whitespace-nowrap ${
                location.pathname === link.path ? "text-white border-b border-white pb-1" : "text-gray-400"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:block border border-gray-600 px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 min-h-[44px] min-w-[44px] -mr-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span className={`block w-5 h-0.5 bg-current my-1 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col min-h-full pt-24 pb-8 px-6 safe-area-inset-top safe-area-inset-bottom">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`min-h-[48px] flex items-center text-lg uppercase tracking-widest py-3 border-b border-gray-800 transition-colors ${
                  location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="min-h-[48px] flex items-center text-lg uppercase tracking-widest py-3 text-gray-400 hover:text-white transition-colors mt-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
