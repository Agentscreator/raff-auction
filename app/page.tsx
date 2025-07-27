import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Trophy, Shield, Users, Zap, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Images - Different for Desktop and Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <div className="hidden md:block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-saleswoman-car-showroom.jpg-bC4bKxPpiO4Y0kSMvWshe9d5CXKG8x.jpeg"
            alt="Professional car saleswoman in showroom"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        {/* Mobile Background - Car focused */}
        <div className="block md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Modern car dashboard and interior"
            fill
            className="object-cover object-right opacity-60"
            priority
          />
        </div>
        
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
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl backdrop-blur-sm px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 py-8 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Win Cars with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                RaffAuction
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              The revolutionary platform that merges the excitement of raffles with the competitive nature of auctions.
              Your chance to win quality vehicles through strategy or luck.
            </p>

            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-bold shadow-2xl w-full sm:w-auto"
              >
                Find Your Car
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 text-center">
              <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Quality Vehicles</h3>
              <p className="text-white/70 text-sm sm:text-base">
                Win reliable cars from everyday brands - Honda, Toyota, Ford, Nissan, and other dependable vehicles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 text-center">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Fair & Transparent</h3>
              <p className="text-white/70 text-sm sm:text-base">
                Every auction and raffle is completely transparent with verified results. Fair chance for everyone to win.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 text-center sm:col-span-2 md:col-span-1">
              <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Affordable Entry</h3>
              <p className="text-white/70 text-sm sm:text-base">
                Low-cost entries make it accessible for everyone. Win a car without breaking the bank to participate.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
              How RaffAuction Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-lg sm:text-xl">1</span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Browse Available Cars</h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Explore quality vehicles from people looking to sell. Find sedans, SUVs, trucks, and more everyday cars.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-lg sm:text-xl">2</span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Bid or Enter Raffle</h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Use strategy in auctions or try your luck in raffles. Affordable entries give everyone a fair chance.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-lg sm:text-xl">3</span>
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Win Your Car</h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Get instant notifications when you win and coordinate with the seller for a smooth transfer process.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/20">
            <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-red-400 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Win Your Next Car?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of people who have found their perfect vehicle through RaffAuction. 
              Your next car could be just one entry away!
            </p>
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-12 py-6 sm:px-16 sm:py-8 text-xl sm:text-2xl font-bold shadow-2xl w-full sm:w-auto"
              >
                Start Winning Today
                <ArrowRight className="ml-3 sm:ml-4 h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}