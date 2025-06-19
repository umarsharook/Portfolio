import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-12 text-center">
      <div className="mb-4 font-semibold">Thank you for visiting my portfolio. Let's connect and build something secure and meaningful together.</div>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.linkedin.com/in/umar-sharook-865062265/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-2xl" aria-label="LinkedIn">🔗</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:underline text-2xl" aria-label="GitHub">🐙</a>
        <a href="mailto:umarsharook0@gmail.com" className="text-red-600 hover:underline text-2xl" aria-label="Email">✉️</a>
        <a href={`${import.meta.env.BASE_URL}assets/resume.pdf`} download className="text-green-600 hover:underline text-2xl" aria-label="Resume">📄</a>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">&copy; 2025 UmarSharook Gurramkonda</div>
    </footer>
  );
}

export default Footer; 