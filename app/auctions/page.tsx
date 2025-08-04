"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, MapPin, Clock, Car, Fuel, Gauge } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CarAuctionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [makeFilter, setMakeFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("ending-soon")
  const [auctions, setAuctions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    
    if (status === "unauthenticated") {
      router.push("/auth")
      return
    }

    if (status === "authenticated") {
      fetchAuctions()
    }
  }, [status, router])

  const fetchAuctions = async () => {
    try {
      const params = new URLSearchParams()
      if (makeFilter !== 'all') params.append('make', makeFilter)
      if (searchTerm) params.append('search', searchTerm)
      
      const response = await fetch(`/api/auctions?${params}`)
      if (response.ok) {
        const data = await response.json()
        setAuctions(data)
      }
    } catch (error) {
      console.error('Error fetching auctions:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (status === "authenticated") {
      fetchAuctions()
    }
  }, [makeFilter, searchTerm])

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading auctions...</div>
      </div>
    )
  }


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
                  <SelectItem value="highest-bid">Most Entries</SelectItem>
                  <SelectItem value="most-bids">Most Popular</SelectItem>
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
            Showing {auctions.length} vehicles
          </p>
        </div>

        {/* Car Auctions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {auctions.map((auction) => (
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
                    <span>{auction.engine || 'Engine info not available'}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Gauge className="h-3 w-3 mr-1" />
                    <span>{auction.transmission || 'Transmission info not available'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Entry Price</p>
                      <p className="text-xl font-bold text-green-600">
                        ${parseFloat(auction.currentBid || 0).toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Entries</p>
                      <p className="text-lg font-semibold">{auction.bids || 0}</p>
                    </div>
                  </div>

                  <Button className="w-full rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                    Enter Raffle
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {auctions.length === 0 && !loading && (
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