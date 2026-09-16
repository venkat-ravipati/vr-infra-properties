import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-sans justify-center items-center flex flex-col">
            <div className="text-4xl md:text-6xl pb-5">404</div>
            <div className="text-2xl md:text-3xl">Page not found</div>
            <button className="flex items-center gap-2 my-5 md:my-8 py-2 px-4 bg-orange/90 hover:gap-4 transition-all duration-300 cursor-pointer hover:bg-black text-white font-medium md:text-lg" onClick={() => {navigate("/")}}>Back to homepage <ArrowRight size={18}/></button>
        </div>
    )
}