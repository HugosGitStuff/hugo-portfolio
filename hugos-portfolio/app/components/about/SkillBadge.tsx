'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  category: string
  icon?: string
}

interface SkillBadgesProps {
  skills: Skill[]
}

export function SkillBadges({ skills }: SkillBadgesProps) {
  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <div className="space-y-6">
      {categories.map((category, categoryIndex) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-3">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/30 rounded-lg p-3 text-center hover:bg-card/50 transition-colors"
                >
                  {skill.icon && (
                    <span className="text-xl mb-1 block">{skill.icon}</span>
                  )}
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
