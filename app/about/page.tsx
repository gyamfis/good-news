"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Users,
    Award,
    Lock,
    Globe,
    Heart,
    Shield,
    TrendingUp,
    Handshake,
    Target,
    Eye,
    Clock,
    Star,
    Zap,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function AboutPage() {
    const { theme } = useTheme()
    const isDarkMode = theme === "dark"

    return (
        <div
            className={`min-h-screen pt-20 transition-all duration-500 ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-slate-50 to-blue-50"}`}
        >
            {/* About Section */}
            <section
                id="about"
                className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-gradient-to-br from-slate-50 to-blue-50"} relative`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="grid lg:grid-cols-1 gap-20 items-center">
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
                                    Good news co-operative credit union was formed through an initiative of Regina Hemans Asmah, now known as Rev. Regina Turkson. It was established when Mrs. Regina Turkson was entrenched from Amal bank now bank of Africa. It was out of the money she was given when leaving the company and her own personal savings through which Good news co-operative credit union was given birth in the year 2008 in the month of December. Goodnews was started with a single computer and a study table that belonged to Benneth Quayson, son of Rev. Regina Turkson.

                                    With the help of Rev P.K Opoku, retired Assemblies of God pastor, Rev Moses Pinkrah of Hello FM and ten other major people, the society started as a study group and was later given a license and has been registered under the Ghana Co-operative credit union on the 13th of March 2009, with the registration number AR/P/FC/289. It has also been license under the Credit Union Association Ghana (CUA).

                                    The society started operating from Amakom behind the shell filling station, now head office. The society started with two staff, Madam Regina herself and one other person. It started with his son's computer and study table. With the grace of God, Good news co-operative credit union is doing so well and hopes to get to the apex of the co-operative society. The society has about six products functioning thus membership shares, susu products such as grass root susu, meba nti susu, menhyira nti and traditional savings. Assets products such as personal loans, member customer loans, group loans among others.

                                    To the glory of God the society has been able to set up 8 branches in Kumasi thus Amakom, Suame, Atonsu, Ayeduase, Moke, Kwaso dadease, and central market. The society has been registered under the Ghana Co-operative credit union .

                                    Christ has indeed made things beautiful in His time. The society has 16 office staffs and 40 sales executives working effectively for the society 's well-being.
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
                                        className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
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
        </div>
    )
}
