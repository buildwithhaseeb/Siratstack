import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-block mb-6"
          variants={itemVariants}
        >
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
            ✨ Welcome to the Future
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Build Your Digital Future with SiratStack
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Cutting-edge web solutions designed for modern enterprises. Premium design, powerful features, endless possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 glow-effect"
            whileHover={{ scale: 1.05, shadow: '0 0 50px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <FiArrowRight size={20} />
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {['500+', '99.9%', '24/7'].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-4"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <p className="text-2xl font-bold text-blue-400">{stat}</p>
              <p className="text-sm text-gray-400">{['Clients', 'Uptime', 'Support'][index]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
