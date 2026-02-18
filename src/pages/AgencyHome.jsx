import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import Button from "../components/Button";

const AgencyHome = () => {
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

  const pillars = [
    {
      id: "01",
      title: "Clarity First",
      desc: "Strategy without clarity is merely busywork. We prioritize the removal of cognitive debris before building new architectures.",
    },
    {
      id: "02",
      title: "Radical Agency",
      desc: "Success is an inside-out process. We focus on the individual as the center of gravity for every organizational outcome.",
    },
    {
      id: "03",
      title: "Legacy Intent",
      desc: "Transformation is measured by the duration of its impact. We build for the next decade, not the next quarter.",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-24 pb-20">
        {/* Hero Section */}
        <section className="space-y-8 max-w-5xl mx-auto">
          <div className="border-t border-accent w-16 mb-6"></div>
          <h5
            className="text-accent text-xs tracking-widest uppercase font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Foundational Architecture
          </h5>
          <h1
            className="text-4xl md:text-7xl font-bold leading-tight"
            style={{ fontFamily: "Anton, sans-serif", color: "#ffffff" }}
          >
            The Sovereign Vision: <br /> Architecting Agency.
          </h1>
          <p
            className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Champions Agency exists to bridge the absolute gap between human
            potential and strategic execution. In a world characterized by digital
            noise, we provide the silence necessary for true leadership to emerge.
          </p>

          {/* Image Placeholder - Man in Suit */}
          <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center mt-12 relative">
             {/* Using a generated image placeholder logic or simple div */}
             <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Man in suit" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
             />
          </div>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-700"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Our <br /> Mission
          </h2>
          <div className="space-y-6">
            <p
              className="text-white font-bold text-lg"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              To transform survival instincts into sovereign strategies. We
              empower individuals who have achieved external success to master
              their internal landscape.
            </p>
            <p
              className="text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Through rigorous depth-work and high-level strategy, we facilitate
              the transition from being reactive to being the primary cause of
              one’s own results. This is not about management—it is about
              mastery. We do not offer solutions; we offer the removal of
              obstacles to your inherent capacity.
            </p>
          </div>
        </section>

        {/* Philosophical Pillars */}
        <section className="max-w-5xl mx-auto space-y-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
             style={{ fontFamily: "Anton, sans-serif" }}
          >
            Philosophical Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="space-y-4">
                 <h3 className="text-accent text-lg font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {pillar.id}. {pillar.title}
                 </h3>
                 <div className="border-t border-gray-700 w-full"></div>
                 <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {pillar.desc}
                 </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto py-12 border-t border-gray-800">
             <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "Anton, sans-serif" }}>
                Ready to redefine your <br/> sovereignty?
             </h2>
             <div className="flex justify-start">
                <Button label="Initiate High-Level Discussion →" className="bg-[#20b57a] text-black w-full md:w-auto" />
             </div>
             <p className="text-right text-gray-600 text-[10px] tracking-[0.2em] mt-4 uppercase">Est. MMXXIV</p>
        </section>
      </div>
    </MainLayout>
  );
};

export default AgencyHome;
