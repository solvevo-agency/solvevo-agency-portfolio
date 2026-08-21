import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/20">
        <Sparkles className="h-5 w-5 animate-pulse" />
      </div>
      <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent dark:to-indigo-400">
        Solvevo
      </span>
    </Link>
  )
}
