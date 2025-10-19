import { ArrowRight, ExternalLink, Github } from "lucide-react";
import tomato from "../assets/tomato.png";
import medicure from "../assets/medicure.png";
import cryptoplace from "../assets/cryptoplace.png";
import quickchat from "../assets/Chat.png";
import thefilms from "../assets/flims.png";

const projects = [
  {
    id: 1,
    title: "QuickChat",
    description:
      "A real-time chat platform with instant messaging, responsive design, and optimized performance.",
    image: quickchat,
    tags: ["React", "MongoDB", "Express", "Node.js", "Socket.IO", "TailwindCSS"],
    demoUrl: "https://quick-chat-frontend-pi.vercel.app/",
    githubUrl: "https://github.com/pragatighosh25/QuickChat",
  },
  {
    id: 2,
    title: "The Films",
    description:
      "A movie discovery app with dynamic content, trailer playback, and a fully responsive user interface.",
    image: thefilms,
    tags: ["React", "Redux", "TailwindCSS", "Axios", "TMDB API", "React Player"],
    demoUrl: "https://movie-app-flax-mu-77.vercel.app/",
    githubUrl: "https://github.com/pragatighosh25/movie-app",
  },
  {
    id: 3,
    title: "Tomato",
    description:
      "A food ordering app with cart and checkout flow built in React. Category filters, responsive design, and mock checkout.",
    image: tomato,
    tags: ["React", "Node.js", "TailwindCSS", "Redux", "@reduxjs/toolkit"],
    demoUrl: "https://tomato-beige-delta.vercel.app/",
    githubUrl: "https://github.com/pragatighosh25/tomato",
  },
  {
    id: 4,
    title: "Medicure",
    description:
      "Mental Health Web App with self-care tools and responsive UI — designed with Figma and built using React, Next.js, and Tailwind CSS.",
    image: medicure,
    tags: ["Next.js", "React", "TailwindCSS", "Figma", "React Icons", "ESLint"],
    demoUrl: "https://mental-health-49jxfofcp-pragati-ghoshs-projects.vercel.app/",
    githubUrl: "https://github.com/pragatighosh25/mental-health",
  },
  {
    id: 5,
    title: "Cryptoplace",
    description:
      "Crypto tracker with live market data, search, and trend visualization — powered by CoinGecko API and Google Charts.",
    image: cryptoplace,
    tags: ["React.js", "CoinGecko API", "React Router", "Google Charts", "Responsive UI"],
    demoUrl: "https://cryptoplace-drab-psi.vercel.app/",
    githubUrl: "https://github.com/pragatighosh25/cryptoplace",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pragatighosh25"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
