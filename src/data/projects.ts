
export interface Project {
    id: number;
    title: string;
    slug: string;
    location: string;
    type: string;
    availablePlots?: number;
    plotSizes?: string;
    status: "ongoing" | "completed";
    description: string;
    body: string;
    mainImage: string;
    projectHighlights: string[];
    locationHighlights: string[];
    images: string[];
    video: string | null;
}

export const projects = {
    title: "Projects",

    description: "Explore our residential villa plots in well-located areas, perfect for building your dream home.",

    items: [
        {
            id: 1,
            title: "Green Valley",
            slug: "green-valley",
            location: "Hyderabad, Telangana",
            type: "Villa Plots",
            availablePlots: 12,
            plotSizes: "1,800 sq. ft.",
            status: "ongoing",

            description:
                "A peaceful residential community offering spacious villa plots in a well-planned environment.",

            body: "Green Valley offers residential villa plots for families who want to build their own home in a comfortable and well-planned setting. With spacious plots and a residential-focused environment, the project gives you the freedom to design and build your villa according to your lifestyle and preferences.",

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp",

            projectHighlights: [
                "24/7 CCTV surveillance",
                "Dedicated electricity connection",
                "Children's play area",
                "Jogging track",
                "Landscaped green spaces",
                "Internal roads",
                "Street lighting",
                "Gated community",
            ],

            locationHighlights: [
                "25 mins to Rajiv Gandhi International Airport",
                "30 mins to Hyderabad Railway Station",
                "15 mins to Outer Ring Road (ORR)",
                "10 mins to NH 44",
                "35 mins to Hyderabad city center",
                "20 mins to nearest major hospital",
                "15 mins to nearby schools",
            ],

            images: [
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789554099/map.webp",
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789551878/About.webp",
                "/images/projects/green-valley/image-3.jpg",
            ],

            video: "/videos/projects/green-valley.mp4",
        },

        {
            id: 2,
            title: "Sunrise Enclave",
            slug: "sunrise-enclave",
            location: "Hyderabad, Telangana",
            type: "Residential Plots",
            status: "completed",

            description:
                "Well-positioned residential plots ideal for families looking to build their dream home.",

            body: "Sunrise Enclave offers residential plots for families and individuals looking to create a home of their own. The project provides the flexibility to plan and build an independent home based on your requirements, making it suitable for personal living and long-term property ownership.",

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp",

            projectHighlights: [
                "24/7 CCTV surveillance",
                "Dedicated electricity connection",
                "Children's play area",
                "Jogging track",
                "Landscaped green spaces",
                "Internal roads",
                "Street lighting",
                "Gated community",
            ],

            locationHighlights: [
                "25 mins to Rajiv Gandhi International Airport",
                "30 mins to Hyderabad Railway Station",
                "15 mins to Outer Ring Road (ORR)",
                "10 mins to NH 44",
                "35 mins to Hyderabad city center",
                "20 mins to nearest major hospital",
                "15 mins to nearby schools",
            ],

            images: [
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789554099/map.webp",
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789551878/About.webp",
                "/images/projects/sunrise-enclave/image-3.jpg",
            ],

            video: null,
        },

        {
            id: 3,
            title: "Lakeview Gardens",
            slug: "lakeview-gardens",
            location: "Hyderabad, Telangana",
            type: "Ready-to-Build Plots",
            availablePlots: 45,
            plotSizes: "1,350 sq. ft.",
            status: "ongoing",

            description:
                "Ready-to-build plots in a thoughtfully designed community with convenient access to essential amenities.",

            body: "Lakeview Gardens offers ready-to-build residential plots for those looking to build their own villa. The project provides a range of plot options and the freedom to create a home that matches your needs, while its location offers convenient access to everyday facilities and connecting roads.",

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789551878/About.webp",

            projectHighlights: [
                "24/7 CCTV surveillance",
                "Dedicated electricity connection",
                "Children's play area",
                "Jogging track",
                "Landscaped green spaces",
                "Internal roads",
                "Street lighting",
                "Gated community",
            ],

            locationHighlights: [
                "25 mins to Rajiv Gandhi International Airport",
                "30 mins to Hyderabad Railway Station",
                "15 mins to Outer Ring Road (ORR)",
                "10 mins to NH 44",
                "35 mins to Hyderabad city center",
                "20 mins to nearest major hospital",
                "15 mins to nearby schools",
            ],

            images: [
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789554099/map.webp",
                "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789551878/About.webp",
                "/images/projects/lakeview-gardens/image-3.jpg",
            ],

            video: "/videos/projects/lakeview-gardens.mp4",
        },
    ] as Project[],
};
