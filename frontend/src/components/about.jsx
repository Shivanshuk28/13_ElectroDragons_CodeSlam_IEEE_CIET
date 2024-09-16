import React from 'react';
import Image1 from '/src/assets/Layer 71 copy.png';
import Image2 from '/src/assets/Layer 71 copy.png';

export default function AboutUs() {
    return (
        <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative mb-8 md:mb-0">
                    <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 transform -rotate-6 shadow-xl">
                        <img
                            src={Image1}
                            alt="Restaurant interior view 1"
                            className="w-full h-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="w-64 h-64 md:w-80 md:h-80 absolute top-8 left-8 z-0 transform rotate-6 shadow-xl">
                        <img
                            src={Image2}
                            alt="Restaurant interior view 2"
                            className="w-full h-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-3xl font-script pacifico-regular text-[#e7a331]">About us</h3>
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our chefs use only the freshest ingredients to create delicious and innovative dishes that will tantalize your taste buds.
                    </p>
                    <p className="text-lg text-gray-700">
                        Whether you're here for a casual meal with friends or a special occasion, we strive to make every visit memorable. Thank you for choosing us, and we look forward to serving you!
                    </p>
                </div>
            </div>
        </div>
    );
}