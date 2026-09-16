import { services, process } from "../data/info"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const servicesRef = useRef(null);
    const processRef = useRef(null);
    const servicesStartRef = useRef(null);

    useGSAP(() => {
        gsap.from(".services-img", {
            scale: 1.1,
            duration: 1,
        })
        gsap.from(".services-text", {
            opacity:0,
            y:50,
            duration: 1,
        })
    }, {scope: servicesStartRef})

    useGSAP(() => {
        gsap.from(".services", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".services",
                start: "top 90%"
            }
        });
        gsap.from(".services-points", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".services-points",
                start: "top 80%"
            }
        })
    }, { scope: servicesRef })

    useGSAP(() => {
        gsap.from(".process", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".process",
                start: "top 80%"
            }
        });
        gsap.from(".process-points", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".process-points",
                start: "top 80%"
            }
        })
    }, { scope: processRef })

    return (
        <div>
            <div ref={servicesStartRef} className="h-100 md:h-130 relative">
                <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789483922/Services.webp" loading="lazy" className="absolute h-full w-full services-img object-cover object-top" alt="services image" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute flex services-text items-end justify-center text-6xl lg:text-[200px] inset-0 text-white">
                    Services
                </div>
            </div>
            <div ref={servicesRef} className="px-6 md:px-10">
                <div className="grid md:grid-cols-3 gap-5 mt-8 md:mt-10">
                    <div className="col-span-1 text-xl md:text-2xl services">
                        Services
                    </div>
                    <div className="col-span-2 services font-sans text-2xl lg:text-4xl lg:pr-20">
                        {services.description}
                    </div>
                </div>
                <div className="p-10 my-5 bg-[#f5f5f5] grid md:grid-cols-3 lg:grid-cols-2 gap-5 mt-10">
                    <div className="col-span-1 text-2xl lg:text-3xl services-points">
                        <div className="sticky top-15">{services.title}</div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        {services.items.map((item, index) => {
                            return (
                                <div key={index} className="border services-points border-gray-400 mb-5 ">
                                    <div className="flex items-center gap-2 mx-2 border-b border-gray-400">
                                        <div className="p-4 m-2 border-r border-gray-400">{<item.icon size={18} />}</div>
                                        <div className="text-base md:text-xl font-medium">{item.title}</div>
                                    </div>
                                    <div className="p-4 text-sm font-sans">
                                        {item.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div ref={processRef} className="px-6 md:px-10">
                <div className="grid md:grid-cols-3 py-5 gap-5 mt-8 md:mt-10">
                    <div className="col-span-1 text-xl md:text-2xl process">
                        Process
                    </div>
                    <div className="col-span-2 process font-sans text-2xl lg:text-4xl lg:pr-20">
                        {process.description}
                    </div>
                </div>
                <div className="p-10 my-5 bg-[#f5f5f5] grid md:grid-cols-3 lg:grid-cols-2 gap-5 mt-10">
                    <div className="col-span-1 text-2xl lg:text-3xl process-points">
                        <div className="sticky top-15">{process.title}</div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        {process.steps.map((step) => {
                            return (
                                <div key={step.step} className="border process-points border-gray-400 mb-5 ">
                                    <div className="flex items-center gap-2 mx-2 border-b border-gray-400">
                                        <div className="p-4 m-2 border-r border-gray-400">{step.step}</div>
                                        <div className="text-base md:text-xl font-medium">{step.title}</div>
                                    </div>
                                    <div className="p-4 text-sm font-sans">
                                        {step.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}