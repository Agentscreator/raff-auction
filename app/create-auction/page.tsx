"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, MapPin, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CreateAuction() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingBid: "",
    category: "",
    location: "",
    duration: "",
    images: [] as File[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log("Creating auction:", formData)
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
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Create Auction</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card className="rounded-3xl border-0 shadow-xl">
          <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">List Your Item</CardTitle>
            <CardDescription className="text-base sm:text-lg text-gray-600">
              Create an auction and let bidders compete for your item
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-purple-500" />
                  Basic Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-gray-700 font-medium">
                      Item Title
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Enter item title"
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
                        <SelectItem value="vehicles">Vehicles</SelectItem>
                        <SelectItem value="collectibles">Collectibles</SelectItem>
                        <SelectItem value="jewelry">Jewelry</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700 font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="rounded-2xl border-gray-200 min-h-32 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="Describe your item in detail..."
                    required
                  />
                </div>
              </div>

              {/* Auction Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Auction Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startingBid" className="text-gray-700 font-medium">
                      Starting Bid ($)
                    </Label>
                    <Input
                      id="startingBid"
                      type="number"
                      value={formData.startingBid}
                      onChange={(e) => setFormData((prev) => ({ ...prev, startingBid: e.target.value }))}
                      className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="0.00"
                      min="1"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration" className="text-gray-700 font-medium">
                      Auction Duration
                    </Label>
                    <Select
                      value={formData.duration}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, duration: value }))}
                    >
                      <SelectTrigger className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="1day">1 Day</SelectItem>
                        <SelectItem value="3days">3 Days</SelectItem>
                        <SelectItem value="7days">7 Days</SelectItem>
                        <SelectItem value="14days">14 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-500" />
                  Location
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-700 font-medium">
                    Item Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    className="rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="City, State"
                    required
                  />
                  <p className="text-sm text-gray-500">Location affects shipping costs and local bidder advantages</p>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-orange-500" />
                  Images
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
                    Create Auction
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
