import { Metadata } from 'next'
import { SimpleNavbar } from '@/app/components/navigation/SimpleNavbar'
import { Footer } from '@/app/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Projects | Hugo Ramalho',
  description: 'Explore my portfolio of projects and software development work.',
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">Project showcase coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
