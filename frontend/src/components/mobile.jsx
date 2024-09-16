import React from 'react'
import { Apple, PlayCircle } from 'lucide-react'
import image from "/src/assets/Layer 93.png"
import image1 from "/src/assets/Layer 94.png"

export default function MobileAppPromotion() {
    return (
        <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-16 px-4" style={{ backgroundImage: "url('/src/assets/Layer 92.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="src/assets/Rectangle 1.png"
                        alt="Food Restaurant Mobile App"
                        className="w-64 mx-auto md:w-80"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left text-white">
                    <h3 className="text-2xl font-script mb-2 pacifico-regular">Happy to Announce</h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">MOBILE APP</h2>
                    <p className="text-xl mb-8 font-serif">IS AVAILABLE IN EVERY OS PLATFORM</p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                            <img src={image} alt="" />
                        </button>
                        <button className="flex items-center justify-center text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                        <img src={image1} alt="" />

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}