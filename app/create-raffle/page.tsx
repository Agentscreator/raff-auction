"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Ticket, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CreateRaffle() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ticketPrice: "",
    totalTickets: "",
    category: "",
    drawDate: "",
    images: [] as File[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Creating raffle:", formData)
    router.push("/dashboard")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files || []),
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="w-px h-6 bg-gray-300" />
            <Image src="/images/raffauction-new-logo.png" alt="RaffAuction Logo" width={40} height={40} className="" />
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Create Raffle</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card className="rounded-3xl border-0 shadow-xl">
          <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">Setup Your Raffle</CardTitle>
            <CardDescription className="text-base sm:text-lg text-gray-600">
              Create an exciting raffle draw for participants to win your prize
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Ticket className="h-5 w-5 mr-2 text-purple-500" />
                  Prize Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-gray-700 font-medium">
                      Prize Title
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Enter prize title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-gray-700 font-medium">
                      Category
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="travel">Travel & Experiences</SelectItem>
                        <SelectItem value="cash">Cash Prizes</SelectItem>
                        <SelectItem value="gift-cards">Gift Cards</SelectItem>
                        <SelectItem value="collectibles">Collectibles</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700 font-medium">
                    Prize Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="rounded-2xl border-gray-200 min-h-32 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="Describe the prize in detail..."
                    required
                  />
                </div>
              </div>

              {/* Raffle Settings */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                  Raffle Settings
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="ticketPrice" className="text-gray-700 font-medium">
                      Ticket Price ($)
                    </Label>
                    <Input
                      id="ticketPrice"
                      type="number"
                      value={formData.ticketPrice}
                      onChange={(e) => setFormData((prev) => ({ ...prev, ticketPrice: e.target.value }))}
                      className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="0.00"
                      min="1"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="totalTickets" className="text-gray-700 font-medium">
                      Total Tickets
                    </Label>
                    <Input
                      id="totalTickets"
                      type="number"
                      value={formData.totalTickets}
                      onChange={(e) => setFormData((prev) => ({ ...prev, totalTickets: e.target.value }))}
                      className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="100"
                      min="10"
                      required
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-700">Estimated Revenue:</span>
                    <span className="font-semibold text-blue-900">
                      $
                      {formData.ticketPrice && formData.totalTickets
                        ? (
                            Number.parseFloat(formData.ticketPrice) * Number.parseInt(formData.totalTickets)
                          ).toLocaleString()
                        : "0.00"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Draw Date */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-500" />
                  Draw Schedule
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="drawDate" className="text-gray-700 font-medium">
                    Draw Date & Time
                  </Label>
                  <Input
                    id="drawDate"
                    type="datetime-local"
                    value={formData.drawDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, drawDate: e.target.value }))}
                    className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    The winner will be automatically selected at this date and time
                  </p>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-orange-500" />
                  Prize Images
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="images" className="text-gray-700 font-medium">
                    Upload Images
                  </Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-gray-600">Drag and drop images here, or click to browse</p>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-2xl bg-transparent"
                        onClick={() => document.getElementById("images")?.click()}
                      >
                        Choose Files
                      </Button>
                    </div>
                  </div>
                  {formData.images.length > 0 && (
                    <p className="text-sm text-green-600">{formData.images.length} image(s) selected</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-2xl px-8 bg-transparent"
                    onClick={() => router.push("/dashboard")}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="rounded-2xl px-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    Create Raffle
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
