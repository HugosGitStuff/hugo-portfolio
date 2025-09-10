import { Metadata } from 'next'
import { HomeButton } from '@/app/components/navigation/HomeButton'

export const metadata: Metadata = {
  title: 'About | Hugo Ramalho',
  description: 'Learn more about Hugo Ramalho and his journey in software development.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">Content coming soon...</p>
        </div>
      </div>
    </main>
  )
}
