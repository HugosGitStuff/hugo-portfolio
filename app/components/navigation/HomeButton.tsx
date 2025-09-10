import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export const HomeButton = () => {
  return (
    <div className="absolute top-24 left-4 sm:left-8 md:left-12">
      <Button variant="ghost" size="sm" asChild className="gap-2">
        <Link href="/">
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
