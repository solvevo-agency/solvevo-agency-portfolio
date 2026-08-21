import type { Metadata } from "next"
import "./globals.css"
import { ReduxProvider } from "@/providers/redux-provider"
import { QueryProvider } from "@/providers/query-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { siteConfig } from "@/config/site.config"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ReduxProvider>
            <QueryProvider>
              {children}
              <Toaster position="top-center" richColors />
            </QueryProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
