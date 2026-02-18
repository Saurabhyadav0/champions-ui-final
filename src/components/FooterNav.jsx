import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Framework", path: "/framework" },
  { name: "Inquiry", path: "/inquiry" },
  { name: "Insight", path: "/insight" },
];

const FooterNav = () => {
  return (
    <nav className="py-6 flex justify-center gap-10 text-xs tracking-wide">
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive ? "text-accent" : "text-muted"
          }
        >
          {link.name.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default FooterNav;
