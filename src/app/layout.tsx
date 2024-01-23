import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import {RouteChangesProvider} from "nextjs-router-events";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moon App TEST',
  description: 'test moon',
}

type Props = {children : ReactNode}

export default function RootLayout({children,}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <RouteChangesProvider>
              {children}
          </RouteChangesProvider>
      </body>
    </html>
  )
}
