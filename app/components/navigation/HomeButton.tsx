import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export const HomeButton = () => {
  return (
    <div className="fixed top-[4.5rem] left-4 z-10">
      <Button variant="ghost" size="sm" asChild className="gap-1 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/">
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </Button>
    </div>
  )
}
