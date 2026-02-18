import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

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
    <Layout>
      <div className="text-center space-y-6 px-4">
        <div className="flex items-center justify-center space-x-2">
          <div
            style={{ width: 10, height: 10, backgroundColor: "#20b57a" }}
          ></div>
          <h1
            className="text-xs tracking-wide uppercase"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#20b57a" }}
          >
            CHAMPIONS
          </h1>
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold uppercase leading-tight"
          style={{ fontFamily: "Anton, sans-serif", color: "#ffffff", letterSpacing: "0.02em" }}
        >
          From Survival <br /> To Sovereignty.
        </h1>

        <p
          className="text-sm max-w-md mx-auto"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#9aa0a4" }}
        >
          Strategic guidance for leaders exiting operational noise.
        </p>

        <div className="flex justify-center">
          <Button
            label="Begin Evaluation →"
            className="bg-[#20b57a] text-black px-10 py-3 text-xs tracking-wide uppercase hover:opacity-90 transition"
            onClick={() => navigate("/home")}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
