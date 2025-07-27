"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, MapPin, Clock, Car, Fuel, Gauge } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function CarAuctionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [makeFilter, setMakeFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")

  const carAuctions = [
    {
      id: 1,
      title: "2023 Porsche 911 Turbo S",
      make: "Porsche",
      model: "911 Turbo S",
      year: 2023,
      mileage: 2400,
      engine: "3.8L Twin-Turbo H6",
      transmission: "8-Speed PDK",
      currentBid: 185000,
      timeLeft: "2h 15m",
      location: "Beverly Hills, CA",
      type: "sports",
      bids: 28,
      condition: "Excellent",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "1967 Shelby GT500 Eleanor",
      make: "Shelby",
      model: "GT500 Eleanor",
      year: 1967,
      mileage: "Restored",
      engine: "7.0L V8",
      transmission: "4-Speed Manual",
      currentBid: 285000,
      timeLeft: "1d 8h",
      location: "Detroit, MI",
      type: "classic",
      bids: 35,
      condition: "Restored",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "2024 Tesla Model S Plaid",
      make: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      mileage: 850,
      engine: "Electric Tri-Motor",
      transmission: "Single-Speed",
      currentBid: 95000,
      timeLeft: "3d 12h",
      location: "Palo Alto, CA",
      type: "electric",
      bids: 22,
      condition: "Like New",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "2022 BMW M4 Competition",
      make: "BMW",
      model: "M4 Competition",
      year: 2022,
      mileage: 8500,
      engine: "3.0L Twin-Turbo I6",
      transmission: "8-Speed Automatic",
      currentBid: 68000,
      timeLeft: "5h 30m",
      location: "Austin, TX",
      type: "luxury",
      bids: 19,
      condition: "Excellent",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "2021 Ford F-150 Raptor",
      make: "Ford",
      model: "F-150 Raptor",
      year: 2021,
      mileage: 15200,
      engine: "3.5L Twin-Turbo V6",
      transmission: "10-Speed Automatic",
      currentBid: 52000,
      timeLeft: "2d 6h",
      location: "Phoenix, AZ",
      type: "truck",
      bids: 31,
      condition: "Very Good",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "1969 Chevrolet Camaro SS",
      make: "Chevrolet",
      model: "Camaro SS",
      year: 1969,
      mileage: "Numbers Matching",
      engine: "396 Big Block V8",
      transmission: "4-Speed Manual",
      currentBid: 125000,
      timeLeft: "4d 2h",
      location: "Nashville, TN",
      type: "classic",
      bids: 24,
      condition: "Restored",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filteredAuctions = carAuctions.filter((auction) => {
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMake = makeFilter === "all" || auction.make.toLowerCase() === makeFilter
    const matchesType = typeFilter === "all" || auction.type === typeFilter
    return matchesSearch && matchesMake && matchesType
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="w-px h-6 bg-gray-300" />
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Live Car Auctions</h1>
            </div>
            <Link href="/create-auction">
              <Button className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-sm sm:text-base px-3 sm:px-4">
                <Car className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">List Your Car</span>
                <span className="sm:hidden">List Car</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Filters with car-specific options */}
        <Card className="rounded-3xl border-0 shadow-lg mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by make, model, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-2xl border-gray-200 h-12 focus:border-red-400 focus:ring-red-400"
                />
              </div>

              <Select value={makeFilter} onValueChange={setMakeFilter}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <Car className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="porsche">Porsche</SelectItem>
                  <SelectItem value="tesla">Tesla</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="shelby">Shelby</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sports">Sports Cars</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="truck">Trucks</SelectItem>
                  <SelectItem value="suv">SUVs</SelectItem>
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
                  <SelectItem value="newest">Newest Listings</SelectItem>
                  <SelectItem value="year-new">Newest Cars</SelectItem>
                  <SelectItem value="year-old">Oldest Cars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredAuctions.length} of {carAuctions.length} vehicles
          </p>
        </div>

        {/* Car Auctions Grid */}
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
                <Badge className="absolute top-4 left-4 bg-black/70 text-white rounded-2xl">
                  {auction.condition}
                </Badge>
                <Badge className="absolute bottom-4 left-4 bg-blue-500/90 text-white rounded-2xl text-xs">
                  {auction.year}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="rounded-full text-xs">
                    {auction.type}
                  </Badge>
                  <span className="text-sm font-medium text-gray-700">
                    {typeof auction.mileage === 'number' 
                      ? `${auction.mileage.toLocaleString()} mi` 
                      : auction.mileage}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {auction.make} {auction.model}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{auction.location}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <Fuel className="h-3 w-3 mr-1" />
                    <span>{auction.engine}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Gauge className="h-3 w-3 mr-1" />
                    <span>{auction.transmission}</span>
                  </div>
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

                  <Button className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
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
              <Car className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Link href="/create-auction">
              <Button className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                List Your Car
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}