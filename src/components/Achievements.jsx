import React from "react";

const achievements = [
  {
    icon: "🏅",
    title: "Top 3 - Supraj Technologies Workshop",
    description: "Gained hands-on experience with penetration testing and tools like Kali Linux, Metasploit, Wireshark",
  },
  {
    icon: "🥉",
    title: "3rd Place - Coding Competition",
    description: "Demonstrated analytical and coding skills under pressure in competitive settings",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Achievements & Certifications</h2>
      <div className="space-y-6">
        {achievements.map((ach, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <span className="text-3xl">{ach.icon}</span>
            <div>
              <h3 className="text-xl font-semibold mb-1">{ach.title}</h3>
              <p>{ach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements; 