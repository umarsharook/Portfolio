import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [dark, setDark] = useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-lg tracking-tight">UmarSharook</div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <a href="/assets/resume.pdf" download className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Resume</a>
          <button onClick={() => setDark(d => !d)} className="ml-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {dark ? (
              <span role="img" aria-label="Light">🌞</span>
            ) : (
              <span role="img" aria-label="Dark">🌙</span>
            )}
          </button>
        </div>
        {/* Mobile menu toggle (optional) */}
      </div>
    </nav>
  );
}

export default Navbar; 