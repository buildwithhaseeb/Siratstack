import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1661956600976-0ee5e0d896d7?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Health App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase']
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Next.js', 'PostgreSQL', 'D3.js']
    },
    {
      title: 'AI Chatbot Solution',
      category: 'AI Integration',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8e1d1eceb3d95baed1e4b3e6d?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'API']
    },
    {
      title: 'Cloud Management System',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      tags: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Real-time Collaboration Tool',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['WebSockets', 'React', 'GraphQL']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-gray-400">Showcasing our best work and success stories</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-blue-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project <FiExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
