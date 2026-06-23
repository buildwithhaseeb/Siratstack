import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Statistics() {
  const [stats, setStats] = useState([
    { value: 0, label: 'Active Clients', target: 500 },
    { value: 0, label: 'Projects Delivered', target: 1200 },
    { value: 0, label: 'Team Members', target: 150 },
    { value: 0, label: 'Years Experience', target: 15 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value < stat.target ? stat.value + Math.ceil(stat.target / 100) : stat.target
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            By The Numbers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value.toLocaleString()}+
              </motion.div>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
