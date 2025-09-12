import { Metadata } from 'next'
import { Navbar } from '@/app/components/landing/Navbar'
import { Footer } from '@/app/components/landing/Footer'
import { ContactInfo } from '@/app/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact | Hugo Ramalho',
  description: 'Get in touch with Hugo Ramalho for collaborations and opportunities.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <ContactInfo />
      </div>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  )
}
