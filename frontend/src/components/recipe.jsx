import image from "/src/assets/Layer 78.png"
import image2 from "/src/assets/Layer 83.png"
export default function Recipes() {
    return (
        <div className="relative min-h-screen bg-cover bg-center py-16" style={{ backgroundImage: `url(${image})` }}>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row align-middle justify-center">
                        <div className="bg-white p-8 shadow-lg md:w-1/2 pr-8 z-20">
                            <h3 className="text-2xl font-script mb-2 pacifico-regular" style={{ color: '#e7a331' }}>
                                Special Recipes
                            </h3>
                            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                TASTE OF PRECIOUS
                            </h2>
                            <p className="mb-4 text-gray-600">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan
                                dard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic type setting,standard dummy text ever since the 1500s,when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting
                            </p>
                            <button className="bg-[#e7a331] text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
                                Click here
                            </button>
                        </div>
                        <div className="md:w-1/2 flex align-middle justify-center space-x-4 z-10">
                            <div >
                                <img
                                    src={image2}
                                    alt="Shrimp and rice dish"
                                    className="shadow-md -translate-x-7 translate-y-4"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}