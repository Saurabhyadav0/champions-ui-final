import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Framework", path: "/framework" },
    { name: "Services", path: "/services" },
    { name: "Insights", path: "/insights" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className="w-full py-6 px-10 flex justify-between items-center bg-transparent absolute top-0 left-0 z-50">
      <div className="flex items-center space-x-2">
         {/* Simple Logo Placeholder based on Home.jsx style */}
         <div style={{ width: 8, height: 8, backgroundColor: "#ffffff" }}></div>
        <Link to="/" className="text-white font-bold tracking-widest uppercase text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
          CHAMPIONS<br/><span className="text-gray-400">AGENCY</span>
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-xs uppercase tracking-widest hover:text-white transition-colors duration-300 ${
              location.pathname === link.path ? "text-white border-b border-white pb-1" : "text-gray-400"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

        {/* Contact button matching the design aesthetic usually found in such headers, or just a placeholder if not explicitly requested but good for "premium" feel */}
       <Link to="/contact" className="hidden md:block border border-gray-600 px-6 py-2 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Contact
       </Link>
    </header>
  );
};

export default Header;
