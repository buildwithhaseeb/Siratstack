import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  const articles = [
    {
      title: 'The Future of Web Development',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2024',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      excerpt: 'Exploring the latest trends and technologies shaping web development in 2024'
    },
    {
      title: 'Scaling Applications Efficiently',
      author: 'Michael Chen',
      date: 'Mar 10, 2024',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      excerpt: 'Best practices for scaling your applications to millions of users'
    },
    {
      title: 'Security Best Practices',
      author: 'David Park',
      date: 'Mar 5, 2024',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=500&h=300&fit=crop',
      excerpt: 'Essential security measures to protect your applications and data'
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-gray-400">Stay updated with industry insights and tips</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FiUser size={14} />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    {article.date}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Read More <FiArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
