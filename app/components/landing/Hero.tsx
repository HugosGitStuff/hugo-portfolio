import { ProfilePhoto } from './ProfilePhoto'

export const Hero = () => {
  return (
    <section className="pt-24 sm:pt-28 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="w-64 lg:w-auto">
            <ProfilePhoto />
          </div>
        </div>
        
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Hugo Ramalho</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              IT & AI Development Professional | Entrepreneur
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-muted-foreground leading-relaxed max-w-prose">
              Entrepreneur transitioning to IT, specializing in AI Development Tools & Full-Stack Programming.
              With experience spanning three continents, I bring a unique blend of technical aptitude and
              leadership skills to software development. Currently focused on AI tools and programming.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              I love spending time with my family, spearfishing, hunting and family barbecues.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}