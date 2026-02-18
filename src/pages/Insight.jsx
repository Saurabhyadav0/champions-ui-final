import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";

const Insight = () => {
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

    const insights = [
        {
            category: "01 / LEADERSHIP",
            title: "The Architecture of Silence: Why Modern Leaders Must Reclaim Solitude",
            desc: "In an era of massive connectivity, the ability to disconnect is the ultimate competitive advantage. Understanding the neurological basis for strategic quiet and high-stakes decision making.",
            quote: "True sovereignty begins where the noise of the crowd ends. It is the silent space between decisions where true power resides.",
            date: "JANUARY 24, 2024 — 8 MIN READ",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            category: "02 / OBJECTIVES",
            title: "Beyond the Survival Matrix: Re-coding Your Response to Crisis",
            desc: "Shift from reactive survival modes to proactive sovereign states. A deep dive into our proprietary transformation framework for navigating complex global scenarios.",
            date: "JANUARY 15, 2024 — 12 MIN READ",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            category: "03 / LEGACY",
            title: "The Multi-Generational Horizon: Building for the Next Century",
            desc: "How to align immediate strategic goals with values that endure beyond a single lifetime. Why endurance is the only metric that matters in the high-stakes game of global legacy.",
            date: "JANUARY 02, 2024 — 15 MIN READ",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto pb-20 space-y-24">
                 {/* Header */}
                 <div className="space-y-6">
                     <div className="flex items-center space-x-4 mb-4">
                        <span className="text-gray-500 text-[10px] uppercase tracking-widest">/ SITE / INSIGHTS / LOG</span>
                     </div>
                     <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}>
                         Sovereign Insights
                     </h1>
                     <p className="text-gray-400 text-sm max-w-xl leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                         Advanced strategic meditations on leadership, digital architecture, and the systems governing global mastery.
                     </p>
                 </div>

                 {/* Featured Article (First One) */}
                 <div className="grid md:grid-cols-2 gap-12 border-t border-gray-800 pt-12">
                     <div className="space-y-8">
                         <spam className="text-accent text-[10px] font-bold tracking-widest uppercase">{insights[0].category}</spam>
                         <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "Anton, sans-serif" }}>
                             {insights[0].title}
                         </h2>
                         <div className="md:hidden w-full h-64 overflow-hidden rounded-lg">
                            <img src={insights[0].image} alt="Architecture" className="w-full h-full object-cover"/>
                         </div>
                         <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                             {insights[0].desc}
                         </p>
                         <p className="text-gray-600 text-[10px] tracking-widest uppercase">{insights[0].date}</p>
                     </div>
                     <div className="hidden md:flex flex-col space-y-8">
                         <div className="w-full h-64 overflow-hidden rounded-lg">
                              <img src={insights[0].image} alt="Architecture" className="w-full h-full object-cover"/>
                         </div>
                         <div className="border-l-2 border-accent pl-6 py-2">
                            <p className="text-white text-sm italic leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                "{insights[0].quote}"
                            </p>
                         </div>
                     </div>
                 </div>

                 {/* Other Articles */}
                 <div className="space-y-20">
                     {insights.slice(1).map((insight) => (
                         <div key={insight.title} className="grid md:grid-cols-2 gap-12 border-t border-gray-800 pt-12 items-center">
                              <div className="space-y-6">
                                 <spam className="text-accent text-[10px] font-bold tracking-widest uppercase">{insight.category}</spam>
                                 <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight" style={{ fontFamily: "Anton, sans-serif" }}>
                                     {insight.title}
                                 </h2>
                                 <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                     {insight.desc}
                                 </p>
                                 <p className="text-gray-600 text-[10px] tracking-widest uppercase">{insight.date}</p>
                              </div>
                              <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg">
                                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover"/>
                              </div>
                         </div>
                     ))}
                 </div>
                 
                 {/* Footer Pagination */}
                 <div className="flex justify-between items-center pt-12 border-t border-gray-800 text-[10px] uppercase tracking-widest text-gray-500">
                     <span className="cursor-pointer hover:text-white">← Previous</span>
                     <div className="space-x-8 hidden md:block">
                         <span className="text-white">01</span>
                         <span className="cursor-pointer hover:text-white">02</span>
                         <span className="cursor-pointer hover:text-white">03</span>
                     </div>
                     <span className="cursor-pointer hover:text-white">Next →</span>
                 </div>
                 
                 {/* Footer Links (Simplified for consistency) */}
                  <div className="grid md:grid-cols-4 gap-12 mt-24 pt-12 border-t border-gray-900 text-xs text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
                     <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                             <div style={{ width: 8, height: 8, backgroundColor: "#ffffff" }}></div>
                             <span className="text-white font-bold uppercase">CHAMPIONS AGENCY</span>
                         </div>
                         <p>Elite strategic guidance for those who demand total mastery of their one-chance.</p>
                     </div>
                      <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Agency</h5>
                         <p className="hover:text-white cursor-pointer">Our Approach</p>
                         <p className="hover:text-white cursor-pointer">The Team</p>
                         <p className="hover:text-white cursor-pointer">Contact</p>
                     </div>
                     <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Resources</h5>
                         <p className="hover:text-white cursor-pointer">Framework</p>
                         <p className="hover:text-white cursor-pointer">Insights</p>
                         <p className="hover:text-white cursor-pointer">The Collective</p>
                     </div>
                     <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Global HQ</h5>
                         <p>Mayfair, London</p>
                         <p>Zurich, Switzerland</p>
                     </div>
                 </div>
            </div>
        </MainLayout>
    );
};

export default Insight;
