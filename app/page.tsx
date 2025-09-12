import { Navbar } from './components/landing/Navbar'
import { Hero } from './components/landing/Hero'
import { ProjectsButton } from './components/landing/ProjectsButton'
import { Social } from './components/landing/Social'
import { Expertise } from './components/landing/Expertise'
import { Footer } from './components/landing/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProjectsButton />
        <Expertise />
        <Social />
      </main>
      <Footer />
    </div>
  )
}