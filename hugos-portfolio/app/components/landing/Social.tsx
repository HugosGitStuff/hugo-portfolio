import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Social = () => {
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

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social) => (
          <Link 
            key={social.name} 
            href={social.href} 
            target="_blank"
            className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <social.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{social.name}</div>
                <div className="text-sm text-muted-foreground">{social.username}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}