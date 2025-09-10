import { Metadata } from 'next'
import { HomeButton } from '@/app/components/navigation/HomeButton'

export const metadata: Metadata = {
  title: 'Contact | Hugo Ramalho',
  description: 'Get in touch with Hugo Ramalho for collaborations and opportunities.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">Contact form coming soon...</p>
        </div>
      </div>
    </main>
  )
}
