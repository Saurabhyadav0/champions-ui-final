import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Button from "../components/Button";

const About = () => {
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
      <div className="max-w-5xl mx-auto pb-20 space-y-24">
          {/* Header */}
          <div className="space-y-6">
             <div className="flex items-center space-x-4 mb-4">
                <div className="text-gray-500 text-[10px] uppercase tracking-widest border-l border-gray-600 pl-4"> Sovereign Dens / Group</div>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight" style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}>
                 The Architect of <br/> <span className="text-gray-500">Sovereign Identity.</span>
             </h1>
          </div>

          {/* Content Split */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
               <div className="w-full h-96 bg-gray-900 rounded-lg overflow-hidden relative">
                   {/* Abstract wavy texture image */}
                   <img 
                      src="https://images.unsplash.com/photo-1614850523296-6313d42f6368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Abstract Architecture" 
                      className="w-full h-full object-cover opacity-60"
                   />
               </div>
               <div className="space-y-8">
                   <p className="text-gray-500 text-[10px] uppercase tracking-widest">Manifest / The 5 Regulation</p>
                   <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Anton, sans-serif" }}>
                       The performance trap is a silent architecture.
                   </h2>
                   <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                       For a decade, I operated within the highest echelons of global strategic advisory. I saw brilliance neutralized by systemic noise. High performers were winning the game but losing the ground they stood on.
                   </p>
                   <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                       Champions Agency was born from a single realization: True influence requires sovereignty. It requires an identity OS that is immune to external volatility. We don't just optimize; we rebuild the core.
                   </p>
               </div>
          </div>

          {/* Standard Section */}
          <div className="space-y-12 pt-12 border-t border-gray-800">
             <div className="flex items-baseline space-x-4">
                 <h5 className="text-gray-600 text-[10px] uppercase tracking-widest">Movement 01 / Core Ethics</h5>
                 <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Anton, sans-serif" }}>The B2 Standard.</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                     <h3 className="text-accent text-sm font-bold uppercase tracking-widest">01 Digital Integrity</h3>
                     <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                         Every pixel and every line of code serves the purpose of clarity. We remove the ornamental to reveal the essential architecture of your brand.
                     </p>
                 </div>
                 <div className="space-y-4">
                     <h3 className="text-accent text-sm font-bold uppercase tracking-widest">02 Strategic Depth</h3>
                     <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        We solve for the long-term legacy. Our frameworks are designed to outlast market cycles and provide a permanent foundation for growth.
                     </p>
                 </div>
             </div>
          </div>

          {/* Quote */}
          <div className="bg-gray-900/50 p-12 md:p-24 rounded-lg text-center space-y-8 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent opacity-5 text-9xl">❖</div>
               <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10 leading-relaxed" style={{ fontFamily: "Anton, sans-serif" }}>
                   "Sovereignty is the ultimate luxury. It is the ability to say no to the noise so you can say yes to the <span className="text-accent">legacy</span>."
               </h2>
          </div>

          {/* CTA */}
           <div className="text-center space-y-6 pt-12">
               <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "Anton, sans-serif" }}>Ready to audit your architecture?</h3>
               <p className="text-gray-400 text-xs">We accept a limited number of clients per quarter to ensure 100% consistency and attention to the Sovereign Protocol.</p>
               <Button label="Start the Engagement →" className="bg-[#20b57a] text-black w-full md:w-auto px-12 py-4" />
           </div>

           {/* Footer Links (Simplified) */}
           <div className="grid md:grid-cols-4 gap-12 mt-24 pt-12 border-t border-gray-900 text-xs text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <div className="space-y-4">
                   <div className="flex items-center space-x-2">
                       <span className="text-accent">❖</span>
                       <span className="text-white font-bold uppercase">CHAMPIONS</span>
                   </div>
                   <p>The strategic authority for global leaders. We build sovereign identities through architectural vision, strategy, and deep psychological alignment.</p>
              </div>
              <div className="space-y-2">
                 <h5 className="text-white font-bold uppercase mb-4">Framework</h5>
                 <p className="hover:text-white cursor-pointer">Module 01</p>
                 <p className="hover:text-white cursor-pointer">Sovereignty Lab</p>
                 <p className="hover:text-white cursor-pointer">The Protocol</p>
             </div>
             <div className="space-y-2">
                 <h5 className="text-white font-bold uppercase mb-4">Company</h5>
                 <p className="hover:text-white cursor-pointer">Our Story</p>
                 <p className="hover:text-white cursor-pointer">Intelligence</p>
                 <p className="hover:text-white cursor-pointer">Inside</p>
             </div>
             <div className="space-y-2">
                 <h5 className="text-white font-bold uppercase mb-4">Legal</h5>
                 <p className="hover:text-white cursor-pointer">Privacy</p>
                 <p className="hover:text-white cursor-pointer">Terms</p>
             </div>
           </div>
           
           <div className="flex justify-between text-[10px] text-gray-600 uppercase tracking-widest mt-12">
               <p>© 2024 CHAMPIONS AGENCY.</p>
               <p>SOVEREIGNTY IS POWER</p>
           </div>
      </div>
    </MainLayout>
  );
};

export default About;
