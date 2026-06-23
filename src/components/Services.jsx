import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiDatabase, FiCloud } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiCode className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern tech stack'
    },
    {
      icon: <FiSmartphone className="w-12 h-12" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile development'
    },
    {
      icon: <FiDatabase className="w-12 h-12" />,
      title: 'Backend Solutions',
      description: 'Robust APIs and database management'
    },
    {
      icon: <FiCloud className="w-12 h-12" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud deployment and DevOps'
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for all your digital needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -15,
                scale: 1.05,
              }}
            >
              <motion.div
                className="text-blue-400 mb-4 flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
