import { House, MapPinned, HardHat, TrendingUp } from "lucide-react";


export const companyInfo = {
    logo: "VR",
    name: "VR Infra Properties",
    tagline: "Your Land. Your Villa. Your Dream.",

    description:
        "VR Infra Properties is a real estate company specializing in the sale of premium residential villa plots. We offer ready-to-build plots in well-planned locations, giving customers the freedom to build their own dream villa.",

    phone: "+91 XXXXX XXXXX",
    email: "info@example.com",

    address: {
        street: "",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        pincode: "",
    },

    businessHours: {
        mondayToSaturday: "9:00 AM - 6:00 PM",
        sunday: "Closed",
    },
};

export const about = {
    title: "About VR Infra Properties",

    heading: "Find the Perfect Plot for Your Dream Villa",

    description:
        "VR Infra Properties helps families and investors find and purchase premium residential plots suitable for building their dream villas. We focus on offering well-located, ready-to-build villa plots and providing customers with a transparent and reliable land-buying experience.",

    mission:
        "To make quality residential land accessible to families and investors looking for the perfect place to build their dream villa.",

    vision:
        "To become a trusted name in residential plot sales by offering quality properties, promising locations, and a transparent buying experience.",
};

export const services = {
    title: "What We Offer",

    description:
        "We offer thoughtfully selected residential plots in promising locations, giving you the freedom to build your dream home or make a smart long-term investment.",

    items: [
        {
            title: "Villa Plots",
            description:
                "Spacious residential plots ideal for building your dream villa in a peaceful and well-planned community.",
            icon: House,
        },
        {
            title: "Residential Plots",
            description:
                "Well-positioned plots designed for families looking to build a comfortable and modern home.",
            icon: MapPinned,
        },
        {
            title: "Ready-to-Build Plots",
            description:
                "Plots that are ready for you to start planning and building your home according to your vision.",
            icon: HardHat,
        },
        {
            title: "Investment Plots",
            description:
                "Residential plots offering an opportunity for long-term property investment and future growth.",
            icon: TrendingUp,
        },
    ],
};


export const process = {
    title: "How It Works",
    
    description:"A simple and transparent process to help you find and purchase the right villa plot.",

    steps: [
        {
            step: 1,
            title: "Explore Plots",
            description:
                "Browse our available residential and villa plots.",
        },
        {
            step: 2,
            title: "Choose Your Plot",
            description:
                "Select the location and plot that best suits your requirements.",
        },
        {
            step: 3,
            title: "Site Visit",
            description:
                "Visit the property and explore the location and surroundings.",
        },
        {
            step: 4,
            title: "Complete Your Purchase",
            description:
                "Proceed with the documentation and purchase process.",
        },
        {
            step: 5,
            title: "Build Your Dream",
            description:
                "Once you own the land, you can build your villa according to your vision.",
        },
    ],
};