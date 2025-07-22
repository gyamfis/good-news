import Image from "next/image";

export function Logo() {
    return (
        <div className="flex items-center justify-center mb-8">
            {/* Replace with your actual logo image or SVG */}
            <Image
                className="h-12 w-12 text-purple-400"
                width={48}
                height={48}
                src="/img/gnLogo2.png"
                alt="YourBrand Logo"
            />
            <span className="ml-3 text-3xl font-bold text-white">Good News Co-op Credit Union</span>
        </div>
    )
}
