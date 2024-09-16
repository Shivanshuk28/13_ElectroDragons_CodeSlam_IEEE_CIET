import React from 'react'
// import { Facebook, Twitter, Linkedin, Pinterest, WhatsApp, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Location */}
                    <div>
                        <h3 className="text-2xl font-script mb-4">Take it easy with location</h3>
                        <p className="mb-4">
                            112 Ipsum aecenas ullamcor per felis,
                            <br />
                            Fec at porttitor euismod enim,
                            <br />
                            Etortor suscipit
                        </p>
                        <p className="mb-2">Phone: 00 000 000</p>
                        <p className="mb-4">Email: support@restaurant.com</p>
                        {/* <div className="flex space-x-4">
              <Facebook className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Pinterest className="w-5 h-5" />
              <WhatsApp className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
            </div> */}
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h3 className="text-2xl font-script mb-4">Working Hours</h3>
                        <p className="mb-2">Monday To Friday</p>
                        <p className="mb-4">
                            9:00am to 10:00pm(Breakfast)
                            <br />
                            11:00am to 10:00pm(Lunch/Dinner)
                        </p>
                        <p className="mb-2">Saturday & Sunday</p>
                        <p>
                            10:00am to 11:00pm(Brunch)
                            <br />
                            11:00am to 12:00pm(Lunch/Dinner)
                        </p>
                    </div>

                    {/* Feedback Form */}
                    <div>
                        <h3 className="text-2xl font-script mb-4">Feedback form</h3>
                        <form>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 mb-4 bg-gray-800 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-2 mb-4 bg-gray-800 rounded"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full p-2 mb-4 bg-gray-800 rounded"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full p-2 mb-4 bg-gray-800 rounded"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center">
                    <p>&copy; 2024 FSDFreebies.com</p>
                </div>
            </div>
        </footer>
    )
}