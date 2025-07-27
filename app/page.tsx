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
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury sports car front view"
            fill
            className="object-cover object-center opacity-50"
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
      <main className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Win Cars with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                RaffAuction
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              The revolutionary platform that merges the excitement of raffles with the competitive nature of auctions.
              Your chance to win quality vehicles through strategy or luck.
            </p>

            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-12 py-6 text-xl font-bold shadow-2xl"
              >
                Find Your Car
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Quality Vehicles</h3>
              <p className="text-white/70">
                Win reliable cars from everyday brands - Honda, Toyota, Ford, Nissan, and other dependable vehicles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Fair & Transparent</h3>
              <p className="text-white/70">
                Every auction and raffle is completely transparent with verified results. Fair chance for everyone to win.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Affordable Entry</h3>
              <p className="text-white/70">
                Low-cost entries make it accessible for everyone. Win a car without breaking the bank to participate.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3K+</div>
                <div className="text-white/70">Cars Won</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$15M+</div>
                <div className="text-white/70">Car Value Won</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70">Active Listings</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70">Live Support</div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              How RaffAuction Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Browse Available Cars</h3>
                <p className="text-white/70">
                  Explore quality vehicles from people looking to sell. Find sedans, SUVs, trucks, and more everyday cars.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Bid or Enter Raffle</h3>
                <p className="text-white/70">
                  Use strategy in auctions or try your luck in raffles. Affordable entries give everyone a fair chance.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Win Your Car</h3>
                <p className="text-white/70">
                  Get instant notifications when you win and coordinate with the seller for a smooth transfer process.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <Heart className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Win Your Next Car?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have found their perfect vehicle through RaffAuction. 
              Your next car could be just one entry away!
            </p>
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-16 py-8 text-2xl font-bold shadow-2xl"
              >
                Start Winning Today
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}