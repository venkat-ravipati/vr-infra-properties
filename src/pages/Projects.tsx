import { projects } from "../data/projects"
import ProjectCard from "../components/project/ProjectCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projecttitleRef = useRef(null);
    const projectRef = useRef(null);

    const sortedProjects = [...projects.items].sort((a, b) => {
        if (a.status != b.status) {
            return a.status === "ongoing" ? -1 : 1;
        } else {
            return b.id - a.id;
        }
    })

    useGSAP(() => {
        gsap.from(".project-title",{
            opacity:0,
            y:100,
            duration:1,
        })
    }, {scope: projecttitleRef})

    useGSAP(() => {
        gsap.from(".project-card",{
            opacity: 0,
            y:100,
            duration: 1,
            stagger:0.1,
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 80%"
            }
        })
    }, {scope: projectRef})


    return (
        <div className="pt-15 px-6 md:px-10">
            <div ref={projecttitleRef} className="grid md:grid-cols-3 gap-3 md:gap-5 mt-5 md:py-25">
                <div className="col-span-1 project-title text-xl md:text-2xl">
                    {projects.title}
                </div>
                <div className="col-span-2 project-title font-sans text-xl md:px-10 md:text-2xl lg:text-4xl">
                    {projects.description}
                </div>
            </div>

            <div ref={projectRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 md:py-15">
                {sortedProjects.map((project) => {
                    return (
                        <div key={project.id} className="project-card">
                            <ProjectCard project={project} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}