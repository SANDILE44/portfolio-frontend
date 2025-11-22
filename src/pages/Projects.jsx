import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Multi Demo',
      description: 'A versatile multi-purpose website showcasing modern design and functionality.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['React', 'TailwindCSS', 'Responsive'],
      demoUrl: '/multidemo',
      githubUrl: null,
    },
    {
      title: 'Multi Demo Two',
      description: 'Enhanced version with advanced features and improved user experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '/multidemotwo',
      githubUrl: null,
    },
    {
      title: 'Multi Demo Three',
      description: 'Third iteration with cutting-edge design patterns and optimizations.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'MySQL'],
      demoUrl: '/multidemothree',
      githubUrl: null,
    },
    {
      title: 'Premium Demo One',
      description: 'Premium website design with elegant UI and smooth animations.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      tags: ['React', 'Framer Motion', 'TailwindCSS'],
      demoUrl: '/premiumdemoone',
      githubUrl: null,
    },
    {
      title: 'Premium Demo Three',
      description: 'High-end website with premium features and professional aesthetics.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '/premiumdemothree',
      githubUrl: null,
    },
    {
      title: 'Construction One Demo',
      description: 'Construction company website with project showcase and services.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['React', 'TailwindCSS', 'Responsive'],
      demoUrl: '/constructiononedemo',
      githubUrl: null,
    },
    {
      title: 'Construction Two Demo',
      description: 'Second construction demo with enhanced portfolio and contact features.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'MySQL'],
      demoUrl: '/constructiontwodemo',
      githubUrl: null,
    },
    {
      title: 'Construction Three Demo',
      description: 'Advanced construction website with project management features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '/constructionthreedemo',
      githubUrl: null,
    },
    {
      title: 'Construction Four Demo',
      description: 'Modern construction site with interactive elements and animations.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      tags: ['React', 'Framer Motion', 'TailwindCSS'],
      demoUrl: '/constructionfourdemo',
      githubUrl: null,
    },
    {
      title: 'Construction Five Demo',
      description: 'Premium construction website with full-service offerings.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      demoUrl: '/constructionfivedemo',
      githubUrl: null,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              A collection of projects showcasing my skills and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects

