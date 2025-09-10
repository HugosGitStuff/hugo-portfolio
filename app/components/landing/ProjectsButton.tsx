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
    <section className="py-4">
      <div className="flex justify-center gap-4 flex-wrap">
        {buttons.map((button) => (
          <Button 
            key={button.href}
            size="lg" 
            asChild 
            className="text-base whitespace-nowrap"
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
