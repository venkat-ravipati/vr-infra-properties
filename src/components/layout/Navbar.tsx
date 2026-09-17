import { Link, NavLink } from "react-router"
import { navbarLinks, socialLinks } from "../../data/links"
import { companyInfo } from "../../data/info"
import { Menu, X } from "lucide-react"
import { useState, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText);

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useGSAP(() => {
        if(isMenuOpen){
            gsap.to(menuRef.current, { x: "0%", duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
        }

    }, { scope: menuRef , dependencies: [isMenuOpen] });

    return(
        <div className="navbar backdrop-blur-xs font-sans flex items-center justify-between md:px-10 lg:px-15 xl:px-30 2xl:px-35 py-4 fixed top-0 left-0 right-0 z-50">
            <div className="text-2xl tracking-widest font-bold px-6">
                <Link to="/" >{companyInfo.logo}</Link>
            </div>

            <div className="md:flex gap-8 px-4 font-medium lg:px-8 hidden">
                {navbarLinks.map((link) => (
                    <NavLink key={link.href} to={link.href} className={({ isActive }) => isActive ? "text-orange" : "text-black"}>
                        {link.label}
                    </NavLink>
                ))}
            </div>

            <button className="md:hidden px-4" onClick={() => setIsMenuOpen(prev => !prev)} aria-label="Open menu">
                <Menu />
            </button>


                <div ref={menuRef} className="fixed translate-x-full font-sans text-2xl z-50 top-0 left-0 bottom-0 min-h-screen right-0 bg-white overflow-hidden shadow-md md:hidden">
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <X />
                    </button>
                    <div className="flex flex-col gap-4 mt-10 py-8 px-4">
                        <NavLink to="/" className={({ isActive }) =>`block px-4 hover:bg-gray-100 ${isActive ? " text-orange": "text-gray-800 hover:bg-gray-100 hover:text-orange-500"}`} onClick={() => setIsMenuOpen(false)} aria-label="close menu">
                            Home
                        </NavLink> 
                        {navbarLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) =>`block px-4 py-2 transition-colors ${isActive ? " text-orange": "text-gray-800 hover:bg-gray-100 hover:text-orange-500"}`}
                            onClick={() => setIsMenuOpen(false)} aria-label="Close menu"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    </div>

                    <div className="flex flex-col gap-2 text-xl px-8">
                        <div className="text-gray-500">Email :</div>
                        <div>{companyInfo.email}</div>
                        <div className="mt-2 text-gray-500">Phone :</div>
                        <div>{companyInfo.phone}</div>
                    </div>

                    <div className="flex flex-col gap-3 px-8">
                        <div className="text-xl mt-5 text-gray-500">Follow us :</div>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl text-gray-900 tracking-wide hover:text-blue-500 flex items-center gap-3 mt-2"
                            >
                                <img src={link.icon} alt={link.name} className="h-5 w-5 text-gray-300" /> {link.name}
                            </a>
                        ))}
                    </div>
                </div>
        </div>
    )
}