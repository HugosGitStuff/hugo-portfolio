import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export const HomeButton = () => {
  return (
    <div className="fixed top-20 sm:top-24 left-2 sm:left-8 z-10">
      <Button variant="ghost" size="sm" asChild className="gap-1 sm:gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/">
          <ChevronLeft className="h-4 w-4" />
          <span className="sm:inline">Back to Home</span>
        </Link>
      </Button>
    </div>
  )
}
