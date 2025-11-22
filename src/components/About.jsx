export default function About() {
    return (
      <section id="about" className="py-20 px-4 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">About & Skills</h2>
        <p className="max-w-3xl mx-auto text-center mb-6">
          I’m a Full-Stack Developer specializing in React, JavaScript, Tailwind CSS, Node.js, Express.js, and basic knowledge of MongoDB & SQL.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB/SQL basics"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-700 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  