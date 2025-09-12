import { Card } from '@/components/ui/card'

export const Expertise = () => {
  const skills = [
    {
      title: '🤖 AI Development Tools',
      description: 'Experience with modern AI tools and their integration into development workflows.'
    },
    {
      title: '💻 Full-Stack Programming',
      description: 'Developing end-to-end web applications using modern technologies and frameworks.'
    },
    {
      title: '👨‍💻 Technical Leadership',
      description: 'Leading technical projects and teams across multiple domains and technologies.'
    },
    {
      title: '📊 Project Management',
      description: 'Leading teams and managing complex projects across multiple domains.'
    },
    {
      title: '🧩 Problem Solving',
      description: 'Analytical approach to solving technical and business challenges.'
    },
    {
      title: '🤝 Client Services',
      description: 'Strong focus on client satisfaction and relationship management.'
    }
  ]

  return (
    <section className="py-6">
      <h2 className="text-xl font-bold mb-4">Core Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <Card key={skill.title} className="p-3 hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}