import { Card } from "@/components/ui/card"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  technologies: string[]
  isFeatured?: boolean
}

export function ProjectCard({ title, description, link, technologies, isFeatured = false }: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
      isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-[#e6e2d3] bg-opacity-50 dark:bg-[#e6e2d3] dark:bg-opacity-10 border-2 border-[#e6e2d3] dark:border-[#e6e2d3] dark:border-opacity-30' : ''
    }`}>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-semibold hover:text-[#c4bfa7] transition-colors`}>
              {title}
            </h3>
            {isFeatured && (
              <span className="px-2 py-1 text-xs font-semibold bg-[#e6e2d3] dark:bg-[#e6e2d3] dark:bg-opacity-20 text-gray-700 dark:text-gray-200 rounded-full">
                Featured Project
              </span>
            )}
          </div>
          <p className={`text-gray-600 dark:text-gray-300 mb-4 ${isFeatured ? 'text-lg' : ''}`}>{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-sm rounded-full ${
                  isFeatured 
                    ? 'bg-[#e6e2d3] dark:bg-[#e6e2d3] dark:bg-opacity-20 text-gray-700 dark:text-gray-200' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  )
}
