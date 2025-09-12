'use client'

import { SimpleNavbar } from '@/app/components/navigation/SimpleNavbar'
import { Footer } from '@/app/components/landing/Footer'
import { motion } from 'framer-motion'
import { Timeline } from '@/app/components/about/Timeline'
import { SkillBadges } from '@/app/components/about/SkillBadge'
import Link from 'next/link'

export default function AboutPage() {
  const skills = [
    // Technical Skills
    { name: 'AI Development', category: 'Technical Skills', icon: '🤖' },
    { name: 'Full-Stack Development', category: 'Technical Skills', icon: '💻' },
    { name: 'Software Engineering', category: 'Technical Skills', icon: '⚙️' },
    { name: 'Project Management', category: 'Technical Skills', icon: '📊' },
    
    // Leadership Skills
    { name: 'Team Leadership', category: 'Leadership', icon: '👥' },
    { name: 'Problem Solving', category: 'Leadership', icon: '🔍' },
    { name: 'Client Communication', category: 'Leadership', icon: '🤝' },
    { name: 'Strategic Planning', category: 'Leadership', icon: '📈' },
    
    // Languages
    { name: 'English (Fluent)', category: 'Languages', icon: '🌎' },
    { name: 'Portuguese (Native)', category: 'Languages', icon: '🌍' },
    { name: 'Spanish (Intermediate)', category: 'Languages', icon: '🌏' },
    
    // Industry Knowledge
    { name: 'Manufacturing and Precision CNC Machining', category: 'Industry Knowledge', icon: '🏭' },
    { name: 'Mechanical Engineering', category: 'Industry Knowledge', icon: '🔧' },
    { name: 'Business Operations', category: 'Industry Knowledge', icon: '💼' },
    { name: 'Customer Service', category: 'Industry Knowledge', icon: '🎯' }
  ]

  const timelineEvents = [
    {
      year: '2024',
      title: 'IT Career Transition',
      description: 'Studying AI Development Tools, Full-Stack Programming, and Software Engineering.',
      location: 'Portugal'
    },
    {
      year: '2015-Present',
      title: 'Founder & Owner - Ocean Gardens Garden Care',
      description: 'Leading a team delivering exceptional landscaping services, developing leadership and project management skills.',
      location: 'Portugal'
    },
    {
      year: '2018-Present',
      title: 'Owner - Friendly Maneuver Transports and Tourism',
      description: 'Operating a solo airport transfer service across multiple cities, focusing on client communication and operational efficiency.',
      location: 'Portugal, Spain'
    },
    {
      year: '2008-2015',
      title: 'English Teacher',
      description: 'Teaching English at Uptime Comunicação em Inglês, developing strong interpersonal and communication skills.',
      location: 'Minas Gerais, Brazil'
    },
    {
      year: '2009-2012',
      title: 'Mechanical Engineering Studies',
      description: 'Four years of Mechanical Engineering Degreeeducation at Unileste.',
      location: 'Minas Gerais, Brazil'
    },
    {
      year: '2006-2007',
      title: 'CNC Machinist - Full Time',
      description: 'Full-time position at CED Inc. (Consulting Engineering & Development Services) after graduation, specializing in precision machining of metal parts and composites for healthcare and military applications.',
      location: 'Connecticut, USA'
    },
    {
      year: '2004-2006',
      title: 'CNC Machinist - Internship',
      description: 'Internship at CED Inc. while completing technical studies, gaining hands-on experience in precision machining and manufacturing processes.',
      location: 'Connecticut, USA'
    },
    {
      year: '2003-2006',
      title: 'Technical Diploma in Manufacturing',
      description: 'Building foundational technical knowledge and skills in manufacturing and precision machining.',
      location: 'Danbury, Connecticut, USA'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <div className="text-lg font-medium text-muted-foreground italic max-w-3xl mx-auto relative">
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent top-0" />
            <div className="px-6 py-4">
              Entrepreneur Transitioning to IT | AI Development Tools & Full-Stack Programming Student | Software Engineering & AI Student | Experienced Leader in Project Management, Problem Solving & Client Services
            </div>
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent bottom-0" />
          </div>
        </motion.div>
        
        <div className="space-y-12">
          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
            <p className="text-lg leading-relaxed">
              I'm a resilient, problem-solving professional transitioning into IT, fueled by a passion for technology and a diverse career spanning three continents. Currently studying AI Developing Tools, full-stack programming and Software Engineering & AI. I'm eager to apply my technical aptitude and adaptability to roles in IT, such as Software Development and Engineering with or without AI Tools, Project Management in Software Development or Software Engineering & AI.
            </p>
          </motion.section>

          {/* Professional Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-6">Professional Timeline</h2>
            <Timeline events={timelineEvents} />
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
            <SkillBadges skills={skills} />
          </motion.section>

          {/* Cultural Background & Personal */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Global Perspective</h2>
                <p className="text-lg leading-relaxed">
                  My journeys between Brazil, Connecticut USA and Portugal blends Brazilian warmth, American drive, and Portuguese adaptability, enabling me to thrive in diverse environments.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Beyond Work</h2>
                <p className="text-lg leading-relaxed">
                  Outside work, I enjoy travel, spearfishing, hunting and family barbecues, which keep me inspired.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-black/5 to-black/10 hover:from-black/10 hover:to-black/20 rounded-xl p-6 text-center cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
            <Link href="/contact" className="block hover:opacity-80 transition-opacity">
              <p className="text-lg leading-relaxed font-medium">
                Connect with me to explore AI developing tools, IT opportunities, full-stack development or share insights on career transitions and possibilities!
              </p>
            </Link>
          </motion.section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
