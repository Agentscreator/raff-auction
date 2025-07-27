"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Calendar, Ticket, Users, Car, DollarSign, Fuel, Gauge } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function CarRafflesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [makeFilter, setMakeFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")

  const carRaffles = [
    {
      id: 1,
      title: "2024 Tesla Model S Plaid",
      make: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      estimatedValue: 120000,
      engine: "Electric Tri-Motor",
      transmission: "Single-Speed",
      ticketPrice: 50,
      totalTickets: 2000,
      soldTickets: 1650,
      drawDate: "Dec 25, 2024",
      type: "electric",
      condition: "Brand New",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "2023 BMW M4 Competition",
      make: "BMW",
      model: "M4 Competition",
      year: 2023,
      estimatedValue: 78000,
      engine: "3.0L Twin-Turbo I6",
      transmission: "8-Speed Automatic",
      ticketPrice: 25,
      totalTickets: 1500,
      soldTickets: 980,
      drawDate: "Dec 20, 2024",
      type: "luxury",
      condition: "Like New",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "2024 Ford Mustang GT",
      make: "Ford",
      model: "Mustang GT",
      year: 2024,
      estimatedValue: 55000,
      engine: "5.0L V8",
      transmission: "6-Speed Manual",
      ticketPrice: 20,
      totalTickets: 2500,
      soldTickets: 1875,
      drawDate: "Dec 31, 2024",
      type: "sports",
      condition: "Brand New",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "2023 Porsche 911 Carrera",
      make: "Porsche",
      model: "911 Carrera",
      year: 2023,
      estimatedValue: 98000,
      engine: "3.0L Twin-Turbo H6",
      transmission: "8-Speed PDK",
      ticketPrice: 35,
      totalTickets: 1800,
      soldTickets: 1260,
      drawDate: "Jan 15, 2025",
      type: "sports",
      condition: "Excellent",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "2024 Chevrolet Corvette Z06",
      make: "Chevrolet",
      model: "Corvette Z06",
      year: 2024,
      estimatedValue: 115000,
      engine: "5.5L V8",
      transmission: "8-Speed Automatic",
      ticketPrice: 40,
      totalTickets: 2200,
      soldTickets: 1540,
      drawDate: "Jan 8, 2025",
      type: "sports",
      condition: "Brand New",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "2023 Range Rover Sport",
      make: "Land Rover",
      model: "Range Rover Sport",
      year: 2023,
      estimatedValue: 85000,
      engine: "3.0L Turbo I6",
      transmission: "8-Speed Automatic",
      ticketPrice: 30,
      totalTickets: 1600,
      soldTickets: 720,
      drawDate: "Dec 28, 2024",
      type: "luxury",
      condition: "Like New",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filteredRaffles = carRaffles.filter((raffle) => {
    const matchesSearch = raffle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         raffle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         raffle.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMake = makeFilter === "all" || raffle.make.toLowerCase() === makeFilter
    const matchesType = typeFilter === "all" || raffle.type === typeFilter
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
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Car Raffles</h1>
            </div>
            <Link href="/create-raffle">
              <Button className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-sm sm:text-base px-3 sm:px-4">
                <Car className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Create Car Raffle</span>
                <span className="sm:hidden">Create</span>
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
                  className="pl-10 rounded-2xl border-gray-200 h-12 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>

              <Select value={makeFilter} onValueChange={setMakeFilter}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <Car className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="all">All Makes</SelectItem>
                  <SelectItem value="tesla">Tesla</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="porsche">Porsche</SelectItem>
                  <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  <SelectItem value="land rover">Land Rover</SelectItem>
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
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="suv">SUVs</SelectItem>
                  <SelectItem value="truck">Trucks</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="highest-value">Highest Value</SelectItem>
                  <SelectItem value="most-sold">Most Sold</SelectItem>
                  <SelectItem value="lowest-price">Lowest Ticket Price</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredRaffles.length} of {carRaffles.length} car raffles
          </p>
        </div>

        {/* Car Raffles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredRaffles.map((raffle) => (
            <Card
              key={raffle.id}
              className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <Image
                  src={raffle.image || "/placeholder.svg"}
                  alt={raffle.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                <Badge className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 rounded-2xl">
                  {Math.round((raffle.soldTickets / raffle.totalTickets) * 100)}% Sold
                </Badge>
                <Badge className="absolute top-4 left-4 bg-black/70 text-white rounded-2xl">
                  {raffle.condition}
                </Badge>
                <Badge className="absolute bottom-4 left-4 bg-green-500/90 text-white rounded-2xl text-xs flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {(raffle.estimatedValue / 1000).toFixed(0)}K Value
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="rounded-full text-xs">
                    {raffle.year}
                  </Badge>
                  <Badge variant="outline" className="rounded-full text-xs">
                    {raffle.type}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {raffle.make} {raffle.model}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  Est. Value: ${raffle.estimatedValue.toLocaleString()}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <Fuel className="h-3 w-3 mr-1" />
                    <span>{raffle.engine}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Gauge className="h-3 w-3 mr-1" />
                    <span>{raffle.transmission}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ticket Price</span>
                    <span className="font-semibold">${raffle.ticketPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Draw Date
                    </span>
                    <span className="font-semibold">{raffle.drawDate}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: `${(raffle.soldTickets / raffle.totalTickets) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {raffle.soldTickets} sold
                    </span>
                    <span>{raffle.totalTickets} total</span>
                  </div>
                </div>

                <Button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                  <Ticket className="h-4 w-4 mr-2" />
                  Buy Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRaffles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No car raffles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Link href="/create-raffle">
              <Button className="rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                Create Car Raffle
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}