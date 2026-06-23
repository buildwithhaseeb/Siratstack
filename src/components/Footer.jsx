import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Security', 'Roadmap'],
    'Company': ['About', 'Blog', 'Careers', 'Press'],
    'Resources': ['Documentation', 'API', 'Community', 'Support'],
    'Legal': ['Privacy', 'Terms', 'Cookies', 'Contact'],
  }

  const socials = [
    { icon: FiGithub, label: 'GitHub' },
    { icon: FiTwitter, label: 'Twitter' },
    { icon: FiLinkedin, label: 'LinkedIn' },
    { icon: FiFacebook, label: 'Facebook' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer id="contact" className="border-t border-blue-500/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              SiratStack
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future of web applications, one line of code at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-blue-500/10 py-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} SiratStack. All rights reserved.</p>
          <p>
            Made with <motion.span
              animate={{ color: ['#ef4444', '#f97316', '#ef4444'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              ❤
            </motion.span> by the SiratStack Team
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
