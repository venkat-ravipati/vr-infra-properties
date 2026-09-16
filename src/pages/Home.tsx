import { companyInfo, about, services } from "../data/info"
import { projects } from "../data/projects"
import { useNavigate } from "react-router"
import { useRef } from "react";
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/project/ProjectCard";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const ongoingProjects = projects.items.filter((project) => project.status === "ongoing").sort((a, b) => b.id - a.id).slice(0, 2);

    useGSAP(() => {

        const splitHeading = new SplitText(".hero-heading", { type: "words" });
        const splitTagline = new SplitText(".hero-tagline", { type: "words" });

        const navbar = document.querySelector(".navbar")

        const tl = gsap.timeline();
        tl.from(".hero-image", { y: 100, duration: 1 })
            .from(splitHeading.words, { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 })
            .from(splitTagline.words, { opacity: 0, y: 50, duration: 0.6, stagger: 0.1 })
            .from(navbar, { opacity: 0, y: -50, duration: 1 }, "<")
            .from(".hero-explore", { opacity: 0, y: 20, duration: 1 })



    }, { scope: heroRef });

    useGSAP(() => {
        const splitAboutHeading = new SplitText(".about-heading", { type: "words" });
        const splitAboutDescription = new SplitText(".about-description", { type: "lines" });

        gsap.from(splitAboutHeading.words, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".about-heading",
                start: "top 80%",
            }
        })

        gsap.from(splitAboutDescription.lines, {
            opacity: 0,
            y: 100,
            duration: 1,
            delay: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".about-description",
                start: "top 80%",
            }
        })

        gsap.from(".about-button", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay:1,
            scrollTrigger: {
                trigger: ".about-button",
                start: "top 80%",
            }
        })

    }, { scope: aboutRef });

    useGSAP(() => {
        const splitServicesDescription = new SplitText(".services-description", { type: "lines" });

        gsap.from(splitServicesDescription.lines, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".services-description",
                start: "top 80%",
            }
        })

        gsap.from(".services-items", {
            opacity: 0,
            y: 100,
            duration: 1,
            delay: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".services-items",
                start: "top 80%",
            }
        })
        gsap.from(".services-button", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay:0.2,
            scrollTrigger: {
                trigger: ".services-button",
                start: "top 80%",
            }
        })
    }, { scope: servicesRef });

    useGSAP(() => {
        gsap.from(".project-cards", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".project-cards",
                start: "top 80%",
            }
        })
        gsap.from(".project-button", {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: ".project-button",
                start: "top 90%"
            }
        })

    }, { scope: projectRef })

    useGSAP(() => {
        const splitContactText = new SplitText(".contact-text", { type: "lines" });

        gsap.from(splitContactText.lines, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".contact-text",
                start: "top 80%"
            }
        })
        gsap.from(".contact-button", {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: ".contact-button",
                start: "top 80%"
            }

        })
    }, { scope: contactRef })


    return (
        <div className="font-sans bg-[#f5f5f5]">
            <div className="relative" ref={heroRef}>
                <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp" alt="Hero Image" className="hero-image w-full object-cover object-top md:max-h-screen min-h-screen" />
                <div className="absolute top-1/5 md:top-1/4 lg:top-1/3 px-6 md:px-10 text-white">
                    <h1 className="hero-heading text-3xl md:text-5xl lg:text-7xl">{companyInfo.name}</h1>
                    <div className="hero-tagline whitespace-pre-line lg:whitespace-normal md:text-2xl lg:text-3xl font-medium text-orange md:px-2 mt-10 md:mt-4">
                        {companyInfo.tagline.replace(".", ".\n")}
                    </div>
                    <div className="hero-explore">
                        <button className="bg-orange text-sm md:text-base font-medium cursor-pointer text-white px-4 md:px-6 py-2 mt-6 rounded-3xl hover:bg-black transition-colors duration-300" onClick={() => navigate("/projects")}>
                            Explore Projects
                        </button>
                    </div>
                </div>
            </div>

            <div ref={aboutRef} className="px-6 md:px-10 py-10 md:py-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-4 md:gap-10">
                <div className="col-span-1 text-xl text-gray-600 tracking-wide">About Us</div>
                <div className="col-span-3 lg:col-span-4 xl:col-span-2 text-gray-800 md:px-10">
                    <div className="about-heading text-3xl md:text-5xl lg:text-6xl text-black tracking-wide">
                        {about.heading}
                    </div>
                    <div className="mt-6 text-lg about-description md:text-xl md:pr-15 lg:pr-30 xl:pr-50 text-gray-600">
                        {about.description}
                    </div>
                    <div className="about-button">
                        <button className="bg-orange text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all font-medium cursor-pointer text-white px-4 md:px-6 py-2 mt-6 hover:bg-black duration-300" onClick={() => navigate("/about")}>
                            More About Us <ArrowRight className="inline-block" size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div ref={servicesRef} className="px-6 md:px-10 py-5 md:py-15 grid grid-cols-1 md:grid-cols-2 items-start">
                <div className="col-span-1 pr-8 md:pr-15" >
                    <div className="text-xl text-gray-600 tracking-wide">Services</div>
                    <div className="mt-6 text-2xl services-description md:text-3xl lg:text-4xl text-black">
                        {services.description}
                    </div>
                    <div className="services-button">
                        <button className="bg-orange text-sm md:text-base flex items-center gap-2 hover:gap-4 transition-all font-medium cursor-pointer text-white px-4 py-2 mt-6 hover:bg-black duration-300" onClick={() => navigate("/services")}>
                            More About Services <ArrowRight className="inline-block" size={20} />
                        </button>
                    </div>
                </div>
                <div className="col-span-1 h-full py-8 md:py-6 md:pl-10 grid grid-cols-2 gap-5">
                    {services.items.map((service, index) => (
                        <div key={index} className="mt-3 services-items md:mt-5">
                            <service.icon className="text-orange h-8 w-8" />
                            <h3 className="text-base md:text-xl font-normal mt-4">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 md:px-10 py-5 md:py-15" ref={projectRef}>
                <div className="text-xl text-black tracking-wide">
                    Our projects
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    {ongoingProjects.map((project) => (
                        <div key={project.id} className="project-cards">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <div className="project-button">
                    <button onClick={() => navigate("/projects")} className=" m-auto flex mt-6 bg-orange items-center gap-2 hover:gap-4 transition-all duration-300 text-white cursor-pointer hover:bg-black py-2 px-4">
                        View All Projects <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            <div ref={contactRef} className="px-6 md:px-10 py-5 mt-5 text-black bg-orange/80 md:py-10">
                <div className="text-xl">Contact Us</div>
                <div className="text-2xl contact-text lg:text-7xl mt-3 md:text-5xl md:mt-6">
                    Your real estate needs<br />
                    we are happy to advise you.
                </div>
                <div className="contact-button">
                    <button className="px-4 py-3 bg-black/90 mt-5 text-orange font-medium flex items-center gap-2 hover:gap-5 transition-all duration-300 cursor-pointer" onClick={() => navigate("/contact")}>Contact Us <ArrowRight size={18} /></button>
                </div>
            </div>
        </div>
    )
}