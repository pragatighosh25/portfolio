import React from "react";
import { Briefcase, Code2, Layers } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Zuddl Experience Card */}
          <div className="gradient-border p-8 card-hover bg-white/5 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-primary">
                  Front-End Web Developer Intern
                </h3>
                <p className="text-sm text-muted-foreground">
                  Zuddl &middot; June 2025 – Present | Remote
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-left">
              <li>
                Developed and styled 5+ responsive landing pages using React,
                Tailwind, and reusable component-based design systems.
              </li>
              <li>
                Collaborated with design teams to translate Figma prototypes
                into polished, production-ready UI components.
              </li>
              <li>
                Built and maintained 10+ UI sandboxes for testing and refining
                new features.
              </li>
              <li>
                Enhanced performance and responsiveness across multiple layouts,
                ensuring seamless user experience.
              </li>
            </ul>
          </div>

          {/* Skills + Tools Card (optional complement like About section) */}
          <div className="space-y-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tech Stack</h4>
                  <p className="text-muted-foreground">
                    React, JavaScript (ES6+), Tailwind CSS, Git, and Vite — used
                    daily to craft dynamic, responsive web experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Key Highlights</h4>
                  <p className="text-muted-foreground">
                    Improved UI consistency by aligning code with Zuddl’s design
                    system and contributing to scalable component libraries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


