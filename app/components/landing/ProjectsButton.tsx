import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const ProjectsButton = () => {
  const buttons = [
    {
      text: "More About Me",
      href: "/about"
    },
    {
      text: "Check Out My Projects",
      href: "/projects"
    },
    {
      text: "Access My CV",
      href: "/cv"
    },
    {
      text: "Get in Touch",
      href: "/contact"
    }
  ]

  return (
    <section className="py-4 px-4 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-3 sm:gap-4">
        {buttons.map((button) => (
          <Button 
            key={button.href}
            size="lg" 
            asChild 
            className="text-sm sm:text-base whitespace-nowrap w-full lg:w-auto"
          >
            <Link href={button.href}>
              {button.text}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}
