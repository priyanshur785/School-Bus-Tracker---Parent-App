"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bus, Eye, EyeOff } from "lucide-react"

interface LoginScreenProps {
  onLogin: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
          <Bus className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">School Bus Tracker</h1>
        <p className="text-gray-600">Keep track of your child's journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email or Phone
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 text-base pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
          Login
        </Button>
      </form>

      <div className="mt-6 text-center space-y-3">
        <button className="text-blue-600 text-sm font-medium">Forgot Password?</button>
        <div className="text-gray-600 text-sm">
          {"Don't have an account? "}
          <button className="text-blue-600 font-medium">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
