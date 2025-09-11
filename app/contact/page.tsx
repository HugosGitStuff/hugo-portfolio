import { Metadata } from 'next'
import { SimpleNavbar } from '@/app/components/navigation/SimpleNavbar'
import { Footer } from '@/app/components/landing/Footer'

export const metadata: Metadata = {
  title: 'Contact | Hugo Ramalho',
  description: 'Get in touch with Hugo Ramalho for collaborations and opportunities.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SimpleNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-6">
          {/* Content will be added later */}
          <p className="text-lg">Contact form coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
