import React from "react";

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-6 text-lg">I'm UmarSharook Gurramkonda, a cybersecurity enthusiast and Python programmer currently pursuing my Bachelor of Technology in Computer Science & Engineering with a focus in Cyber Security. I am passionate about securing digital environments and developing tools that simplify and safeguard everyday computing. With a solid foundation in both theoretical and hands-on security practices, I actively work on projects related to network security and automation using Python.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
        <div><span className="font-semibold">⛺️ Location:</span> Tirupati, Andhra Pradesh, India</div>
        <div><span className="font-semibold">🎓 Degree:</span> B.Tech in CSE (Cyber Security)</div>
        <div><span className="font-semibold">✉️ Email:</span> <a href="mailto:umarsharook0@gmail.com" className="text-blue-600 hover:underline">umarsharook0@gmail.com</a></div>
        <div><span className="font-semibold">👤 LinkedIn:</span> <a href="https://www.linkedin.com/in/umar-sharook-865062265/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">umar-sharook-865062265</a></div>
        <div className="sm:col-span-2"><span className="font-semibold">🩺 Interests:</span> Cybersecurity, Penetration Testing, Automation, Linux Tools, Coding Challenges</div>
      </div>
    </section>
  );
}

export default About; 