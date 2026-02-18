import FooterNav from "./FooterNav";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <main className="flex-1 flex items-center justify-center min-h-[50vh] pb-24 md:pb-0">
        {children}
      </main>
      <FooterNav />
    </div>
  );
};

export default Layout;
