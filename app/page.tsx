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
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury car in showroom"
            fill
            className="object-cover opacity-40"
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

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Premium Prizes</h3>
              <p className="text-white/70">
                Win luxury cars, electronics, vacations, and more from our curated collection of amazing prizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Fair & Secure</h3>
              <p className="text-white/70">
                Transparent algorithms and blockchain verification ensure every auction and raffle is completely fair.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Instant Results</h3>
              <p className="text-white/70">
                Real-time bidding, instant raffle draws, and immediate prize notifications keep the excitement alive.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/70">Happy Winners</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$2M+</div>
                <div className="text-white/70">Prizes Won</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/70">Active Auctions</div>
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
                <h3 className="text-white font-bold text-xl mb-3">Choose Your Prize</h3>
                <p className="text-white/70">
                  Browse our extensive catalog of premium prizes from luxury cars to dream vacations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Bid or Enter</h3>
                <p className="text-white/70">
                  Use strategy in auctions or try your luck in raffles. Multiple ways to win amazing prizes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Win & Celebrate</h3>
                <p className="text-white/70">
                  Get instant notifications when you win and enjoy fast, secure prize delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              What Our Winners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">
                  "I won a brand new Tesla Model S through RaffAuction! The whole process was transparent and exciting. 
                  Can't believe I actually won!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Jessica S.</div>
                    <div className="text-white/60 text-sm">Tesla Winner</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4">
                  "The auction system is brilliant! I used strategy to win a luxury watch at a fraction of retail price. 
                  RaffAuction is addictive in the best way!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mike R.</div>
                    <div className="text-white/60 text-sm">Watch Collector</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <Heart className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Win Your Dream Prize?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of winners who have already discovered the thrill of RaffAuction. 
              Your next big win could be just one click away!
            </p>
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-16 py-8 text-2xl font-bold shadow-2xl"
              >
                Join RaffAuction Now
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}