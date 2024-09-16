
export default function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative mb-8 md:mb-0">
                    <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 transform -rotate-6 shadow-xl">
                        <img
                            src="/src/assets/Layer 71 copy.png"
                            alt="Restaurant interior view 1"
                            className="w-full h-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="w-64 h-64 md:w-80 md:h-80 absolute top-8 left-8 z-0 transform rotate-6 shadow-xl">
                        <img
                            src="/src/assets/Layer 71 copy.png"
                            alt="Restaurant interior view 2"
                            className="w-full h-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-3xl font-script text-orange-500 mb-2">About us</h3>
                    <h2 className="text-4xl font-bold mb-4">WE ARE TASTY</h2>
                    <p className="mb-6 text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan
                        dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typeset-
                        ting,standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
                        Click here
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48">
                <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Fresh vegetables and chili peppers"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}