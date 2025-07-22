"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Calculator, TrendingUp, Calendar, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

export default function ContactPage() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div
      className={`min-h-screen pt-20 transition-all duration-500 ${isDarkMode ? "dark bg-gray-900" : "bg-gradient-to-br from-slate-50 to-blue-50"}`}
    >
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
              Let's Start Your
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
                    description: "(555) 123-GOOD",
                    subtitle: "24/7 Member Support",
                    gradient: "from-blue-500 to-cyan-600",
                  },
                  {
                    icon: <Mail className="w-8 h-8" />,
                    title: "Email Us",
                    description: "info@goodnewscu.org",
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
                    <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg mb-2`}>
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
                    We'll get back to you within 24 hours
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
    </div>
  )
}
