import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Framework", path: "/framework" },
  { name: "Inquiry", path: "/inquiry" },
  { name: "Insights", path: "/insights" },
];

const FooterNav = () => {
  return (
    <nav className="py-4 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-wide">
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded ${isActive ? "text-accent" : "text-muted hover:text-white"} active:opacity-80`
          }
        >
          {link.name.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default FooterNav;
