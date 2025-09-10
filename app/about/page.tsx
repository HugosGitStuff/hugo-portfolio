import { Metadata } from 'next'
import { HomeButton } from '@/app/components/navigation/HomeButton'

export const metadata: Metadata = {
  title: 'About | Hugo Ramalho',
  description: 'Learn more about Hugo Ramalho and his journey in software development.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12 md:p-16 lg:p-24">
      <HomeButton />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-8">
          {/* Professional Summary */}
          <div className="text-lg font-medium text-muted-foreground text-center italic">
            | Entrepreneur Transitioning to IT | AI Development Tools & Full-Stack Programming Student | Salesforce Sales Operations Student | Experienced Leader in Project Management, Problem Solving & Client Services |
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a resilient, problem-solving professional transitioning into IT, fueled by a passion for technology and a diverse career spanning three continents. Currently studying AI developing tools, full-stack programming and Salesforce Sales Operations. I'm eager to apply my technical aptitude and adaptability to roles in IT, such as Software Development and Engineering with or without AI Tools, Project Management in Software Development or Salesforce Sales Operations.
            </p>

            <p className="text-lg leading-relaxed">
              I'm pivoting to IT, building on my technical foundation from a Technical Diploma in Manufacturing (Danbury, Connecticut, USA) and three years of Mechanical Engineering at Unileste, Minas Gerais, Brazil. My early career as a machinist at Consulting Engineering & Development Services, Inc. in the USA, and English teacher at Uptime Comunicação em Inglês in Brazil strengthened my precision and interpersonal skills.
            </p>

            <p className="text-lg leading-relaxed">
              As an entrepreneur and owner of Ocean Gardens Garden Care in Portugal, I've led a team delivering exceptional landscaping services for 10 years, honing leadership and project management. I also run Friendly Maneuver Transports and Tourism, a solo airport transfer service across Faro, Lisbon, Seville, and Malaga, sharpening client communication and operational efficiency.
            </p>

            <p className="text-lg leading-relaxed">
              My journeys between Brazil, Connecticut USA and Portugal blends Brazilian warmth, American drive, and Portuguese adaptability, enabling me to thrive in diverse environments.
            </p>

            <p className="text-lg leading-relaxed">
              Outside work, I enjoy travel, spearfishing, hunting and family barbecues, which keep me inspired.
            </p>

            <p className="text-lg leading-relaxed">
              Connect with me to explore AI developing tools, IT opportunities, full-stack development and discuss Salesforce Sales Ops or share insights on career transitions and possibilities!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
