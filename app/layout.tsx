import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-white dark:bg-[#313338]")}>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <ModeToggle />
          </header>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}