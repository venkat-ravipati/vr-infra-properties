import { useParams, Navigate, useNavigate } from "react-router"
import { projects } from "../data/projects";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [phaseImg, setPhaseImg] = useState(0);
    const detailstartRef = useRef(null);
    const productDetailRef = useRef(null);
    const detailInfoRef = useRef(null);

    const project = projects.items.find((project) => project.slug === slug);

    useGSAP(() => {
        if (!project) return;
        
        gsap.from(".product-detail-image", {
            scale: 1.1,
            duration: 1,
        })
        gsap.from(".product-detail-text", {
            opacity:0,
            y:50,
            duration: 1,
        })
    }, {scope: detailstartRef})

    useGSAP(() => {
        if (!project) return;
        
        gsap.from(".detail-list", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".detail-list",
                start: "top 80%"
            }
        })
    }, { scope: productDetailRef })

    useGSAP(() => {
        if (!project) return;

        gsap.from(".detail-info", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".detail-info",
                start: "top 80%"
            }
        })
        gsap.from(".project-highlights", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".project-highlights",
                start: "top 80%"
            }
        })
        gsap.from(".location-highlights", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".location-highlights",
                start: "top 80%"
            }
        })
    }, { scope: detailInfoRef })

    if (!project) {
        return <Navigate to="/nonexistent-page" replace />
    }

    return (
        <div>
            <div ref={detailstartRef} className="h-100 md:h-130 w-full relative overflow-hidden">
                <img src={project.mainImage} className="w-full product-detail-image h-full absolute object-cover object-top" alt={project.title} loading="lazy" />
                <div className="absolute bottom-5 left-2 product-detail-text md:left-5 text-white text-4xl md:text-5xl lg:text-7xl">{project.title}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-10 p-6 md:p-10 mt-10">
                <div ref={productDetailRef} className="col-span-1 px-3">
                    <div className="md:sticky top-10">
                        <div className="text-3xl detail-list py-7 ">{project.title}</div>
                        <div className="flex py-2 justify-between detail-list border-b border-gray-300">
                            <div className="text-gray-600">Location</div>
                            <div className="text-lg text-gray-600 font-medium">{project.location}</div>
                        </div>
                        <div className="flex justify-between py-2 border-b detail-list border-gray-300">
                            <div className="text-gray-600">Type</div>
                            <div className="text-lg text-gray-600 font-medium">{project.type}</div>
                        </div>
                        {project.availablePlots && (
                            <div className="flex justify-between py-2 border-b detail-list border-gray-300">
                                <div className="text-gray-600">Avaliable Plots</div>
                                <div className="text-lg text-gray-600 font-medium">{project.availablePlots}</div>
                            </div>
                        )}
                        {project.plotSizes && (
                            <div className="flex py-2 justify-between border-b detail-list border-gray-300">
                                <div className="text-gray-600">sq. ft</div>
                                <div className="text-lg text-gray-600 font-medium">{project.plotSizes}</div>
                            </div>
                        )}
                        <div className="flex justify-between border-b py-2 detail-list border-gray-300">
                            <div className="text-gray-600">Status</div>
                            <div className="text-lg text-gray-600 font-medium">{project.status}</div>
                        </div>

                        <div className="detail-list">
                            <button className="cursor-pointer my-4 bg-orange px-5 py-2 flex items-center gap-2 hover:bg-black text-white transition-all duration-300 hover:gap-5" onClick={() => navigate("/projects")}><ArrowLeft size={18} /> All Projects</button>
                        </div>

                    </div>
                </div>

                <div ref={detailInfoRef} className="col-span-2 px-10">
                    <div>
                        <div className="text-xl detail-info md:text-3xl">Description</div>
                        <div className="text-lg detail-info py-4">{project.description}</div>
                        <div className="text-lg detail-info">{project.body}</div>
                    </div>

                    <div className="my-10">
                        <div className="text-lg detail-info flex justify-start gap-5 py-2">
                            <button onClick={() => { setPhaseImg(0) }} className={`py-2 rounded-3xl px-5 cursor-pointer transition-all duration-300 ${phaseImg == 0 ? "bg-black text-white hover:bg-black/90" : "bg-white hover:bg-[#f5f5f5] text-black"}`}>Phase 1</button>
                            <button onClick={() => { setPhaseImg(1) }} className={`py-2 rounded-3xl px-5 cursor-pointer transition-all duration-300 ${phaseImg == 1 ? "bg-black text-white hover:bg-black/90" : "bg-white hover:bg-[#f5f5f5] text-black"}`}>Phase 2</button>
                            {/* <button onClick={() => {setPhaseImg(2)}} className="cursor-pointer">Phase 3</button> */}
                        </div>
                        <div className="detail-info">
                            <img src={project.images[phaseImg]} className="transition-all duration-300" alt="Phase Image" loading="lazy" />
                        </div>
                    </div>

                    <div className="py-5 my-5 border-b border-gray-300">
                        <div className="text-2xl py-2 project-highlights">PROJECT HIGHLIGHTS</div>
                        <div className="grid grid-cols-2 py-5 gap-3 project-highlights">
                            {project.projectHighlights.map((projectHighlight, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2"><BadgeCheck size={18} />{projectHighlight}</div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="py-5">
                        <div className="text-2xl py-2 location-highlights">LOCATION HIGHLIGHTS</div>
                        <div className="grid grid-cols-2 py-5 gap-3 location-highlights">
                            {project.locationHighlights.map((locationHighlight, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2"><BadgeCheck size={18} />{locationHighlight}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}