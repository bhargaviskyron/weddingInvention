"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attending: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response. We look forward to celebrating with you!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: "yes",
        guests: "0",
        message: "",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Will you be attending?</Label>
        <RadioGroup value={formData.attending} onValueChange={handleRadioChange} className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="attending-yes" />
            <Label htmlFor="attending-yes">Joyfully Accept</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="attending-no" />
            <Label htmlFor="attending-no">Regretfully Decline</Label>
          </div>
        </RadioGroup>
      </div>

      {formData.attending === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="guests">Number of Additional Guests</Label>
          <Input
            id="guests"
            name="guests"
            type="number"
            min="0"
            max="5"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <p className="text-sm text-gray-500">Not including yourself</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message to the Couple (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your wishes or any dietary restrictions"
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit RSVP"}
      </Button>

      <Toaster />
    </form>
  )
}

