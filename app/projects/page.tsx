import { Metadata } from 'next'
import { HomeButton } from '@/app/components/navigation/HomeButton'

export const metadata: Metadata = {
  title: 'Projects | Hugo Ramalho',
  description: 'Explore my portfolio of projects and software development work.',
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">Project showcase coming soon...</p>
        </div>
      </div>
    </main>
  )
}
