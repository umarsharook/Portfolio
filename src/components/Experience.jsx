import React from "react";

function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-1">🛡️ Network Security Intern <span className="text-sm font-normal">| May 2024 – Jul 2024</span></h3>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
            <li>Monitored network traffic and identified security threats using tools like Wireshark and Snort.</li>
            <li>Conducted vulnerability assessments and penetration testing.</li>
            <li>Configured firewalls and Intrusion Detection Systems to enhance security.</li>
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-1">🧱 Python Intern <span className="text-sm font-normal">| Jan 2025 – May 2025</span></h3>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
            <li>Developed automation scripts to streamline workflow.</li>
            <li>Used Pandas, NumPy, and Matplotlib for data-driven applications.</li>
            <li>Debugged and optimized Python code for better performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience; 