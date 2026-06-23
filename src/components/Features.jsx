import { motion } from 'framer-motion'
import { FiZap, FiShield, FiTrendingUp, FiBox, FiUsers, FiGitBranch } from 'react-icons/fi'

export default function Features() {
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Scalable',
      description: 'Grow your business without infrastructure limits'
    },
    {
      icon: <FiBox className="w-8 h-8" />,
      title: 'Modular Design',
      description: 'Pick and choose features that fit your needs'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Team Friendly',
      description: 'Collaborate seamlessly with your entire team'
    },
    {
      icon: <FiGitBranch className="w-8 h-8" />,
      title: 'Version Control',
      description: 'Built-in version management and rollback'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern web applications
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 hover:border-blue-400/50 transition-all"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
              }}
            >
              <motion.div
                className="text-blue-400 mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
