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
              Save Your Car &
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Your Credit
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Facing repossession or stuck in a car loan? RaffAuction gives you a chance to pay off your vehicle 
              without using your own money. Protect your credit and keep your transportation.
            </p>

            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-12 py-6 text-xl font-bold shadow-2xl"
              >
                Get Financial Relief
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Protect Your Credit</h3>
              <p className="text-white/70">
                Avoid repossession and the devastating impact on your credit score. Keep your financial future intact.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Keep Your Car</h3>
              <p className="text-white/70">
                Get a chance to pay off your loan or lease without using your own money. Keep your transportation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Fast Relief</h3>
              <p className="text-white/70">
                Quick entry process with immediate results. Get the financial help you need when you need it most.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5K+</div>
                <div className="text-white/70">Cars Saved</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">$25M+</div>
                <div className="text-white/70">Debt Relieved</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70">Credit Protected</div>
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
              How RaffAuction Saves Your Car
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Submit Your Situation</h3>
                <p className="text-white/70">
                  Tell us about your car loan, lease, or repossession situation. We'll calculate what you need to save your vehicle.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Enter to Win</h3>
                <p className="text-white/70">
                  Join our auction or raffle system designed to help people in your exact situation pay off their car debt.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Keep Your Car</h3>
                <p className="text-white/70">
                  If you win, we pay off your loan directly to the lender. Your car stays yours and your credit is protected.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don't Let Them Take Your Car
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Thousands of people have saved their vehicles and protected their credit through RaffAuction. 
              Your financial relief could be just one entry away!
            </p>
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl px-16 py-8 text-2xl font-bold shadow-2xl"
              >
                Save My Car Now
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}