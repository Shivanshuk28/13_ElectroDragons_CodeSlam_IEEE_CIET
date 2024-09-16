import React from 'react'
import { Apple, PlayCircle } from 'lucide-react'

export default function MobileAppPromotion() {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-16 px-4" style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="/placeholder.svg?height=600&width=300"
                        alt="Food Restaurant Mobile App"
                        className="w-64 mx-auto md:w-80"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left text-white">
                    <h3 className="text-2xl font-script mb-2">Happy to Announce</h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">MOBILE APP</h2>
                    <p className="text-xl mb-8">IS AVAILABLE IN EVERY OS PLATFORM</p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                            <PlayCircle className="w-6 h-6 mr-2" />
                            <span>
                                <span className="block text-xs">GET IT ON</span>
                                <span className="block text-sm font-semibold">Google Play</span>
                            </span>
                        </button>
                        <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                            <Apple className="w-6 h-6 mr-2" />
                            <span>
                                <span className="block text-xs">Download on the</span>
                                <span className="block text-sm font-semibold">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}