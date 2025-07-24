import { Button } from "@/components/ui/button"
import { ArrowRight, Gavel, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-saleswoman-car-showroom.jpg-bC4bKxPpiO4Y0kSMvWshe9d5CXKG8x.jpeg"
          alt="Professional car saleswoman in showroom"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/60 to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/images/raffauction-new-logo.png" alt="RaffAuction Logo" width={50} height={50} className="" />
            <span className="text-white text-xl sm:text-2xl font-bold">RaffAuction</span>
          </div>
          <Link href="/auth">
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl backdrop-blur-sm px-6 py-3 text-lg font-semibold animate-bounce-y">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Win Big with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                RaffAuction
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              The revolutionary platform that merges the excitement of raffles with the competitive nature of auctions.
              Your chance to win amazing prizes through strategy or luck.
            </p>

            {/* Feature Cards with better mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <Gavel className="h-8 w-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold text-lg mb-2">Smart Auctions</h3>
                <p className="text-white/70 text-sm">
                  Bid strategically on exclusive items with location-based advantages
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <Ticket className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold text-lg mb-2">Lucky Raffles</h3>
                <p className="text-white/70 text-sm">Enter exciting raffles for a chance to win incredible prizes</p>
              </div>
            </div>

            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-12 py-6 text-xl font-bold shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
