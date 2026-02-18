import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Button from "../components/Button";

const Services = () => {
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

    const services = [
        {
            id: "001",
            title: "Clarity Metrics",
            desc: "Quantitative analysis for individual performance and cognitive load management.",
            link: "INTEGRATE ↗"
        },
        {
            id: "002",
            title: "Ghost Writer AI",
            desc: "Semantic extraction of your core philosophy to automate strategic communication.",
            link: "INTEGRATE ↗"
        },
        {
            id: "003",
            title: "Vault Core",
            desc: "Encrypted asset management for high-value strategic intellectual property.",
            link: "INTEGRATE ↗"
        },
        {
            id: "004",
            title: "Legacy Archiver",
            desc: "Automated preservation of decision history and strategic pivot points for future governance and audit cycles. High-resolution storage for sovereign data.",
            link: "INTEGRATE ↗"
        },
        {
            id: "005",
            title: "Node Visualizer",
            desc: "Mapping of professional influence networks and relationship depth across the ecosystem.",
            link: "INTEGRATE ↗"
        }
    ];

    return (
        <MainLayout>
            <div className="space-y-16 pb-20 max-w-5xl mx-auto">
                 {/* Header Section */}
                <div className="space-y-6">
                    <h5 className="text-gray-500 text-xs tracking-widest uppercase font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        01 / Ecosystem
                    </h5>
                    <div className="border-t border-gray-700 w-16 mb-6"></div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}>
                        Micro-SaaS <br /> <span className="text-gray-600">Sovereign Architecture</span>
                    </h1>
                     <p className="max-w-2xl text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Standardized utilities for high-precision developers. Built on the B2 developer standard for absolute technical clarity and maximum legibility.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                    {services.map((service, idx) => (
                        <div key={service.id} className={`space-y-6 p-6 border-l border-gray-800 ${idx >= 3 ? 'md:border-t md:border-l-0' : ''} ${idx === 3 ? 'md:col-span-1 border-t' : ''} ${idx === 4 ? 'md:col-span-1 border-t' : ''}`}>
                             <p className="text-gray-600 text-xs tracking-widest">{service.id}</p>
                             <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Anton, sans-serif" }}>
                                {service.title}
                             </h3>
                             <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                {service.desc}
                             </p>
                             <p className="text-white text-xs font-bold tracking-widest cursor-pointer hover:text-accent transition-colors" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                 {service.link}
                             </p>
                        </div>
                    ))}
                </div>
                 
                 {/* Footer Type Sections */}
                 <div className="mt-24 pt-16 border-t border-gray-800 space-y-8">
                     <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "Anton, sans-serif" }}>Global Standards</h2>
                     <p className="max-w-xl text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Ensuring B2 architectural consistency across the entire micro-ecosystem. Strict palette compliance for visual clarity and technical performance.
                     </p>
                      <div className="text-right">
                         <span className="text-accent text-xs tracking-widest uppercase border-b border-accent pb-1">Emerald Clarity</span>
                      </div>
                 </div>

                 {/* Footer Links */}
                 <div className="grid md:grid-cols-4 gap-12 mt-24 pt-12 border-t border-gray-900 text-xs text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
                     <div className="space-y-4">
                         <div className="flex items-center space-x-2">
                             <div style={{ width: 8, height: 8, backgroundColor: "#ffffff" }}></div>
                             <span className="text-white font-bold uppercase">CHAMPIONS AGENCY</span>
                         </div>
                         <p>Developing high-precision tools for the sovereign individual. Global standardization & technical excellence.</p>
                     </div>
                     <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Resources</h5>
                         <p className="hover:text-white cursor-pointer">Documentation</p>
                         <p className="hover:text-white cursor-pointer">API Access</p>
                         <p className="hover:text-white cursor-pointer">Changelog</p>
                     </div>
                     <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Network</h5>
                         <p className="hover:text-white cursor-pointer">Framework</p>
                         <p className="hover:text-white cursor-pointer">Collective</p>
                         <p className="hover:text-white cursor-pointer">Insights</p>
                     </div>
                      <div className="space-y-2">
                         <h5 className="text-white font-bold uppercase mb-4">Legal</h5>
                         <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                         <p className="hover:text-white cursor-pointer">Terms</p>
                     </div>
                 </div>
                 
                 <div className="flex justify-between text-[10px] text-gray-600 uppercase tracking-widest mt-12">
                     <p>© 2024 CHAMPIONS AGENCY.</p>
                     <p>BUILT FOR SOVEREIGN DEVELOPERS</p>
                 </div>
            </div>
        </MainLayout>
    );
};

export default Services;
