import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8 w-full" />
        <div className="flex flex-col items-center justify-center w-full text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hugo Ramalho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
