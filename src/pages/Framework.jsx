import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Button from "../components/Button";

const Framework = () => {
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

  const steps = [
    {
      id: "01",
      title: "Baseline Auditing",
      desc: "We begin by identifying the leakage in your current operations. Most leaders are running at 60% efficiency due to hidden structural friction. We strip away the noise to find the core signal, ensuring every resource is accounted for.",
    },
    {
      id: "02",
      title: "The Sovereign Shift",
      desc: "Moving from reacting to dictating. This is a philosophical re-engineering of your decision-making framework to ensure you are the ultimate architect of your outcomes. Ownership is the only metric for leverage.",
    },
    {
      id: "03",
      title: "Legacy Architecting",
      desc: "Beyond the immediate impact of every strategic move. If a decision doesn’t contribute to the 10-year sovereignty goal, it is discarded. Clarity becomes your greatest competitive advantage.",
    },
    {
      id: "04",
      title: "Category Dominance",
      desc: "Defining your category of one. We stop competing on price and start competing on value through high-definition differentiation and superior execution capability.",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-24 pb-20 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="space-y-6">
          <h5
            className="text-accent text-xs tracking-widest uppercase font-bold"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#20b57a" }}
          >
            System Architecture
          </h5>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight uppercase"
            style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}
          >
            The Champions <br /> Framework: <br /> Architecting Absolute <br /> Sovereignty
          </h1>
          <p
             className="max-w-xl text-gray-400 text-sm leading-relaxed border-l-2 border-gray-700 pl-4"
             style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            A clinical 10-week strategic narrative engineered for absolute clarity. 
            We eliminate reverse-drift error and re-architect your operations for global standards 
            through meticulous precision and architectural consistency.
          </p>
        </div>

        {/* Steps Section */}
        <div className="space-y-16">
          {steps.map((step) => (
             <div key={step.id} className="grid md:grid-cols-12 gap-8 items-start border-t border-gray-800 pt-8">
                <div className="md:col-span-2 text-3xl font-bold text-white opacity-50" style={{ fontFamily: "Anton, sans-serif" }}>
                    {step.id}
                </div>
                <div className="md:col-span-4 text-2xl font-bold text-white uppercase leading-none" style={{ fontFamily: "Anton, sans-serif" }}>
                    {step.title}
                </div>
                <div className="md:col-span-6 text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {step.desc}
                </div>
             </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-12 border-t border-gray-800">
             <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "Anton, sans-serif" }}>
                Ready to initiate the shift?
             </h2>
             <Button
                label="Apply the Framework →"
                className="bg-[#20b57a] text-black w-full md:w-auto px-12 py-4"
             />
        </div>
        
        {/* Footer Note */}
         <div className="grid md:grid-cols-2 gap-12 mt-24 pt-12 border-t border-gray-900">
             <div className="flex items-center space-x-2">
                 <div style={{ width: 8, height: 8, backgroundColor: "#20b57a" }}></div>
                 <span className="text-white text-xs tracking-widest uppercase font-bold">CHAMPIONS</span>
             </div>
             <p className="text-gray-600 text-[10px] leading-relaxed max-w-xs">
                Private strategic advisory for those who refuse to settle for average leadership models. Built for total sovereignty and global standardization.
             </p>
         </div>

      </div>
    </MainLayout>
  );
};

export default Framework;
