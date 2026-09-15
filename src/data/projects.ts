
export interface Project {
    id: number;
    title: string;
    slug: string;
    location: string;
    type: string;
    status: "ongoing" | "completed";
    description: string;
    mainImage: string;
    images: string[];
    video: string | null;
}

export const projects = {
    title: "Projects",

    description:
        "Explore our thoughtfully planned residential projects, offering well-located plots designed for comfortable living and long-term value.",

    items: [
        {
            id: 1,
            title: "Green Valley",
            slug: "green-valley",
            location: "Hyderabad, Telangana",
            type: "Villa Plots",
            status: "ongoing",

            description:
                "A peaceful residential community offering spacious villa plots in a well-planned environment.",

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp",

            images: [
                "/images/projects/green-valley/image-1.jpg",
                "/images/projects/green-valley/image-2.jpg",
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

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp",

            images: [
                "/images/projects/sunrise-enclave/image-1.jpg",
                "/images/projects/sunrise-enclave/image-2.jpg",
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
            status: "ongoing",

            description:
                "Ready-to-build plots in a thoughtfully designed community with convenient access to essential amenities.",

            mainImage: "https://res.cloudinary.com/ivenkatravipati/image/upload/v1789397988/heroImg.webp",

            images: [
                "/images/projects/lakeview-gardens/image-1.jpg",
                "/images/projects/lakeview-gardens/image-2.jpg",
                "/images/projects/lakeview-gardens/image-3.jpg",
            ],

            video: "/videos/projects/lakeview-gardens.mp4",
        },
    ] as Project[],
};
