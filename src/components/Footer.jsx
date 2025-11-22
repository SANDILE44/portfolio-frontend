import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/27717378540', label: 'WhatsApp' },
  ]

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sandile Thabethe</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Web Designer
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin size={16} />
              <span className="text-sm">Richards Bay, KZN, South Africa</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={16} />
              <a
                href="mailto:thabethesandile44@gmail.com"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                thabethesandile44@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="tel:0717378540"
                  className="hover:text-blue-400 transition-colors"
                >
                  WhatsApp/Call: 071 737 8540
                </a>
              </p>
              <p>
                <a
                  href="tel:0833062796"
                  className="hover:text-blue-400 transition-colors"
                >
                  Call: 083 306 2796
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sandile Thabethe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

