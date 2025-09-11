import { Metadata } from 'next'
import { SimpleNavbar } from '@/app/components/navigation/SimpleNavbar'
import { Footer } from '@/app/components/landing/Footer'
import { ProjectCard } from '@/app/components/projects/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects | Hugo Ramalho',
  description: 'Explore my portfolio of projects and software development work.',
}

const projects = [
  {
    title: 'Personal Portfolio & AI Assistant',
    description: 'A full-stack modern web application featuring an interactive AI chatbot. Built with Next.js 14, this portfolio showcases advanced web development skills including frontend design, backend API development, AI integration, containerization, and cloud deployment.',
    link: 'https://hugoramalho.com',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'Railway', 'Vercel', 'AI/ML']
  },
  {
    title: 'Calculator',
    description: 'A fully functional calculator web application with a clean, modern interface.',
    link: 'https://hugosgitstuff.github.io/Calculator/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Image Gallery',
    description: 'A beautiful gallery showcasing tulip fields, featuring responsive image layouts and smooth transitions.',
    link: 'https://hugosgitstuff.github.io/Tulip-Fields-Gallery/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'My Pet Simple HTML',
    description: 'A charming webpage dedicated to showcasing a pet dog, demonstrating fundamental web development skills.',
    link: 'https://hugosgitstuff.github.io/Pet-Dog/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
]

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleNavbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Here are some of my featured projects. Each one represents a unique challenge and learning experience. More projects will be added as I deploy them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
