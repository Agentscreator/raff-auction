"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, LogIn } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AuthPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Fake authentication - check for demo credentials
    if (username === "1234" && password === "1234") {
      // Store auth state (in real app, this would be proper auth)
      localStorage.setItem("raffauction_auth", "true")
      localStorage.setItem("raffauction_user", JSON.stringify({ username: "1234", id: "demo-user" }))
      router.push("/dashboard")
    } else {
      setError("Invalid credentials. Use username: 1234, password: 1234")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        {/* Back Button with better mobile spacing */}
        <Link
          href="/"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl shadow-2xl">
          <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
            <Image
              src="/images/raffauction-new-logo.png"
              alt="RaffAuction Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <CardTitle className="text-xl sm:text-2xl font-bold text-white">Welcome Back</CardTitle>
            <CardDescription className="text-white/70 text-sm sm:text-base">
              Sign in to access your RaffAuction dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-white font-medium">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 focus:border-purple-400 focus:ring-purple-400"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 focus:border-purple-400 focus:ring-purple-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-3">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-3">
                <p className="text-blue-200 text-sm">
                  <strong>Demo Credentials:</strong>
                  <br />
                  Username: 1234
                  <br />
                  Password: 1234
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl h-12 font-semibold"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
