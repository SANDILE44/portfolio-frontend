import { motion } from 'framer-motion'
import { 
  Check, 
  Globe, 
  Code, 
  Database, 
  Zap, 
  Search, 
  Mail, 
  Share2,
  Smartphone,
  Palette
} from 'lucide-react'

const Services = () => {
  const packages = [
    {
      name: 'Starter Website',
      icon: Globe,
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Responsive design for all devices',
        'Front-end development with modern frameworks',
        'Basic contact form',
        'SEO-friendly code structure',
        'Fast loading times',
        'Mobile-optimized layout',
      ],
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Business Website',
      icon: Code,
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Full responsive design',
        'Front-end & back-end development',
        'Advanced contact forms with validation',
        'Database integration (MySQL/MongoDB)',
        'Optimized performance and speed',
        'SEO-friendly code',
        'Social media integration',
        'Content management capabilities',
      ],
      color: 'from-purple-600 to-purple-700',
    },
    {
      name: 'Premium Website',
      icon: Zap,
      description: 'Enterprise-level solution with all features',
      features: [
        'Fully responsive design (mobile, tablet, desktop)',
        'Complete front-end & back-end development',
        'Advanced database systems',
        'Maximum performance optimization',
        'Comprehensive SEO implementation',
        'Multiple contact forms and integrations',
        'Full social media integration',
        'Custom animations and interactions',
        'Advanced security features',
        'Ongoing maintenance support',
      ],
      color: 'from-pink-600 to-pink-700',
    },
  ]

  const allServices = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Your website will look perfect on all devices - mobile phones, tablets, and desktops.',
    },
    {
      icon: Code,
      title: 'Front-End Development',
      description: 'Modern, interactive user interfaces built with React and other cutting-edge technologies.',
    },
    {
      icon: Database,
      title: 'Back-End Development',
      description: 'Robust server-side solutions with Node.js, Express, and database management.',
    },
    {
      icon: Zap,
      title: 'Optimized Performance',
      description: 'Fast loading times and smooth user experience with optimized code and assets.',
    },
    {
      icon: Search,
      title: 'SEO-Friendly Code',
      description: 'Clean, semantic code that helps your website rank better in search engines.',
    },
    {
      icon: Mail,
      title: 'Contact Forms',
      description: 'Functional contact forms with validation and email integration.',
    },
    {
      icon: Share2,
      title: 'Social Media Integration',
      description: 'Seamless integration with social media platforms for better engagement.',
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Unique, professional designs tailored to your brand and business needs.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Services</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
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
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the package that best fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <pkg.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-100">{pkg.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
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
              What's Included
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              All packages include these essential features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

