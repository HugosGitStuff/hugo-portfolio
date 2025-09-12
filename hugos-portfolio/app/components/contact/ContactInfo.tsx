'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const ContactInfo = () => {
  const [copySuccess, setCopySuccess] = useState(false)
  
  const email = 'hugotransport@icloud.com'
  
  const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/hugo-a-ramalho/',
      username: 'hugo-a-ramalho'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/HugosGitStuff',
      username: 'HugosGitStuff'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://x.com/HugoRamalhoBR',
      username: '@HugoRamalhoBR'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/hugo.a.ramalho/',
      username: '@hugo.a.ramalho'
    }
  ]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <div className="space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2 sm:space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">Let's Connect</h2>
        <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels!
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
        onClick={handleCopyEmail}
        style={{ cursor: 'pointer' }}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-shrink">
            <div className="bg-primary/10 p-2 sm:p-3 rounded-full flex-shrink-0">
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0 flex-shrink">
              <div className="font-medium text-base sm:text-lg">Email</div>
              <div className="text-sm sm:text-base text-muted-foreground truncate">{email}</div>
            </div>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground pl-4 flex-shrink-0">
            {copySuccess ? 'Copied!' : 'Click to copy'}
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Link 
              href={social.href} 
              target="_blank"
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border bg-card hover:bg-accent/50 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <social.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base">{social.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{social.username}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
