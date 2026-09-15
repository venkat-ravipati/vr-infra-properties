import { companyInfo } from "../data/info"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef } from "react"

export default function Contact() {
    const contactRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline()
        
        tl.from(".contact-title", {
            opacity:0,
            y:50,
            duration: 0.5,
        }).from(".contact-titlebody", {opacity:0 , y: 50 , duration: 0.4})
        .from(".contact-start", {opacity:0 , y:50 , duration: 0.4})
        .from(".contact-email", {opacity:0 , y:50 , duration: 0.4})
        .from(".contact-emailid", {opacity:0 , y:50 , duration: 0.4},"<")
        .from(".contact-phone", {opacity:0 , y:50 , duration: 0.4})
        .from(".contact-phonenum", {opacity:0 , y:50 , duration: 0.4}, "<")
    }, {scope: contactRef})


    return (
        <div ref={contactRef} className="text-sans px-6 md:px-10 pt-25">
            <div className="border-b border-gray-300 py-5">
                <div className="contact-title text-2xl md:text-5xl md:py-4">Build Your Future With Us.</div>
                <div className="contact-titlebody md:text-lg py-2 text-gray-600">Looking for the perfect plot to build your dream home or make a smart investment?<br />Talk to our team today.</div>
            </div>
            <div className="text-sans gap-5 grid grid-cols-1 md:grid-cols-3 py-15">
                <div className="col-span-1 text-xl ">
                    Contact Us
                </div>
                <div className="col-span-2">
                    <div className="contact-start text-lg md:text-2xl md:mt-2 font-medium">Get in touch and let's make it happen.</div>
                    <div className="mt-3 md:mt-6">
                        <div className="text-base md:text-lg contact-email font-medium py-2">Email</div>
                        <a className="text-xl md:text-2xl contact-emailid" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                    </div>
                    <div className="my-4">
                        <div className="text-base md:text-lg contact-phone font-medium py-2">Phone</div>
                        <a className="text-xl md:text-2xl contact-phonenum" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}