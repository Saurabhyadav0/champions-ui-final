import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Button from "../components/Button";

const Login = () => {
   useEffect(() => {
    const id = "champions-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <MainLayout>
       <div className="flex flex-col items-center justify-center text-center px-4 space-y-8 w-full max-w-md mx-auto">
        <h1
            className="text-3xl md:text-5xl font-bold uppercase leading-tight"
            style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", letterSpacing: "0.02em" }}
          >
           Member Access
        </h1>
        
        <div className="w-full space-y-4">
            <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors text-xs tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif" }}
            />
             <input 
                type="password" 
                placeholder="PASSWORD" 
                 className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors text-xs tracking-widest uppercase"
                style={{ fontFamily: "Montserrat, sans-serif" }}
            />
        </div>

        <Button
            label="Enter →"
             className="bg-white text-black w-full py-3 mt-4"
        />
        
        <p className="text-gray-500 text-xs tracking-widest cursor-pointer hover:text-white transition-colors">
            FORGOT PASSWORD?
        </p>
      </div>
    </MainLayout>
  );
};

export default Login;
