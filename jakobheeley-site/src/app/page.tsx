export default function HomePage() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-blue-800 text-white">
        <div>
          <h1 className="text-5xl font-bold">Your Name</h1>
          <p className="text-xl mt-4">Software Engineer | Developer</p>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-gray-100 p-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I'm a software engineer focused on building scalable and accessible web applications with React and Node.js.
        </p>
      </section>

      <section id="projects" className="min-h-screen bg-white p-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div>
          <h3 className="text-xl font-semibold">Cool Project</h3>
          <p className="mt-2">Built with React, Node.js, and SQL.</p>
          <a href="https://github.com" target="_blank" className="text-blue-600 underline">GitHub</a>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-gray-200 p-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="list-disc ml-5">
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </section>

      <section id="contact" className="min-h-screen bg-blue-100 p-12">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Get in touch: <a href="mailto:you@example.com" className="text-blue-600 underline">you@example.com</a></p>
      </section>
    </>
  );
}
