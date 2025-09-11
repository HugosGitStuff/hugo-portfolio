'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export const SimpleNavbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
