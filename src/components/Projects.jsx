export default function Projects() {
    const projectList = [
      { name: "Project 1", demo: "#", code: "#" },
      { name: "Project 2", demo: "#", code: "#" },
      { name: "Project 3", demo: "#", code: "#" },
    ];
  
    return (
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <div className="flex gap-4">
                <a href={project.demo} className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500">
                  Live Demo
                </a>
                <a href={project.code} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  