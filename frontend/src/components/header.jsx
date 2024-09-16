import image from "/src/assets/Layer 95.png"
export default function Header() {
    return (
        <div className="z-10">
            <header className=" text-black flex">
                <div className="absolute rotate-45 -translate-y-36 bg-[#e7a331] p-32 max-w-24 max-h-24">
                    <img className="-rotate-45 max-w-24 max-h-24" src={image} alt="" />
                </div>
                <div className="bg-white container mx-auto px-4 py-2 flex flex-row-reverse justify-between items-center">
                    <div className="flex items-center space-x-4">
                        {/* <Clock className="h-4 w-4" /> */}
                        <span>Order Foods 24/7</span>
                        {/* <Phone className="h-4 w-4" /> */}
                        <span>061 9876 5432</span>
                    </div>
                    <div className="flex space-x-4">
                        {/* <Facebook className="h-4 w-4" />
                        <Twitter className="h-4 w-4" />
                        <Pinterest className="h-4 w-4" />
                        <Instagram className="h-4 w-4" />
                        <Youtube className="h-4 w-4" /> */}
                    </div>
                </div>
            </header>
            <nav className="bg-black bg-opacity-85 text-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-end items-center">

                    <ul className="flex justify-end space-x-6">
                        <li><a href="#" className="hover:text-[#e7a331]">Home</a></li>
                        <li><a href="#" className="hover:text-[#e7a331]">Menu</a></li>
                        <li><a href="#" className="hover:text-[#e7a331]">Pages</a></li>
                        <li><a href="#" className="hover:text-[#e7a331]">Delivery</a></li>
                        <li><a href="#" className="hover:text-[#e7a331]">News</a></li>
                        <li><a href="#" className="hover:text-[#e7a331]">Features</a></li>
                        <li><a href="#" className="bg-[#e7a331] text-white px-4 py-2 rounded">Table Booking</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}