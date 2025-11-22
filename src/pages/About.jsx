import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Globe, 
  Smartphone,
  CheckCircle 
} from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React', icon: Code, level: 90 },
    { name: 'TailwindCSS', icon: Palette, level: 95 },
    { name: 'Node.js', icon: Server, level: 85 },
    { name: 'JavaScript', icon: Code, level: 90 },
    { name: 'HTML', icon: Globe, level: 95 },
    { name: 'CSS', icon: Palette, level: 95 },
    { name: 'MySQL', icon: Database, level: 80 },
    { name: 'MongoDB', icon: Database, level: 75 },
  ]

  const achievements = [
    '1+ years of professional development experience',
    'Built multiple full-stack web applications',
    'Expertise in modern React and Node.js',
    'Proficient in responsive design and UI/UX',
    'Experience with multiple databases',
    'Strong problem-solving and debugging skills',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Passionate Full Stack Developer dedicated to creating exceptional web experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6" />
                <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                    alt="Sandile Thabethe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sandile Thabethe
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Full Stack Developer & Web Designer
              </p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  I'm a passionate full-stack developer based in Richards Bay, South Africa, 
                  with over 1 year of experience in building modern web applications. 
                  I specialize in creating beautiful, functional, and user-friendly websites 
                  that help businesses achieve their goals.
                </p>
                <p>
                  My journey in web development started with a curiosity for how websites work, 
                  and it has evolved into a career focused on creating exceptional digital experiences. 
                  I love working with modern technologies like React, Node.js, and various databases 
                  to build scalable and efficient solutions.
                </p>
                <p>
                  When I'm not coding, I enjoy staying up-to-date with the latest web technologies, 
                  exploring new design trends, and continuously improving my skills to deliver 
                  the best possible results for my clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
              >
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

