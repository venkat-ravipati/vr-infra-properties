import { Link } from "react-router";
import type { Project } from "../../data/projects"
import { Building, Info } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link to={`/projects/${project.slug}`}>
            <div className="relative w-full h-full overflow-hidden duration-300">
                <img src={project.mainImage} alt={project.title} loading="lazy" className="w-full h-110 object-cover" />
                <div className="text-2xl md:text-3xl font-medium tracking-wide mt-4">{project.title}</div>
                <div className="text-lg mt-2">{project.location}</div>
                <div className="flex justify-start items-center gap-2 mt-2">
                    <div className="flex text-sm bg-stone-200 items-center gap-3 border-gray-300 px-3 py-2">
                        <Building size={20} />
                        {project.type}
                    </div>
                    <div className="text-sm gap-2 items-center flex text-black bg-stone-200 px-3 py-2">
                        <Info size={18} />
                        {project.status}
                    </div>
                </div>
                <p className="text-gray-600 mt-4 text-base">{project.description}</p>
            </div>
        </Link>
    )
}