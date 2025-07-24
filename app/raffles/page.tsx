"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Calendar, Ticket, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function RafflesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")

  const raffles = [
    {
      id: 1,
      title: "Dream Vacation to Maldives",
      ticketPrice: 25,
      totalTickets: 1000,
      soldTickets: 750,
      drawDate: "Dec 25, 2024",
      category: "travel",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Gaming Setup Bundle - RTX 4090",
      ticketPrice: 10,
      totalTickets: 500,
      soldTickets: 320,
      drawDate: "Dec 20, 2024",
      category: "electronics",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "$10,000 Cash Prize",
      ticketPrice: 20,
      totalTickets: 2000,
      soldTickets: 1200,
      drawDate: "Dec 31, 2024",
      category: "cash",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "iPhone 15 Pro Max",
      ticketPrice: 5,
      totalTickets: 800,
      soldTickets: 650,
      drawDate: "Dec 18, 2024",
      category: "electronics",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Luxury Watch Collection",
      ticketPrice: 50,
      totalTickets: 200,
      soldTickets: 85,
      drawDate: "Jan 5, 2025",
      category: "jewelry",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Concert VIP Experience",
      ticketPrice: 15,
      totalTickets: 300,
      soldTickets: 180,
      drawDate: "Dec 22, 2024",
      category: "experiences",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const filteredRaffles = raffles.filter((raffle) => {
    const matchesSearch = raffle.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || raffle.category === categoryFilter
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
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Active Raffles</h1>
            </div>
            <Link href="/create-raffle">
              <Button className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm sm:text-base px-3 sm:px-4">
                <Ticket className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Create Raffle</span>
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
                  placeholder="Search raffles..."
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
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="cash">Cash Prizes</SelectItem>
                  <SelectItem value="jewelry">Jewelry</SelectItem>
                  <SelectItem value="experiences">Experiences</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 rounded-2xl border-gray-200 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="most-sold">Most Sold</SelectItem>
                  <SelectItem value="lowest-price">Lowest Price</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {filteredRaffles.length} of {raffles.length} raffles
          </p>
        </div>

        {/* Raffles Grid with better mobile layout */}
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
                <Badge className="absolute top-4 left-4 bg-black/50 text-white rounded-2xl">{raffle.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{raffle.title}</h3>

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
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
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

                <Button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Buy Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRaffles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ticket className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No raffles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Link href="/create-raffle">
              <Button className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Create First Raffle
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
