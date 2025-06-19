import React from "react";

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[70vh] text-center py-16">
      <img src={`${import.meta.env.BASE_URL}assets/profile.jpg`} alt="UmarSharook Gurramkonda" className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover border-4 border-blue-600" />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Hi, I'm UmarSharook Gurramkonda</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">Cybersecurity Enthusiast | Python Developer | Tech Explorer</h2>
      <p className="max-w-xl text-lg mb-6">Welcome to my digital portfolio where I showcase my journey in cybersecurity and software development.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} download className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Download Resume</a>
        <a href="#projects" className="px-6 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition">View Projects</a>
        <a href="#contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded shadow hover:bg-blue-50 dark:hover:bg-blue-900 transition">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero; 