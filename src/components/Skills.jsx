import React from "react";

const skills = [
  { category: "Network Security", items: ["Vulnerability assessment", "Penetration testing", "Incident response", "Network monitoring"] },
  { category: "Cybersecurity Tools", items: ["Kali Linux", "Nmap", "Burp Suite", "Hydra", "Nikto", "Wireshark", "Metasploit"] },
  { category: "Programming Languages", items: ["Python (Automation, Flask, Django)"] },
  { category: "Web Security", items: ["SQL injection", "XSS", "CSRF", "OWASP Testing"] },
  { category: "Operating Systems", items: ["Kali Linux", "Ubuntu", "Windows"] },
  { category: "Data Analysis", items: ["Pandas", "NumPy", "Matplotlib"] },
  { category: "Soft Skills", items: ["Problem-solving", "Analytical thinking", "Debugging", "Collaboration"] },
];

function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
            <ul className="list-disc ml-6 space-y-1">
              {skill.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 