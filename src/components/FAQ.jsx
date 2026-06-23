import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      question: 'What makes SiratStack different?',
      answer: 'SiratStack combines cutting-edge technology with exceptional user experience. We focus on performance, security, and scalability without compromising on ease of use.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes! We offer fully customizable solutions tailored to your specific business needs. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'What is the implementation timeline?',
      answer: 'Most projects are implemented within 2-4 weeks. Larger enterprise solutions may take longer depending on complexity and customization needs.'
    },
    {
      question: 'How is data security handled?',
      answer: 'We implement enterprise-grade security with end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and SOC 2 standards.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 support via email, chat, and phone. Premium plans include dedicated account managers and priority support.'
    },
    {
      question: 'Can I migrate from my current system?',
      answer: 'Absolutely! We provide seamless migration assistance and can work with your existing systems to ensure zero downtime during the transition.'
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                className="w-full p-6 flex items-center justify-between hover:bg-blue-500/5 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-blue-400" size={24} />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-6 pb-6 border-t border-blue-500/20"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
