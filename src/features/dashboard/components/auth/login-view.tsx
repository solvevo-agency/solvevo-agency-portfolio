"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2 } from "lucide-react"
import { useAppDispatch } from "@/store/hooks"
import { setAuthenticated } from "@/store/slices/auth.slice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

export function LoginView() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)
  
  // Login states
  const [loginEmail, setLoginEmail] = useState("admin@solvevo.com")
  const [loginPassword, setLoginPassword] = useState("admin123")

  // Signup states
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!loginEmail || !loginPassword) {
      toast.error("Please fill in all fields")
      return
    }
    
    setIsLoading(true)
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false)
      // Set session cookie
      document.cookie = "solvevo_session=true; path=/; max-age=86400;" // 1 day
      
      // Dispatch to redux
      const displayName = loginEmail.split("@")[0]
      const capitalizedName = displayName.charAt(0).toUpperCase() + displayName.slice(1)
      dispatch(setAuthenticated(capitalizedName))
      
      toast.success(`Welcome back, ${capitalizedName}!`)
      router.push("/dashboard")
    }, 1000)
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!signupName || !signupEmail || !signupPassword) {
      toast.error("Please fill in all fields")
      return
    }
    
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Set session cookie
      document.cookie = "solvevo_session=true; path=/; max-age=86400;"
      
      // Dispatch to redux
      dispatch(setAuthenticated(signupName))
      
      toast.success(`Account created! Welcome, ${signupName}!`)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 dark:bg-background px-4 py-12">
      <Card className="w-full max-w-md shadow-2xl border bg-card">
        <CardHeader className="space-y-1 flex flex-col items-center border-b pb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 mb-3">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-extrabold tracking-tight">Solvevo Hub</CardTitle>
          <CardDescription className="text-sm text-center">
            Sign in to manage your projects, blogs, and messages.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="cursor-pointer">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="cursor-pointer">Register</TabsTrigger>
            </TabsList>
            
            {/* Login Tab Content */}
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email Address</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="login-password">Password</Label>
                  </div>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button type="submit" className="w-full shadow-lg shadow-primary/10 mt-2 cursor-pointer" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In to Admin"
                  )}
                </Button>
              </form>
            </TabsContent>
            
            {/* Signup Tab Content */}
            <TabsContent value="signup">
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button type="submit" className="w-full shadow-lg shadow-primary/10 mt-2 cursor-pointer" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center border-t pt-4 bg-muted/10 dark:bg-card/20 rounded-b-lg">
          <p className="text-xs text-muted-foreground text-center">
            Solvevo Admin Dashboard. Unauthorized access is restricted.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
