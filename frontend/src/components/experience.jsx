export default function DelightfulExperience() {
    const images = [
        { src: "/src/assets/Layer 74.png", alt: "Bowl with egg and vegetables", overlay: { title: "Bowl with egg and vegetables", price: "$12" } },
        { src: "/src/assets/Layer 75.png", alt: "Colorful salad on a plate", overlay: { title: "Colorful salad on a plate", price: "$12" } },
        { src: "/src/assets/Layer 77.png", alt: "Italian source mushroom", overlay: { title: "ITALIAN SOURCE MUSHROOM", price: "$12" } },
        { src: "/src/assets/Layer 80.png", alt: "Spring rolls", overlay: { title: "Spring rolls", price: "$12" } },
        { src: "/src/assets/Layer 84.png", alt: "Sandwich with avocado", overlay: { title: "Sandwich with avocado", price: "$12" } },
        { src: "/src/assets/Layer 85.png", alt: "Curry dish", overlay: { title: "Curry dish", price: "$12" } },
        { src: "/src/assets/Layer 86.png", alt: "Various sauces", overlay: { title: "Various sauces", price: "$12" } },
        { src: "/src/assets/Layer 87.png", alt: "Tacos on a plate", overlay: { title: "Tacos on a plate", price: "$12" } },
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-center mb-12">
                <span className="block text-3xl font-script pacifico-regular">Delightful</span>
                <span className="block text-5xl font-bold font-serif">EXPERIENCE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
                {images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden group">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {image.overlay && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold text-center mb-2">{image.overlay.title}</h3>
                                <p className="text-white text-2xl font-bold mb-4">{image.overlay.price}</p>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                                    Click here
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}