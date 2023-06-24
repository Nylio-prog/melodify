import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Melodify',
  description: 'Listen and share music across the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
