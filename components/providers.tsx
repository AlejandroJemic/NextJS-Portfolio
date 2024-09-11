'use client'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider  
    enableSystem
    attribute='class'       
    defaultTheme='dark'
    disableTransitionOnChange
    >

    {children}
    <ToasterProvider />
    </ThemeProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      closeButton
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}
