"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, MapPin, Clock, Gavel } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function AuctionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")

  const auctions = [
    {
      id: 1,
      title: "Luxury Sports Car - Ferrari 488",
      currentBid: 245000,
      timeLeft: "2h 15m",
      location: "Los Angeles, CA",
      category: "vehicles",
      bids: 23,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Vintage Rolex Submariner",
      currentBid: 8500,
      timeLeft: "1d 8h",
      location: "New York, NY",
      category: "jewelry",
      bids: 15,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Original Picasso Sketch",
      currentBid: 125000,
      timeLeft: "3d 12h",
      location: "Chicago, IL",
      category: "art",
      bids: 8,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Gaming PC Setup - RTX 4090",
      currentBid: 3200,
      timeLeft: "5h 30m",
      location: "Austin, TX",
      category: "electronics",
      bids: 31,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Rare Pokemon Card Collection",
      currentBid: 15000,
      timeLeft: "2d 6h",
      location: "Seattle, WA",
      category: "collectibles",
      bids: 42,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Diamond Engagement Ring",
      currentBid: 12000,
      timeLeft: "4d 2h",
      location: "Miami, FL",
      category: "jewelry",
      bids: 19,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filteredAuctions = auctions.filter((auction) => {
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || auction.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="w-px h-6 bg-gray-300" />
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Active Auctions</h1>
            </div>
            <Link href="/create-auction">
              <Button className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm sm:text-base px-3 sm:px-4">
                <Gavel className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Create Auction</span>
                <span className="sm:hidden">Create</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Filters with better mobile layout */}
        <Card className="rounded-3xl border-0 shadow-lg mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search auctions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-2xl border-gray-200 h-12 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="collectibles">Collectibles</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="highest-bid">Highest Bid</SelectItem>
                  <SelectItem value="most-bids">Most Bids</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredAuctions.length} of {auctions.length} auctions
          </p>
        </div>

        {/* Auctions Grid with better mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredAuctions.map((auction) => (
            <Card
              key={auction.id}
              className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-2xl">
                  <Clock className="h-3 w-3 mr-1" />
                  {auction.timeLeft}
                </Badge>
                <Badge className="absolute top-4 left-4 bg-black/50 text-white rounded-2xl">{auction.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{auction.title}</h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{auction.location}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Bid</p>
                      <p className="text-xl font-bold text-green-600">${auction.currentBid.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Bids</p>
                      <p className="text-lg font-semibold">{auction.bids}</p>
                    </div>
                  </div>

                  <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Place Bid
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAuctions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No auctions found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Link href="/create-auction">
              <Button className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Create First Auction
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
