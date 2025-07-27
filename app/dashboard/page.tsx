"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Ticket, MapPin, Clock, Users, TrendingUp, LogOut, Zap, Award, Fuel } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function CarDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("raffauction_auth")
    const userData = localStorage.getItem("raffauction_user")

    if (!auth || auth !== "true") {
      router.push("/auth")
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("raffauction_auth")
    localStorage.removeItem("raffauction_user")
    router.push("/")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const activeAuctions = [
    {
      id: 1,
      title: "2023 Porsche 911 Turbo S",
      make: "Porsche",
      model: "911 Turbo S",
      year: 2023,
      mileage: "2,400 miles",
      currentBid: 185000,
      timeLeft: "2h 15m",
      location: "Beverly Hills, CA",
      image: "/placeholder.svg?height=200&width=300",
      condition: "Excellent"
    },
    {
      id: 2,
      title: "1967 Shelby GT500 Eleanor",
      make: "Shelby",
      model: "GT500 Eleanor",
      year: 1967,
      mileage: "Restored",
      currentBid: 285000,
      timeLeft: "1d 8h",
      location: "Detroit, MI",
      image: "/placeholder.svg?height=200&width=300",
      condition: "Restored"
    },
  ]

  const activeRaffles = [
    {
      id: 1,
      title: "2024 Tesla Model S Plaid",
      make: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      ticketPrice: 50,
      totalTickets: 2000,
      soldTickets: 1650,
      drawDate: "Dec 25, 2024",
      image: "/placeholder.svg?height=200&width=300",
      estimatedValue: 120000
    },
    {
      id: 2,
      title: "2023 BMW M4 Competition",
      make: "BMW",
      model: "M4 Competition",
      year: 2023,
      ticketPrice: 25,
      totalTickets: 1500,
      soldTickets: 980,
      drawDate: "Dec 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
      estimatedValue: 78000
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Image
                src="/images/raffauction-new-logo.png"
                alt="RaffAuction Logo"
                width={50}
                height={50}
                className=""
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">RaffAuction</h1>
                <p className="text-xs sm:text-sm text-gray-600">Welcome back, {user.username}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="rounded-2xl border-gray-200 hover:bg-gray-50 bg-transparent text-sm sm:text-base px-3 sm:px-4"
            >
              <LogOut className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Logout</span>
              <span className="sm:hidden">Exit</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Stats Cards with car-focused metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Active Bids</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <Car className="h-8 w-8 text-red-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Raffle Entries</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Ticket className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Cars Won</p>
                  <p className="text-3xl font-bold">2</p>
                </div>
                <Award className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Total Invested</p>
                  <p className="text-3xl font-bold">$45K</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions with car-specific options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Link href="/create-auction">
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">List Your Car</h3>
                <p className="text-gray-600">Auction your vehicle to the highest bidder</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/create-raffle">
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Ticket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Create Car Raffle</h3>
                <p className="text-gray-600">Set up exciting automotive giveaways</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Active Car Auctions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Live Car Auctions</h2>
            <Link href="/auctions">
              <Button variant="outline" className="rounded-2xl bg-transparent">
                View All Cars
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAuctions.map((auction) => (
              <Card
                key={auction.id}
                className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-2xl">
                    <Clock className="h-3 w-3 mr-1" />
                    {auction.timeLeft}
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white rounded-2xl">
                    {auction.condition}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="rounded-full text-xs">
                      {auction.year}
                    </Badge>
                    <span className="text-sm text-gray-600">{auction.mileage}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{auction.make} {auction.model}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{auction.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Bid</p>
                      <p className="text-xl font-bold text-green-600">${auction.currentBid.toLocaleString()}</p>
                    </div>
                    <Button className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Car Raffles */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Car Raffles</h2>
            <Link href="/raffles">
              <Button variant="outline" className="rounded-2xl bg-transparent">
                View All Raffles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeRaffles.map((raffle) => (
              <Card
                key={raffle.id}
                className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={raffle.image || "/placeholder.svg"}
                    alt={raffle.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 rounded-2xl">
                    {Math.round((raffle.soldTickets / raffle.totalTickets) * 100)}% Sold
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white rounded-2xl">
                    {raffle.year}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{raffle.make} {raffle.model}</h3>
                  <p className="text-sm text-gray-600 mb-3">Est. Value: ${raffle.estimatedValue.toLocaleString()}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ticket Price</span>
                      <span className="font-semibold">${raffle.ticketPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Draw Date</span>
                      <span className="font-semibold">{raffle.drawDate}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        style={{ width: `${(raffle.soldTickets / raffle.totalTickets) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{raffle.soldTickets} tickets sold</span>
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
        </div>
      </main>
    </div>
  )
}