import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://github.com/Ogbogu-FsDev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/-786gvghcc892aa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Chukwude Ogbogu. All rights reserved.</p>
    </footer>
  );
}
