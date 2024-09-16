import image from "/src/assets/Layer 69.png"
// import { Phone, Clock, Facebook, Twitter, Pinterest, Instagram, Youtube } from 'lucide-react'

import Header from "./header";

export default function Hero() {
    return (
        <div className="h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="absolute inset-0 z-0 h-screen">
                <img
                    src={image}
                    alt="Hero"
                    className="object-cover max-h-screen w-full h-full"
                />
            </div>




            <div className="flex flex-col align-middle justify-center container mx-auto px-4 py-32 text-center text-white z-10">
                <h1 className="text-6xl font-bold mb-4 pacifico-regular drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Foody Love</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                </p>
                <button className="mx-auto w-fit bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-500 transition duration-300">
                    Click here
                </button>
            </div>
        </div>
    )
}
