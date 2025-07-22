"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Menu,
    X,
    Shield,
    TrendingUp,
    Users,
    MapPin,
    Phone,
    Mail,
    Clock,
    CreditCard,
    Home,
    Car,
    PiggyBank,
    Calculator,
    Award,
    Heart,
    Target,
    Eye,
    ChevronRight,
    Star,
    Play,
    ArrowRight,
    Zap,
    Globe,
    Smartphone,
    Lock,
    ChevronLeft,
    Calendar,
    Building,
    Handshake,
    Sun,
    Moon,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    GraduationCap,
    Briefcase,
    BanknoteArrowDown,
    CloudRainWind,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreditUnionWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const navItems = [
        { name: "Products", href: "#products" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Our Team", href: "#team" },
        { name: "Our Branches", href: "#branches" },
        { name: "Get to know us", href: "#about" },
        { name: "Mission and Vision", href: "#mission" },
        { name: "Contact", href: "#contact" },
    ]

    const galleryItems = [
        {
            category: "Community Events",
            title: "Annual Financial Literacy Workshop",
            description: "Empowering our community with financial education and planning workshops.",
            image: "/placeholder.svg?height=400&width=600",
            date: "March 2024",
            stats: "500+ Attendees",
        },
        {
            category: "Branch Openings",
            title: "New Westside Branch Grand Opening",
            description: "Celebrating the opening of our state-of-the-art Westside location.",
            image: "/placeholder.svg?height=400&width=600",
            date: "January 2024",
            stats: "15th Location",
        },
        {
            category: "Awards & Recognition",
            title: "Best Credit Union 2024",
            description: "Recognized as the region's top credit union for member satisfaction.",
            image: "/placeholder.svg?height=400&width=600",
            date: "February 2024",
            stats: "4.9/5 Rating",
        },
        {
            category: "Community Support",
            title: "Local Business Partnership Program",
            description: "Supporting local entrepreneurs with specialized business banking solutions.",
            image: "/placeholder.svg?height=400&width=600",
            date: "December 2023",
            stats: "200+ Businesses",
        },
        {
            category: "Technology",
            title: "Mobile Banking App Launch",
            description: "Introducing our next-generation mobile banking platform with AI features.",
            image: "/placeholder.svg?height=400&width=600",
            date: "November 2023",
            stats: "50K+ Downloads",
        },
        {
            category: "Sustainability",
            title: "Green Banking Initiative",
            description: "Leading the way in sustainable banking practices and eco-friendly operations.",
            image: "/placeholder.svg?height=400&width=600",
            date: "October 2023",
            stats: "Carbon Neutral",
        },
    ]

    const teamMembers = [
        {
            name: "Rev. Regina Turkson",
            position: "General Manager",
            department: "Executive Management",
            image: "/img/team/gm.jpg",
            experience: "15+ Years",
            education: "MBA, Harvard Business School",
            specialties: ["Leadership", "Strategic Planning", "Community Engagement"],
            bio: "Rev. Regina Turkson has been leading Good News Co-op Credit Union with vision and integrity, focusing on member-centric innovation and community growth.",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
            gradient: "from-blue-500 to-cyan-600",
        },
        {
            name: "Miss Stella Amoquadoh",
            position: "Head of Operations",
            department: "Operations",
            image: "/img/team/ho new.jpg",
            experience: "12+ Years",
            education: "CPA, MS Accounting",
            specialties: ["Risk Management", "Financial Analysis", "Regulatory Compliance"],
            bio: "Miss Stella Amoquadoh ensures our financial stability and growth while maintaining the highest standards of fiscal responsibility and transparency.",
            social: {
                linkedin: "#",
                twitter: "#",
                facebook: "#",
            },
            gradient: "from-purple-500 to-pink-600",
        },
        {
            name: "Mr. Joseph Paapa Koomson-Biney",
            position: "Head of Supervisory Committee",
            department: "Supervisory Committee",
            image: "/img/team/hoo.jpg",
            experience: "10+ Years",
            education: "MS Computer Science, Stanford",
            specialties: ["Digital Transformation", "Cybersecurity", "Data Analytics"],
            bio: "Mr. Joseph Paapa Koomson-Biney drives our digital transformation, ensuring we stay at the forefront of banking technology while maintaining security.",
            social: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
            },
            gradient: "from-green-500 to-emerald-600",
        },
        {
            name: "Bennet Quayson",
            position: "Head of Management Team",
            department: "Management Team",
            image: "/img/team/abeiku.jpg",
            experience: "14+ Years",
            education: "BSc Finance, University of Ghana",
            specialties: ["Loan Origination", "Risk Assessment", "Financial Planning"],
            bio: "Bennet leads our management team with expertise in helping members achieve their dreams through responsible lending practices.",
            social: {
                linkedin: "#",
                facebook: "#",
            },
            gradient: "from-orange-500 to-red-600",
        },
        // {
        //   name: "Lisa Park",
        //   position: "VP of Member Services",
        //   department: "Member Experience",
        //   image: "/placeholder.svg?height=400&width=400",
        //   experience: "11+ Years",
        //   education: "BA Business Administration",
        //   specialties: ["Customer Experience", "Service Excellence", "Member Relations"],
        //   bio: "Lisa ensures every member receives exceptional service and support throughout their financial journey with us.",
        //   social: {
        //     linkedin: "#",
        //     twitter: "#",
        //     instagram: "#",
        //     facebook: "#",
        //   },
        //   gradient: "from-teal-500 to-blue-600",
        // },
        // {
        //   name: "Robert Kim",
        //   position: "Chief Marketing Officer",
        //   department: "Marketing & Communications",
        //   image: "/placeholder.svg?height=400&width=400",
        //   experience: "9+ Years",
        //   education: "MBA Marketing, Northwestern Kellogg",
        //   specialties: ["Brand Strategy", "Digital Marketing", "Community Outreach"],
        //   bio: "Robert crafts our brand story and ensures our message of financial empowerment reaches every corner of our community.",
        //   social: {
        //     linkedin: "#",
        //     twitter: "#",
        //     instagram: "#",
        //   },
        //   gradient: "from-indigo-500 to-purple-600",
        // },
    ]

    const advisoryBoard = [
        {
            name: "Dr. Patricia Williams",
            position: "Board Chairperson",
            expertise: "Healthcare Finance",
            experience: "20+ Years",
        },
        {
            name: "James Anderson",
            position: "Vice Chair",
            expertise: "Real Estate Development",
            experience: "18+ Years",
        },
        {
            name: "Maria Gonzalez",
            position: "Board Secretary",
            expertise: "Legal & Compliance",
            experience: "16+ Years",
        },
        {
            name: "Thomas Lee",
            position: "Board Treasurer",
            expertise: "Investment Management",
            experience: "22+ Years",
        },
    ]

    const nextGalleryItem = () => {
        setCurrentGalleryIndex((prev) => (prev + 1) % galleryItems.length)
    }

    const prevGalleryItem = () => {
        setCurrentGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    }

    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "linkedin":
                return <Linkedin className="w-5 h-5" />
            case "twitter":
                return <Twitter className="w-5 h-5" />
            case "instagram":
                return <Instagram className="w-5 h-5" />
            case "facebook":
                return <Facebook className="w-5 h-5" />
            default:
                return null
        }
    }

    const getSocialColor = (platform: string) => {
        switch (platform) {
            case "linkedin":
                return "hover:bg-blue-600"
            case "twitter":
                return "hover:bg-sky-500"
            case "instagram":
                return "hover:bg-pink-600"
            case "facebook":
                return "hover:bg-blue-700"
            default:
                return "hover:bg-gray-600"
        }
    }

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-slate-50 to-blue-50"}`}
        >
            {/* Floating Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>


            {/* Hero Section */}
            <section ref={heroRef} className="pt-20 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-800/20"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 lg:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-in slide-in-from-left duration-1000">
                            <div className="space-y-6">
                                <Badge
                                    className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                                >
                                    <Award className="w-4 h-4 mr-2" />
                                    Trusted Since 1985
                                </Badge>

                                <h1
                                    className={`text-5xl lg:text-7xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} leading-tight`}
                                >
                                    Your Financial
                                    <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent block">
                                        Success Story
                                    </span>
                                    Starts Here
                                </h1>

                                <p
                                    className={`text-xl lg:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed max-w-2xl`}
                                >
                                    Experience next-generation banking that puts you first. Join thousands of members who trust Good News
                                    Co-op Credit Union for their financial journey.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25 group"
                                >
                                    Become a Member
                                    <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className={`${isDarkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400/10" : "border-blue-600 text-blue-600 hover:bg-blue-50"} px-10 py-6 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm group`}
                                >
                                    <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Watch Demo
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-12">
                                {[
                                    { value: "25K+", label: "Happy Members", icon: <Users className="w-6 h-6" /> },
                                    { value: "$2.5B", label: "Assets Managed", icon: <TrendingUp className="w-6 h-6" /> },
                                    { value: "15", label: "Branch Locations", icon: <MapPin className="w-6 h-6" /> },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`text-center p-6 rounded-2xl ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-white/20"} hover:scale-105 transition-all duration-300`}
                                    >
                                        <div className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-2 flex justify-center`}>
                                            {stat.icon}
                                        </div>
                                        <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-1`}>
                                            {stat.value}
                                        </div>
                                        <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
                            <div className="relative top-[-10rem] hidden md:block ">
                                {/* Floating Cards */}
                                <div className="absolute inset-0 space-y-4">
                                    <div
                                        className={`absolute top-0 right-0 w-72 h-40 ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-all duration-500 border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                                Mobile Banking
                                            </h3>
                                            <Smartphone className={`w-6 h-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                                        </div>
                                        <div className="flex space-x-1 mb-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>50K+ downloads</p>
                                    </div>

                                    <div
                                        className={`absolute top-20 left-0 w-80 h-48 ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
                                    >
                                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 text-white mb-4">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-blue-100 text-sm">Checking Account</p>
                                                    <p className="text-2xl font-bold">$12,847.32</p>
                                                </div>
                                                <CreditCard className="w-8 h-8 text-blue-200" />
                                            </div>
                                        </div>
                                        <div className={`${isDarkMode ? "bg-gray-700/50" : "bg-gray-50"} rounded-2xl p-4`}>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>Savings Account</p>
                                                    <p className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                                        $45,230.18
                                                    </p>
                                                </div>
                                                <PiggyBank className={`w-8 h-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`absolute bottom-0 right-8 w-64 h-32 ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform rotate-12 hover:rotate-6 transition-all duration-500 border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                                    AI Assistant
                                                </h3>
                                                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>24/7 Support</p>
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"} relative`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Our Products
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Financial Solutions for
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block">
                                Every Need
                            </span>
                        </h2>
                        <p
                            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
                        >
                            Discover a range of financial products tailored to meet your unique needs and goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Home className="w-8 h-8" />,
                                title: "Members Deposit",
                                description: "This is an investment package from the union which can be done for 3 months, 6 months or 12 months.",
                                features: ["Instant pre-approval", "Rate protection"],
                                gradient: "from-green-500 to-emerald-600",
                            },
                            {
                                icon: <BanknoteArrowDown className="w-8 h-8" />,
                                title: "Grassroot Susu",
                                description: "With an initial amount as low as GHc 5.00, you can open a Grassroot Susu account and can also contribute daily through a sales executive who comes around daily for your contributions or monies.",
                                features: ["Same-day approval"],
                                gradient: "from-blue-500 to-cyan-600",
                            },
                            {
                                icon: <PiggyBank className="w-8 h-8" />,
                                title: "Savings",
                                description: "This savings package does not attract any deductions when withdrawing and can be used to save up for your investments.",
                                features: ["4.5% APY", "No monthly fees", "Mobile banking"],
                                gradient: "from-purple-500 to-pink-600",
                            },
                            {
                                icon: <CloudRainWind className="w-8 h-8" />,
                                title: "Me Nhyira Nti",
                                description: "This product was also designed for religious thanksgiving. As religious as we are, we always find it difficult to contribute towards our annual thanksgiving because of lack of savings towards the event. But this product is here to help the customers to contribute towards the annual thanksgiving.",
                                features: ["cashback", "No annual fee"],
                                gradient: "from-orange-500 to-red-600",
                            },
                            {
                                icon: <Calculator className="w-8 h-8" />,
                                title: "Traditional Susu",
                                description: "Traditional Susu product is designed to match up with the local way of olden susu collections where after a month, you redeem your savings and start again from the following month",
                                features: ["No interest", "Flexible contributions"],
                                gradient: "from-teal-500 to-blue-600",
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Me Mma Nti",
                                description: "This product was designed for parents who have children or yet to have children. This product encourages the parent to save for the kids future and also the amount can serve as collateral for loans.",
                                features: ["Flexible terms", "No hidden fees"],
                                gradient: "from-indigo-500 to-purple-600",
                            },
                        ].map((product, index) => (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg overflow-hidden ${isDarkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/50 backdrop-blur-sm"} hover:scale-105`}
                            >
                                <CardHeader className="relative">
                                    <div
                                        className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 mb-6 shadow-lg`}
                                    >
                                        {product.icon}
                                    </div>
                                    <CardTitle className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-3`}>
                                        {product.title}
                                    </CardTitle>
                                    <CardDescription
                                        className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-base leading-relaxed`}
                                    >
                                        {product.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className={`flex items-center text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                                            >
                                                <div
                                                    className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full mr-4 flex-shrink-0`}
                                                ></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        variant="ghost"
                                        className={`w-full ${isDarkMode ? "text-blue-400 hover:bg-blue-400/10" : "text-blue-600 hover:bg-blue-50"} group-hover:bg-gradient-to-r group-hover:${product.gradient} group-hover:text-white transition-all duration-300 rounded-xl py-3`}
                                    >
                                        Learn More
                                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio/Gallery Section */}
            <section
                id="portfolio"
                className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-slate-50"} relative overflow-hidden`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Our Portfolio
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Stories of
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                Impact & Growth
                            </span>
                        </h2>
                        <p
                            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
                        >
                            Discover how we&apos;re making a difference in our community through innovative programs, partnerships, and
                            member success stories.
                        </p>
                    </div>

                    {/* Featured Gallery Item */}
                    <div className="mb-16">
                        <div
                            className={`${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={galleryItems[currentGalleryIndex].image || "/placeholder.svg"}
                                        alt={galleryItems[currentGalleryIndex].title}
                                        className="w-full h-96 lg:h-full object-cover transition-transform duration-700 hover:scale-110"
                                        height={100}
                                        width={100}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <Badge className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 font-semibold">
                                        {galleryItems[currentGalleryIndex].category}
                                    </Badge>
                                </div>

                                <div className="p-12 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4 text-sm">
                                            <Badge
                                                variant="outline"
                                                className={`${isDarkMode ? "border-gray-600 text-gray-400" : "border-gray-300 text-gray-600"}`}
                                            >
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {galleryItems[currentGalleryIndex].date}
                                            </Badge>
                                            <Badge
                                                variant="outline"
                                                className={`${isDarkMode ? "border-gray-600 text-gray-400" : "border-gray-300 text-gray-600"}`}
                                            >
                                                <TrendingUp className="w-4 h-4 mr-2" />
                                                {galleryItems[currentGalleryIndex].stats}
                                            </Badge>
                                        </div>

                                        <h3
                                            className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} leading-tight`}
                                        >
                                            {galleryItems[currentGalleryIndex].title}
                                        </h3>

                                        <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                            {galleryItems[currentGalleryIndex].description}
                                        </p>

                                        <div className="flex items-center space-x-4 pt-4">
                                            <Button
                                                onClick={prevGalleryItem}
                                                variant="outline"
                                                size="lg"
                                                className={`${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"} rounded-full p-3`}
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </Button>

                                            <Button
                                                onClick={nextGalleryItem}
                                                variant="outline"
                                                size="lg"
                                                className={`${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"} rounded-full p-3`}
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </Button>

                                            <Button
                                                size="lg"
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                            >
                                                View Details
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <Card
                                key={index}
                                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden ${isDarkMode ? "bg-gray-900/50 backdrop-blur-sm" : "bg-white/50 backdrop-blur-sm"} ${index === currentGalleryIndex ? "ring-2 ring-blue-500" : ""}`}
                                onClick={() => setCurrentGalleryIndex(index)}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        height={100}
                                        width={100}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-semibold">
                                        {item.category}
                                    </Badge>
                                </div>

                                <CardContent className="p-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{item.date}</span>
                                            <span className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} font-semibold`}>
                                                {item.stats}
                                            </span>
                                        </div>

                                        <h3
                                            className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"} group-hover:text-blue-600 transition-colors line-clamp-2`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} line-clamp-3`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"} relative`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Our Team
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Meet the Leaders
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                Behind Your Success
                            </span>
                        </h2>
                        <p
                            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
                        >
                            Our experienced leadership team combines decades of financial expertise with a passion for serving our
                            members and strengthening our community.
                        </p>
                    </div>

                    {/* Leadership Team */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 shadow-lg overflow-hidden ${isDarkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/50 backdrop-blur-sm"} hover:scale-105 relative`}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                        height={100}
                                        width={100}
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                                    ></div>

                                    {/* Social Media Icons - Appear on Hover */}
                                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                        {Object.entries(member.social).map(([platform, url], idx) => (
                                            <Link
                                                key={platform}
                                                href={url}
                                                className={`w-10 h-10 ${isDarkMode ? "bg-gray-900/80" : "bg-white/90"} backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 ${getSocialColor(platform)} transition-all duration-300 hover:scale-110 hover:text-white shadow-lg`}
                                                style={{ transitionDelay: `${idx * 100}ms` }}
                                            >
                                                {getSocialIcon(platform)}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Department Badge */}
                                    <Badge
                                        className={`absolute bottom-4 left-4 bg-gradient-to-r ${member.gradient} text-white px-3 py-1 text-xs font-semibold backdrop-blur-sm`}
                                    >
                                        {member.department}
                                    </Badge>
                                </div>

                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}>
                                                {member.name}
                                            </h3>
                                            <p className={`text-lg ${isDarkMode ? "text-blue-400" : "text-blue-600"} font-semibold mb-3`}>
                                                {member.position}
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-4 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Briefcase className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                                                <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{member.experience}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-2">
                                            <GraduationCap
                                                className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"} mt-1 flex-shrink-0`}
                                            />
                                            <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                                {member.education}
                                            </span>
                                        </div>

                                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                            {member.bio}
                                        </p>

                                        {/* Specialties */}
                                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3`}>
                                                Specialties:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {member.specialties.map((specialty, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        variant="outline"
                                                        className={`text-xs ${isDarkMode ? "border-gray-600 text-gray-400" : "border-gray-300 text-gray-600"} hover:bg-gradient-to-r hover:${member.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                                                    >
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Advisory Board */}
                    <div
                        className={`${isDarkMode ? "bg-gray-800/50" : "bg-blue-50/50"} backdrop-blur-xl rounded-3xl p-12 border ${isDarkMode ? "border-gray-700" : "border-white/20"} shadow-2xl`}
                    >
                        <div className="text-center mb-12">
                            <h3 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
                                Advisory Board
                            </h3>
                            <p
                                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto text-lg leading-relaxed`}
                            >
                                Our distinguished board members bring diverse expertise and community leadership to guide our strategic
                                direction.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {advisoryBoard.map((member, index) => (
                                <div
                                    key={index}
                                    className={`text-center p-8 rounded-2xl ${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-white/20"} group`}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}>
                                        {member.name}
                                    </h4>
                                    <p className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"} font-semibold mb-3`}>
                                        {member.position}
                                    </p>
                                    <div className="space-y-2">
                                        <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{member.expertise}</p>
                                        <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{member.experience}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        {[
                            { value: "150+", label: "Combined Years of Experience", icon: <Clock className="w-8 h-8" /> },
                            { value: "6", label: "Leadership Team Members", icon: <Users className="w-8 h-8" /> },
                            { value: "4", label: "Advisory Board Members", icon: <Award className="w-8 h-8" /> },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center p-8 rounded-2xl ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-white/20"}`}
                            >
                                <div className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-4 flex justify-center`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}>
                                    {stat.value}
                                </div>
                                <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-slate-50 to-blue-50"} relative`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div>
                                <Badge
                                    className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                                >
                                    Get to Know Us
                                </Badge>
                                <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                                    More Than Just
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                        Banking
                                    </span>
                                </h2>
                                <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed mb-8`}>
                                    Good news co-operative credit union was formed through an initiative of Regina Hemans Asmah, now known as Rev. Regina Turkson.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Users className="w-10 h-10" />,
                                        title: "Member-Owned",
                                        description: "As a cooperative, our members are our owners. Your success is our success.",
                                        gradient: "from-blue-500 to-cyan-600",
                                    },
                                    {
                                        icon: <Award className="w-10 h-10" />,
                                        title: "Award-Winning",
                                        description: "Recognized for excellence in customer service and community impact.",
                                        gradient: "from-purple-500 to-pink-600",
                                    },
                                    {
                                        icon: <Lock className="w-10 h-10" />,
                                        title: "Bank-Level Security",
                                        description: "Advanced encryption and fraud protection for your peace of mind.",
                                        gradient: "from-green-500 to-emerald-600",
                                    },
                                    {
                                        icon: <Globe className="w-10 h-10" />,
                                        title: "Digital First",
                                        description: "Cutting-edge technology with a human touch for modern banking.",
                                        gradient: "from-orange-500 to-red-600",
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${isDarkMode ? "border-gray-700" : "border-gray-100"} group`}
                                    >
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            {feature.icon}
                                        </div>
                                        <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-3`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-8">
                                {[
                                    { value: "A+", label: "BBB Rating", icon: <Award className="w-6 h-6" /> },
                                    { value: "4.9/5", label: "Member Satisfaction", icon: <Star className="w-6 h-6" /> },
                                    { value: "35+", label: "Years of Service", icon: <Clock className="w-6 h-6" /> },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className={`text-center p-6 rounded-2xl ${isDarkMode ? "bg-gray-800/50" : "bg-blue-50"} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                                    >
                                        <div className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} mb-3 flex justify-center`}>
                                            {stat.icon}
                                        </div>
                                        <div className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}>
                                            {stat.value}
                                        </div>
                                        <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Heart className="w-8 h-8" />,
                                            title: "Community First",
                                            description: "Supporting local businesses and families",
                                            color: "text-red-500",
                                            gradient: "from-red-500 to-pink-600",
                                        },
                                        {
                                            icon: <Shield className="w-8 h-8" />,
                                            title: "Secure Banking",
                                            description: "Advanced security for your peace of mind",
                                            color: "text-blue-600",
                                            gradient: "from-blue-500 to-cyan-600",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border ${isDarkMode ? "border-gray-700" : "border-gray-100"} group`}
                                        >
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {item.icon}
                                            </div>
                                            <h4 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"} text-lg mb-2`}>
                                                {item.title}
                                            </h4>
                                            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 pt-12">
                                    {[
                                        {
                                            icon: <TrendingUp className="w-8 h-8" />,
                                            title: "Financial Growth",
                                            description: "Helping you build wealth and achieve goals",
                                            color: "text-green-600",
                                            gradient: "from-green-500 to-emerald-600",
                                        },
                                        {
                                            icon: <Handshake className="w-8 h-8" />,
                                            title: "Personal Service",
                                            description: "Dedicated support when you need it",
                                            color: "text-purple-600",
                                            gradient: "from-purple-500 to-pink-600",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${isDarkMode ? "bg-gray-800/50" : "bg-white"} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border ${isDarkMode ? "border-gray-700" : "border-gray-100"} group`}
                                        >
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                {item.icon}
                                            </div>
                                            <h4 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"} text-lg mb-2`}>
                                                {item.title}
                                            </h4>
                                            <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section id="mission" className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"} relative`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Mission & Vision
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Our Purpose &
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                Promise
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden relative group hover:scale-105 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <CardHeader className="relative p-12">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <CardTitle className="text-3xl font-bold text-white mb-6">Our Mission</CardTitle>
                                <CardDescription className="text-blue-100 text-lg leading-relaxed">
                                    To facilitate the socio-economic development for its members, through provision of innovative member-centered financial and non-financial products and services to object poverty members and economically active members using a team of dedicated and reliable staff.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className={`border-0 shadow-2xl ${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-sm overflow-hidden relative group hover:scale-105 transition-all duration-500`}
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <CardHeader className="relative p-12">
                                <div
                                    className={`w-20 h-20 ${isDarkMode ? "bg-blue-900/50" : "bg-blue-100"} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Eye className={`w-10 h-10 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                                </div>
                                <CardTitle className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
                                    Our Vision
                                </CardTitle>
                                <CardDescription
                                    className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg leading-relaxed`}
                                >
                                    To become the best choice credit union for reliability, integrity, efficient thrift and loan services.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>

                    <div
                        className={`${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl rounded-3xl p-12 lg:p-16 border ${isDarkMode ? "border-gray-700" : "border-white/20"} shadow-2xl`}
                    >
                        <div className="text-center mb-12">
                            <h3 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
                                Our Core Values
                            </h3>
                            <p
                                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto text-lg leading-relaxed`}
                            >
                                These principles guide everything we do and shape how we serve our members and community with excellence
                                and innovation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Integrity",
                                    description: "Honest and transparent in all our dealings",
                                    icon: <Shield className="w-8 h-8" />,
                                    gradient: "from-blue-500 to-cyan-600",
                                },
                                {
                                    title: "Excellence",
                                    description: "Committed to exceeding expectations",
                                    icon: <Award className="w-8 h-8" />,
                                    gradient: "from-purple-500 to-pink-600",
                                },
                                {
                                    title: "Innovation",
                                    description: "Embracing technology and new solutions",
                                    icon: <Zap className="w-8 h-8" />,
                                    gradient: "from-orange-500 to-red-600",
                                },
                                {
                                    title: "Community",
                                    description: "Supporting and strengthening our neighborhoods",
                                    icon: <Heart className="w-8 h-8" />,
                                    gradient: "from-green-500 to-emerald-600",
                                },
                            ].map((value, index) => (
                                <div key={index} className="text-center group">
                                    <div
                                        className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                                    >
                                        <div className="text-white">{value.icon}</div>
                                    </div>
                                    <h4 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-3`}>
                                        {value.title}
                                    </h4>
                                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed`}>
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Branches Section */}
            <section
                id="branches"
                className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-slate-50 to-blue-50"} relative`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Our Branches
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Convenient Locations
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                to Serve You
                            </span>
                        </h2>
                        <p
                            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
                        >
                            Visit us at any of our 15 modern branch locations or bank online 24/7 with our award-winning digital
                            platform. We&apos;re here when you need us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                name: "Downtown Main Branch",
                                address: "123 Main Street, Downtown",
                                phone: "(555) 123-4567",
                                hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
                                features: ["Drive-thru", "ATM", "Safe Deposit Boxes"],
                                gradient: "from-blue-500 to-cyan-600",
                            },
                            {
                                name: "Westside Branch",
                                address: "456 Oak Avenue, Westside",
                                phone: "(555) 234-5678",
                                hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM",
                                features: ["Business Center", "ATM", "Notary Services"],
                                gradient: "from-purple-500 to-pink-600",
                            },
                            {
                                name: "Northgate Branch",
                                address: "789 Pine Road, Northgate",
                                phone: "(555) 345-6789",
                                hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM",
                                features: ["Investment Center", "ATM", "Meeting Rooms"],
                                gradient: "from-green-500 to-emerald-600",
                            },
                        ].map((branch, index) => (
                            <Card
                                key={index}
                                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${isDarkMode ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/50 backdrop-blur-sm"} group overflow-hidden`}
                            >
                                <CardHeader className="relative">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${branch.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        <Building className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-2`}>
                                        {branch.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <MapPin
                                                className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"} mt-1 flex-shrink-0`}
                                            />
                                            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{branch.address}</p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"} flex-shrink-0`} />
                                            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{branch.phone}</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Clock
                                                className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"} mt-1 flex-shrink-0`}
                                            />
                                            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{branch.hours}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <p className={`text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-2`}>
                                            Services Available:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {branch.features.map((feature, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="outline"
                                                    className={`text-xs ${isDarkMode ? "border-gray-600 text-gray-400" : "border-gray-300 text-gray-600"}`}
                                                >
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className={`w-full mt-6 ${isDarkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400/10" : "border-blue-600 text-blue-600 hover:bg-blue-50"} bg-transparent rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105`}
                                    >
                                        Get Directions
                                        <MapPin className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            size="lg"
                            variant="outline"
                            className={`${isDarkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400/10" : "border-blue-600 text-blue-600 hover:bg-blue-50"} px-12 py-4 bg-transparent rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105`}
                        >
                            View All 15 Locations
                            <ChevronRight className="ml-3 w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-24 ${isDarkMode ? "bg-gray-900" : "bg-white"} relative`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <Badge
                            className={`${isDarkMode ? "bg-blue-900/50 text-blue-300 border-blue-700" : "bg-blue-100 text-blue-800 border-blue-200"} mb-6 px-6 py-3 text-sm font-semibold border backdrop-blur-sm`}
                        >
                            Contact Us
                        </Badge>
                        <h2 className={`text-4xl lg:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>
                            Let&apos;s Start Your
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                Financial Journey
                            </span>
                        </h2>
                        <p
                            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed`}
                        >
                            Ready to join our credit union family? Get in touch with us today and discover the difference member-owned
                            banking makes with cutting-edge technology and personalized service.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Phone className="w-8 h-8" />,
                                        title: "Call Us",
                                        description: `
                    +233244758410,
                    +233206186879,
                    +23324354730,
                    +233204345246`,
                                        subtitle: "24/7 Member Support",
                                        gradient: "from-blue-500 to-cyan-600",
                                    },
                                    {
                                        icon: <Mail className="w-8 h-8" />,
                                        title: "Email Us",
                                        description: "goodnewscooperativecreditunion2009@gmail.com",
                                        subtitle: "Quick Response Guaranteed",
                                        gradient: "from-purple-500 to-pink-600",
                                    },
                                ].map((contact, index) => (
                                    <div
                                        key={index}
                                        className={`${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg border ${isDarkMode ? "border-gray-700" : "border-white/20"} group`}
                                    >
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            {contact.icon}
                                        </div>
                                        <h3 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"} text-xl mb-3`}>
                                            {contact.title}
                                        </h3>
                                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-[12px]`}>
                                            {contact.description}
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{contact.subtitle}</p>
                                    </div>
                                ))}
                            </div>

                            <Card className={`border-0 shadow-2xl ${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl`}>
                                <CardHeader>
                                    <CardTitle className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        Send us a Message
                                    </CardTitle>
                                    <CardDescription className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg`}>
                                        We&apos;ll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="First Name"
                                            className={`border-gray-200 ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white"} rounded-xl py-3`}
                                        />
                                        <Input
                                            placeholder="Last Name"
                                            className={`border-gray-200 ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white"} rounded-xl py-3`}
                                        />
                                    </div>
                                    <Input
                                        placeholder="Email Address"
                                        type="email"
                                        className={`border-gray-200 ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white"} rounded-xl py-3`}
                                    />
                                    <Input
                                        placeholder="Phone Number"
                                        type="tel"
                                        className={`border-gray-200 ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white"} rounded-xl py-3`}
                                    />
                                    <textarea
                                        placeholder="How can we help you today?"
                                        className={`w-full p-4 border ${isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200"} rounded-xl resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                                    ></textarea>
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        Send Message
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <div
                                className={`${isDarkMode ? "bg-gradient-to-br from-blue-900 to-purple-900" : "bg-gradient-to-br from-blue-600 to-blue-800"} rounded-3xl p-10 text-white relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                <div className="relative">
                                    <h3 className="text-3xl font-bold mb-8">Why Choose Good News Co-op?</h3>
                                    <div className="space-y-4">
                                        {[
                                            "Member-owned and operated since 1985",
                                            "Competitive rates on loans and deposits",
                                            "No monthly maintenance fees on checking",
                                            "Free online and mobile banking with AI features",
                                            "24/7 customer support with live chat",
                                            "Community-focused financial education programs",
                                            "Advanced security with biometric authentication",
                                            "Sustainable banking practices and carbon neutral operations",
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-center space-x-4">
                                                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                                                <p className="text-blue-100">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl rounded-2xl p-8 border ${isDarkMode ? "border-gray-700" : "border-white/20"} shadow-lg`}
                            >
                                <h4 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
                                    Business Hours
                                </h4>
                                <div className="space-y-4">
                                    {[
                                        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                                        { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                                        { day: "Sunday", hours: "Closed" },
                                    ].map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center py-2">
                                            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{schedule.day}</span>
                                            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                                {schedule.hours}
                                            </span>
                                        </div>
                                    ))}
                                    <div className={`pt-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                                        <div className="flex justify-between items-center">
                                            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Online Banking</span>
                                            <span className={`font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                                                24/7 Available
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Mobile App</span>
                                            <span className={`font-semibold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                                                Always On
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`${isDarkMode ? "bg-gray-900/50" : "bg-white/50"} backdrop-blur-xl rounded-2xl p-8 border ${isDarkMode ? "border-gray-700" : "border-white/20"} shadow-lg`}
                            >
                                <h4 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
                                    Quick Actions
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { title: "Find ATM", icon: <MapPin className="w-5 h-5" />, gradient: "from-blue-500 to-cyan-600" },
                                        {
                                            title: "Loan Calculator",
                                            icon: <Calculator className="w-5 h-5" />,
                                            gradient: "from-purple-500 to-pink-600",
                                        },
                                        {
                                            title: "Rate Check",
                                            icon: <TrendingUp className="w-5 h-5" />,
                                            gradient: "from-green-500 to-emerald-600",
                                        },
                                        {
                                            title: "Schedule Visit",
                                            icon: <Calendar className="w-5 h-5" />,
                                            gradient: "from-orange-500 to-red-600",
                                        },
                                    ].map((action, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className={`${isDarkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"} bg-transparent rounded-xl py-4 flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-105`}
                                        >
                                            <div
                                                className={`w-10 h-10 bg-gradient-to-br ${action.gradient} rounded-lg flex items-center justify-center text-white`}
                                            >
                                                {action.icon}
                                            </div>
                                            <span className="text-sm font-semibold">{action.title}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Floating Action Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <Button
                    size="lg"
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
                >
                    <Phone className="w-6 h-6" />
                </Button>
            </div>
        </div>
    )
}
