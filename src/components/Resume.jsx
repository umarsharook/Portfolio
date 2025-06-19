import React from "react";

function Resume() {
  return (
    <section id="resume" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="mb-6">You can view or download my resume using the link below.</p>
      <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} download className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Download Resume PDF</a>
    </section>
  );
}

export default Resume; 