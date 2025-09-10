import { Metadata } from 'next'
import { HomeButton } from '@/app/components/navigation/HomeButton'

export const metadata: Metadata = {
  title: 'CV | Hugo Ramalho',
  description: 'View my professional experience, skills, and qualifications.',
}

export default function CVPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 sm:pt-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <HomeButton />
      <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
        <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">CV content coming soon...</p>
        </div>
      </div>
    </main>
  )
}
