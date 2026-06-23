import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      text: 'SiratStack transformed our business completely. The performance improvement was immediate!',
      author: 'John Smith',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      text: 'Best investment we made. The support team is incredible and always ready to help.',
      author: 'Lisa Anderson',
      role: 'Founder, StartupXYZ',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5
    },
    {
      text: 'Seamless integration, powerful features, and exceptional documentation. Highly recommended!',
      author: 'Mark Wilson',
      role: 'CTO, DataFlow Inc',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FiStar key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 flex-grow italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
