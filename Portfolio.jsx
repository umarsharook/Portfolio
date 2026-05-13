export default function UmarSharookPortfolio() {
  const projects = [
    {
      title: "Early-Stage Ransomware Detection System",
      description:
        "AI-powered ransomware detection system using behavior analysis, suspicious encryption monitoring, and network anomaly detection.",
      stack: ["Python", "Machine Learning", "Network Security", "Threat Detection"],
      impact: "Built proactive detection workflows to identify ransomware activity before full system compromise.",
    },
    {
      title: "Web Vulnerability Scanner",
      description:
        "Automated scanner capable of detecting SQL Injection, XSS, and CSRF vulnerabilities using Python and security tooling.",
      stack: ["Python", "Burp Suite", "OWASP", "Web Security"],
      impact: "Generated actionable vulnerability reports with automated crawling and payload testing.",
    },
    {
      title: "Automated Port Scanner",
      description:
        "Custom reconnaissance automation tool built with Bash and Nmap for service discovery and OS fingerprinting.",
      stack: ["Bash", "Nmap", "Linux", "Networking"],
      impact: "Reduced manual recon time while improving scanning accuracy and reporting.",
    },
  ];

  const skills = [
    "Penetration Testing",
    "Threat Detection",
    "Vulnerability Assessment",
    "Linux Security",
    "Python Automation",
    "Web Security",
    "Network Security",
    "Wireshark",
    "Burp Suite",
    "Metasploit",
    "Snort",
    "Nmap",
    "Kali Linux",
    "SQL",
  ];

  const certifications = [
    "RedHat Linux Fundamentals",
    "Qualys Vulnerability Management",
    "Google Foundations of Cybersecurity",
    "HackerRank Python",
    "HackerRank SQL",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />

        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-6">
              Cybersecurity Engineer • Ethical Hacker • Python Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Umar Sharook
              <span className="block text-green-400">Cybersecurity Portfolio</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
              Aspiring cybersecurity engineer focused on offensive security, threat detection,
              ransomware defense, and secure systems engineering. Passionate about building
              security tools that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/umarsharook"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-green-500 text-black font-semibold hover:scale-105 transition"
              >
                View GitHub
              </a>

              <a
                href="mailto:umarsharook0@gmail.com"
                className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-green-500 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                <h2 className="text-3xl font-black text-green-400">3+</h2>
                <p className="text-zinc-400 text-sm mt-1">Security Projects</p>
              </div>

              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                <h2 className="text-3xl font-black text-green-400">10+</h2>
                <p className="text-zinc-400 text-sm mt-1">Vulnerabilities Found</p>
              </div>

              <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                <h2 className="text-3xl font-black text-green-400">2026</h2>
                <p className="text-zinc-400 text-sm mt-1">B.Tech Graduation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/20 rounded-full" />

            <div className="relative bg-zinc-950 border border-zinc-800 rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-zinc-500 text-sm">Currently Learning</p>
                  <h3 className="text-2xl font-bold mt-1">Advanced Web Security</h3>
                </div>

                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Threat Detection</span>
                    <span className="text-green-400">92%</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Linux & Networking</span>
                    <span className="text-green-400">90%</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Python Security Automation</span>
                    <span className="text-green-400">88%</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Web Application Security</span>
                    <span className="text-green-400">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-2">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-black">Projects</h2>
            </div>

            <p className="text-zinc-400 max-w-xl">
              Security-focused engineering projects designed around automation, defense, vulnerability detection, and offensive security concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-950 border border-zinc-800 rounded-[28px] p-6 hover:border-green-500/40 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-2xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-black border border-zinc-800 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-zinc-800 pt-5 text-sm text-zinc-500">
                  {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-2">Technical Arsenal</p>
            <h2 className="text-4xl font-black mb-8">Skills & Technologies</h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-2xl bg-black border border-zinc-800 hover:border-green-500/40 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-2">Achievements</p>
            <h2 className="text-4xl font-black mb-8">Certifications</h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-black border border-zinc-800 flex items-center justify-between"
                >
                  <span>{cert}</span>
                  <span className="text-green-400">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">Hire Me</p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Building Secure Systems
            <span className="block text-green-400">For The Future</span>
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Looking for internships, cybersecurity engineering roles, security analyst positions,
            and opportunities to contribute to real-world security infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:umarsharook0@gmail.com"
              className="px-8 py-4 rounded-2xl bg-green-500 text-black font-bold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-green-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
