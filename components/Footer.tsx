"use client"
import { Shield, Globe, Smartphone, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Footer() {
    const { theme } = useTheme()
    const isDarkMode = theme === "dark"

    const navItems = [
        { name: "Products", href: "/#products" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Our Team", href: "/#team" },
        { name: "Our Branches", href: "/#branches" },
        { name: "Get to know us", href: "/about" },
        { name: "Mission and Vision", href: "/about#mission" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <footer className={`${isDarkMode ? "bg-gray-900" : "bg-gray-900"} text-white py-20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                                <Image src="/img/gnLogo2.png" alt="Logo" width={48} height={48} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Good News</h3>
                                <p className="text-sm text-gray-400">Co-op Credit Union</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted financial partner since 1985. Member-owned, community-focused, and technology-driven for the
                            modern world.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Globe className="w-5 h-5" />, label: "Website" },
                                { icon: <Smartphone className="w-5 h-5" />, label: "Mobile App" },
                                { icon: <Mail className="w-5 h-5" />, label: "Email" },
                            ].map((social, index) => (
                                <button
                                    key={index}
                                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navItems.slice(0, 4).map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-white transition-colors cursor-pointer">Personal Banking</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Business Banking</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Loans & Credit</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Investment Services</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Mobile Banking</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Financial Planning</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-400">(555) 123-GOOD</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-400">info@goodnewscu.org</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <div className="text-gray-400">
                                    <p>123 Main Street</p>
                                    <p>Downtown, ST 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Good News Co-op Credit Union. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            NCUA Insured
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                            Equal Housing Lender
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
