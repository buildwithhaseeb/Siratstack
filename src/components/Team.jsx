import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

export default function Team() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      bio: 'Visionary leader with 15+ years in tech'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      bio: 'Full-stack architect and innovation enthusiast'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
      bio: 'Creative visionary behind our designs'
    },
    {
      name: 'David Park',
      role: 'DevOps Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      bio: 'Cloud infrastructure and DevOps expert'
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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-gray-400">Talented professionals passionate about excellence</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {[FiLinkedin, FiTwitter, FiGithub].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
