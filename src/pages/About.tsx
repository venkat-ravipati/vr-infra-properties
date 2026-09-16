import { about } from "../data/info"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const aboutRef = useRef(null);
    const pointsRef = useRef(null);
    const valueRef = useRef(null);
    const aboutStartRef = useRef(null);

    useGSAP(() => {      
        gsap.from(".about-img", {
            scale: 1.1,
            duration: 1,
        })
        gsap.from(".about-text", {
            opacity:0,
            y:50,
            duration: 1,
        })
    }, {scope: aboutStartRef})

    useGSAP(() => {
        gsap.from(".about", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".about",
                start: "top 90%"
            }
        })
    }, { scope: aboutRef })

    useGSAP(() => {
        gsap.from(".points-img", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".points-img",
                start: "top 80%"
            }
        });
        gsap.from(".mission", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".mission",
                start: "top 80%"
            }
        });
        gsap.from(".vision", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".vision",
                start: "top 80%"
            }
        })
    }, { scope: pointsRef })

    useGSAP(() => {
        gsap.from(".value-points", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".value-points",
                start: "top 80%"
            }
        })
    }, { scope: valueRef })


    return (
        <div>
            <div ref={aboutStartRef} className="h-100 md:h-130 relative">
                <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789551878/About.webp" loading="lazy" className="absolute h-full about-img w-full object-cover object-top" alt="about image" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute about-text flex items-end justify-center text-6xl lg:text-[200px] inset-0 text-white">
                    About Us
                </div>
            </div>

            <div ref={aboutRef} className="px-6 md:px-10">
                <div className="grid md:grid-cols-3 gap-3 md:gap-5 mt-8 md:mt-10">
                    <div className="col-span-1 about text-xl md:text-2xl">
                        About Us
                    </div>
                    <div className="col-span-2 about font-sans text-xl md:text-2xl lg:text-4xl lg:pr-20">
                        {about.description}
                    </div>
                </div>
            </div>

            <div ref={pointsRef} className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 md:my-15 relative">
                <div className="h-150 points-img overflow-hidden w-full hidden md:block relative">
                    <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789554099/map.webp" loading="lazy" className="absolute h-full w-full object-contain grayscale " alt="mock-map image" />
                </div>
                <div>
                    <div className="py-10 md:py-20">
                        <div className="text-xl mission text-orange">Mission</div>
                        <div className="text-xl mission md:text-2xl py-2 md:pr-10">{about.mission}</div>
                    </div>
                    <div>
                        <div className="text-xl vision text-orange">Vision</div>
                        <div className="text-xl vision md:text-2xl py-2 md:pr-10">{about.vision}</div>
                    </div>
                </div>
            </div>

            <div ref={valueRef} className="p-10 my-5 mx-6 md:mx-10 bg-[#f5f5f5] grid md:grid-cols-3 lg:grid-cols-2 gap-5 mt-10">
                <div className="col-span-1 text-2xl lg:text-3xl value-points">
                    <div className="sticky top-15">{about.values.title}</div>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    {about.values.items.map((value, index) => {
                        return (
                            <div key={index} className="border value-points border-gray-400 mb-5 ">
                                <div className="flex items-center gap-2 mx-2 border-b border-gray-400">
                                    <div className="p-4 m-2 border-r border-gray-400">{index + 1}</div>
                                    <div className="text-base md:text-xl font-medium">{value.title}</div>
                                </div>
                                <div className="p-4 text-sm font-sans">
                                    {value.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}