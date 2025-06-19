import React from "react";

function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold mb-1">Sri Venkateswara College of Engineering, Tirupati</h3>
        <p className="mb-1">Bachelor of Technology in Computer Science & Engineering (Cyber Security)</p>
        <p className="mb-1">Relevant Coursework: Network Security, Cryptography, Ethical Hacking, Secure Software Development</p>
        <p className="mb-1">Graduation: <span className="font-semibold">2026</span></p>
        <p>CGPA: <span className="font-semibold">7.7</span></p>
      </div>
    </section>
  );
}

export default Education; 