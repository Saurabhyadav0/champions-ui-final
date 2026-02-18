import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bg relative">
      <Header />
      <main className="flex-1 pt-24 pb-12 px-4 md:px-10">
        {children}
      </main>
      {/* Footer removed for internal pages as requested */}
    </div>
  );
};

export default MainLayout;
