import { companyInfo, about } from "../data/info"
import { useNavigate } from "react-router"
import { useRef } from "react";
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(SplitText);

export default function Home() {
    const navigate = useNavigate();
    const heroRef = useRef(null);

    useGSAP(() => {

        const splitHeading = new SplitText(".hero-heading", { type: "words" });
        const splitTagline = new SplitText(".hero-tagline", { type: "words" });

        const navbar = document.querySelector(".navbar")

        const tl = gsap.timeline();
        tl.from(".hero-image", { y: 100, duration: 1 })
            .from(splitHeading.words, { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 })
            .from(splitTagline.words, { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 })
            .from(navbar, { opacity:0, y: -50, duration: 1 }, "<")
            .from(".hero-explore", { opacity: 0, y: 20, duration: 1 })

    }, { scope: heroRef });

    return (
        <div className="font-sans bg-[#f5f5f5]">
            <div className="relative" ref={heroRef}>
                <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp" alt="Hero Image" className="hero-image w-full object-cover object-top md:max-h-screen min-h-screen" />
                <div className="absolute top-1/5 md:top-1/4 lg:top-1/3 px-6 md:px-10 text-white">
                    <h1 className="hero-heading text-3xl md:text-5xl lg:text-7xl">{companyInfo.name}</h1>
                    <div className="hero-tagline whitespace-pre-line lg:whitespace-normal md:text-2xl lg:text-3xl font-medium text-orange md:px-2 mt-10 md:mt-4">
                        {companyInfo.tagline.replace(".", ".\n")}
                    </div>

                    <button className="bg-orange hero-explore text-sm md:text-base font-medium cursor-pointer text-white px-4 md:px-6 py-2 mt-6 rounded-3xl hover:bg-black transition-colors duration-300" onClick={() => navigate("/projects")}>
                        Explore Projects
                    </button>
                </div>
            </div>

            <div className="px-6 md:px-10 py-10 md:py-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-4 md:gap-10">
                <div className="col-span-1 text-xl text-gray-600 tracking-wide">About Us</div>
                <div className="col-span-3 lg:col-span-4 xl:col-span-2 text-gray-800 md:px-10">
                    <div className="text-3xl md:text-5xl lg:text-6xl text-black tracking-wide">
                        {about.heading}
                    </div>
                    <div className="mt-6 text-lg md:text-xl md:pr-15 lg:pr-30 xl:pr-50 text-gray-600">
                        {about.description}
                    </div>
                    <button className="bg-orange hero-explore text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all font-medium cursor-pointer text-white px-4 md:px-6 py-2 mt-6 hover:bg-black duration-300" onClick={() => navigate("/about")}>
                        More About Us <ArrowRight className="inline-block" size={20} />
                    </button>
                </div>
            </div>

            <div className="px-6 md:px-10 py-10 md:py-20">
                
            </div>
        </div>
    )
}