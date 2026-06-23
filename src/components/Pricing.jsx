import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects',
      features: [
        'Up to 5 Projects',
        '10GB Storage',
        'Basic Support',
        'Community Access',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing teams',
      features: [
        'Unlimited Projects',
        '100GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'Custom Domain',
        'Team Collaboration',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Unlimited Storage',
        '24/7 Dedicated Support',
        'Advanced Security',
        'Custom Integration',
        'SLA Guarantee',
        'White Label Options',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-gray-400">Choose the perfect plan for your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-8 transition-all ${
                plan.highlighted
                  ? 'glass border-2 border-blue-400 scale-105'
                  : 'glass border border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: plan.highlighted ? 0 : -10 }}
            >
              {plan.highlighted && (
                <motion.div
                  className="inline-block mb-4 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <motion.button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <FiCheck className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
