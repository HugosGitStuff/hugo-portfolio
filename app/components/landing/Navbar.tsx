'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home } from 'lucide-react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { href: '/about', label: 'About', variant: 'ghost' },
    { href: '/projects', label: 'Projects', variant: 'ghost' },
    { href: '/contact', label: 'Contact', variant: 'default' }
  ] as const
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-lg sm:text-xl">
            Hugo Ramalho
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            {!isHome && (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </Button>
            )}
            {navItems.map((item) => (
              <Button key={item.href} variant={item.variant} asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {!isHome && (
                    <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                      <Link href="/">
                        <Home className="h-5 w-5 mr-2" />
                        Home
                      </Link>
                    </Button>
                  )}
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant={item.variant}
                      className="w-full justify-start"
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}