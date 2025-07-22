"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"


export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (email && email.includes("@")) {
      toast("Subscribed!", {
        description: "Thank you for subscribing to our newsletter. We'll keep you updated!",
      })
      setEmail("")
    } else {
      toast("Invalid Email", {
        description: "Please enter a valid email address.",
      })
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="email-newsletter" className="sr-only">
          Email
        </Label>
        <Input
          id="email-newsletter"
          type="email"
          placeholder="your@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      <Button
        type="submit"
        className="h-12 px-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg transition-all duration-300"
        disabled={isLoading}
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
