'use client'

import { motion } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  location: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/20" />

      {/* Timeline events */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12"
          >
            {/* Dot on timeline */}
            <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-black" />
            
            <div className="bg-card/30 rounded-lg p-4 hover:bg-card/50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <span className="text-sm text-muted-foreground">{event.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
