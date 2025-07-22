
import { Twitter, Github, Linkedin } from "lucide-react"
import { Logo } from "./logo"
import { NewsletterForm } from "./newletter-form"
import { Countdown } from "./countdown"

export default function ComingSoonPage() {
    // Set your target date here (e.g., 10 days from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-animated bg-black animate-gradient-x text-white p-4 text-center overflow-hidden relative">
            {/* Overlay for subtle texture/vignette */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-0" />

            <div className="relative z-10 max-w-4xl w-full space-y-10 py-12">
                <div className="animate-fade-in animate-fade-in-1">
                    <Logo />
                </div>

                <h1 className="text-3xl md:text-5xl  font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in animate-fade-in-2">
                    Our site in under maintenance.
                    <br />
                    We'll be back online shortly.
                </h1>
               {/*  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animate-fade-in-3">
                    We&apos;re meticulously crafting an experience that will redefine your expectations. Stay tuned for something truly
                    exceptional.
                </p>
 */}
                <Countdown targetDate={targetDate.toISOString()} className="animate-fade-in animate-fade-in-4" />

                {/* <div className="space-y-6 animate-fade-in animate-fade-in-5">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">Be the First to Know</h2>
                    <p className="text-gray-300">Join our exclusive list for early access, updates, and special announcements.</p>
                    <NewsletterForm />
                </div>
 */}
                <div className="flex justify-center space-x-6 pt-10 animate-fade-in animate-fade-in-5">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-7 w-7" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                        aria-label="GitHub"
                    >
                        <Github className="h-7 w-7" />
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-7 w-7" />
                    </a>
                </div>
            </div>
        </div>
    )
}
