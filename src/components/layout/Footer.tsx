import { companyInfo } from "../../data/info"
import { footerLinks, socialLinks } from "../../data/links"
import { Link } from "react-router"

export default function Footer() {

    const year = new Date().getFullYear();
    
    return (
        <div className="relative">
            <div className="w-full h-100 overflow-hidden">
                <img src="https://res.cloudinary.com/ivenkatravipati/image/upload/v1789469682/footer.webp" className="absolute w-full h-full object-cover object-center" alt="footer image" />
                <div className="bg-black/20 absolute inset-0" />
            </div>
            <div className="sticky m-auto bottom-5 mt-5 w-8/9 pt-5 rounded-md bg-black">
                <div className="text-white grid grid-cols-2 md:grid-cols-4 font-sans gap-4 md:gap-0">
                    <div className="text-sans col-span-2 md:col-span-1">
                        <p className="text-2xl p-2 mt-2">{companyInfo.name}</p>
                        <p className="text-sm px-2">{companyInfo.tagline}</p>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 gap-1">
                        <span className="text-orange">Quick Links</span>
                        {footerLinks.quickLinks.map((link) => {
                            return (
                                <Link key={link.href} className="hover:text-white text-gray-300" to={link.href} >{link.label}</Link>
                            )
                        })}
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-orange">Social</span>
                        {socialLinks.map((social) => {
                            return (
                                <a key={social.name} target="_blank" href={social.href} className="gap-2 hover:text-white text-gray-300 cursor-pointer flex">
                                    {social.name}.
                                </a>
                            )
                        })}
                    </div>
                    <div className="flex flex-col px-2 md:px-0">
                        <p className="text-orange">Contact Us</p>
                        <a href={`mailto:${companyInfo.email}`} className="hover:text-white text-gray-300">{companyInfo.email}</a>
                        <a href={`tel:${companyInfo.phone}`} className="hover:text-white text-gray-300">{companyInfo.phone}</a>
                    </div>
                </div>
                <div className="text-white justify-between pb-3 text-sm flex mt-15 px-5 text-sans">
                    <div>&copy; {year} {companyInfo.name}</div>
                    <a className="cursor-pointer" href="https://www.linkedin.com/in/venkat-ravipati" target="_blank" rel="noopener noreferrer">code by Venkat</a>
                </div>
            </div>
        </div>
    )
}