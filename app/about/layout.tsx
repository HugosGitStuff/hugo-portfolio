import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Hugo Ramalho',
  description: 'Learn more about Hugo Ramalho and his journey in software development.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
