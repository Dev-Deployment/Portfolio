import Head from "next/head";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

interface Certification {
  title: string;
  description: string;
  image: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Humanoid Robot",
      description:
        "A robot with human-like motion, sensors, and adaptive control.",
      image: "/images/humanoid.png",
      link: "https://github.com/Ogbogu-FsDev/Humanoid-Robot",
    },
    {
      title: "IoT Home Device",
      description: "Smart home automation prototype for remote monitoring.",
      image: "/images/iot.png",
      link: "https://github.com/Ogbogu-FsDev/MicroControllers-IoT",
    },
    {
      title: "Python Automation Scripts",
      description: "PLC-controlled conveyor belt with safety sensors.",
      image: "/images/pas.png",
      link: "https://github.com/Ogbogu-FsDev/Python-Automation-Scripts",
    },
    {
      title: "CyberSecurity",
      description:
        "Small Python tools showcasing cybersecurity fundamentals and secure coding practice.",
      image: "/images/cybersecurity.png",
      link: "https://github.com/Ogbogu-FsDev/Python-Cybersecurity-Demos",
    },
  ];

  const certifications: Certification[] = [
    {
      title: "Coding Practices",
      description:
        "Achieved a regulated qualification demonstrating competence in coding requirements, design, implementation, software testing, deployment, and maintenance.",
      image: "/certificates/coding-practices.png",
    },
    {
      title: "Python for Cybersecurity",
      description:
        "Completed a five-course specialization on using Python to automate and execute cybersecurity tasks, including scripting for privilege escalation, credential access, and active defense.",
      image: "/certificates/python-for-cybersecrity.png",
    },
    {
      title: "Python for Data Science, AI & Development",
      description:
        "Successfully completed IBM’s foundational course covering Python programming for data science, AI, and software development.",
      image: "/certificates/data-science-ai-development.png",
    },
    {
      title: "Cybersecurity Foundations",
      description:
        "Completed a three-course specialization covering basic cybersecurity principles, operating system fundamentals, and security policies, with hands-on exercises using Infosec Skills.",
      image: "/certificates/cybersecurity-foundations.png",
    },
    {
      title: "Google AI Essentials",
      description:
        "Successfully finished Google’s introductory AI course, learning key concepts and practical applications of Artificial Intelligence.",
      image: "/certificates/google-ai.png",
    },
    {
      title: "Use Commands and Create a Remote Git Repository",
      description:
        "Completed a hands-on guided project to practice using command-line tools and create/manage a remote Git repository.",
      image: "/certificates/commands-git-repo.png",
    },
  ];

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Allow ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>Reks | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Reks, Mechatronics Engineer and Automation Enthusiast."
        />
      </Head>

      {/* ✅ Hero */}
      <section className="p-12 text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Chukwude 👋</h1>
        <p className="text-xl mb-4">
          Mechatronics Engineer | Robotics | IoT | Automation
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I build smart devices, robots, and solve real-world problems with
          hardware and software.
        </p>
      </section>

      {/* ✅ About Me */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a passionate Mechatronics Engineer with a strong focus on designing
            and developing smart machines, humanoid robots, and IoT systems.
            I love bridging the gap between hardware and software to solve
            real-world automation challenges. With hands-on experience in robotics,
            embedded systems, and industrial automation, my goal is to deliver
            practical, innovative solutions that drive efficiency and intelligence.
          </p>
        </div>
      </section>

      {/* ✅ Projects */}
      <section id="projects" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden shadow hover:shadow-xl transform hover:scale-105 transition duration-300 block"
            >
              <div className="aspect-square w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ✅ Certifications */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer border rounded-lg shadow hover:shadow-lg transform hover:scale-[1.02] transition duration-300 bg-white overflow-hidden flex flex-col items-center text-center p-4"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Certifications Modal — image only, enlarged */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      )}

      {/* ✅ Contact with interactive Send button */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaborating, hiring, or discussing a project? 
            I'd love to hear from you. Feel free to reach out — let’s build 
            something great together!
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
