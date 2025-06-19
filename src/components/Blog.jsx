import React from "react";

const blogTopics = [
  "How I Built a Real-Time CPU Monitor in Python",
  "Understanding XSS and How to Prevent It",
  "Top 5 Tools Every Cybersecurity Learner Should Know",
];

function Blog() {
  return (
    <section id="blog" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Blog / Articles</h2>
      <p className="mb-6">Sharing knowledge and experiences helps strengthen the community. I write about cybersecurity principles, hands-on experiences with tools, and coding tutorials.</p>
      <ul className="list-disc ml-6 space-y-2">
        {blogTopics.map(topic => (
          <li key={topic} className="text-lg">{topic}</li>
        ))}
      </ul>
    </section>
  );
}

export default Blog; 