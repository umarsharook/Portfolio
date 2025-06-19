import React from "react";

const projects = [
  {
    title: "🔒 Web Vulnerability Assessment",
    description: "Conducted security assessments on web applications. Identified XSS, SQL injection, and CSRF vulnerabilities. Collaborated with developers to implement input validation and secure login methods.",
    tools: ["Burp Suite", "OWASP ZAP"],
    tags: ["Cybersecurity", "Web"],
  },
  {
    title: "📊 CPU Task Manager",
    description: "Created a GUI-based Python application to monitor real-time CPU, memory, and disk usage. Used psutil for system statistics and updated them every second. Enabled continuous performance monitoring with visualization.",
    tools: ["Python", "psutil"],
    tags: ["Python", "GUI"],
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Tools:</span> {project.tools.join(", ")}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 