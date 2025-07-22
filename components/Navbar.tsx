"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, ArrowRight, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Products", href: "/#products" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Our Team", href: "/#team" },
        { name: "Our Branches", href: "/#branches" },
        { name: "Get to know us", href: "/about" }, // Updated link
        { name: "Mission and Vision", href: "/about#mission" }, // Updated link
        { name: "Contact", href: "/contact" }, // Updated link
    ]

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? `${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl shadow-2xl border-b ${isDarkMode ? "border-gray-800" : "border-white/20"}`
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 relative z-10">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12  rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Image src="/img/gnLogo2.png" alt="Logo" width={48} height={48} />
                            </div>
                            <div>
                                <h1
                                    className={`text-sm lg:text-lg font-bold ${isDarkMode ? "text-white" : "text-blue-900"} transition-colors`}
                                >
                                    Good News
                                </h1>
                                <p className={`text-xs ${isDarkMode ? "text-blue-400" : "text-blue-600"} -mt-1 transition-colors`}>
                                    Co-op Credit Union
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} font-medium transition-all duration-300 text-sm relative group px-2 py-1`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        <button
                            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                            className={`p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"} hover:scale-110 transition-all duration-300`}
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25">
                            Join Today
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`lg:hidden p-3 rounded-xl ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"} transition-all duration-300`}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className={`lg:hidden absolute top-full left-0 w-full ${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-xl shadow-2xl border-t ${isDarkMode ? "border-gray-800" : "border-white/20"} animate-in slide-in-from-top-2 duration-300`}
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"} font-medium py-3 transition-all duration-300 border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"} last:border-b-0`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-4">
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className={`p-3 rounded-full ${isDarkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"} transition-all duration-300`}
                                >
                                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white flex-1 ml-4">
                                    Join Today
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
