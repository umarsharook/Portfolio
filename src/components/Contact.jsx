import React from "react";

function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6">Feel free to reach out for collaboration, internship opportunities, or a simple tech talk.</p>
      <div className="mb-6 space-y-2">
        <div><span className="font-semibold">👤 Name:</span> UmarSharook Gurramkonda</div>
        <div><span className="font-semibold">📧 Email:</span> <a href="mailto:umarsharook0@gmail.com" className="text-blue-600 hover:underline">umarsharook0@gmail.com</a></div>
        <div><span className="font-semibold">📞 Phone:</span> +91 8639567184</div>
        <div><span className="font-semibold">👁️ LinkedIn:</span> <a href="https://www.linkedin.com/in/umar-sharook-865062265/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">umar-sharook-865062265</a></div>
      </div>
      <form className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 w-full" />
          <input type="email" placeholder="Email" className="p-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 w-full" />
        </div>
        <input type="text" placeholder="Subject" className="p-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 w-full" />
        <textarea placeholder="Message" rows="4" className="p-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 w-full" />
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
}

export default Contact; 