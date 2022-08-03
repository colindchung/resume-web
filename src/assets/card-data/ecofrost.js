const data = {
    title: "Technical Lead",
    company: "EcoFrost Heating and Cooling",
    date: "Jan 2021 - May 2021",
    location: "Mississauga, Ontario",
    description: "EcoFrost Heating and Cooling Solutions is a local HVAC (heating, ventilation, air conditioning) business located in the GTA. I was the developer for their website, and I was responsible for all aspects of the production besides the UI design. My primary responsibilities included development, testing, deployment and search engine optimization.",
    bullets: [
        {
            type: "text",
            value: "The first task in building the website was taking the design and replicating it in the front end and making it responsive to properly render on both desktop and mobile devices. Next, I had to set up the backend to respond to requests for filtering and return data about the products, forward email messages sent from the client and verifying reCaptchas."
        },
        {
            type: "text",
            value: "Finding a secure host to serve both the frontend and backend was difficult. Keeping cost in mind, I decided to host the frontend in Netlify and the backend using a Docker container hosted in an AWS ECS cluster. The backend uses ACM for certificate management and MongoDB for the database."

        },
        {
            type: "text",
            value: "The last aspect of the development process was search engine optimization (SEO). Since EcoFrost is a small business, it is important that they gain exposure through showing up on Google search results. One of the largest issues with a standard React app is that by default, it renders on the client side, and thus appears to be an empty site for web crawlers. To improve SEO, I migrated the application to Next.js so that the website renders server side. There were many other small optimizations such as the types of DOM elements and attributes we used, metadata and keyword optimization, mobile-friendliness and performance tuning."
        }
    ],
    stack: [
        {
            tooltip: "Next.js",
            img: "next"
        },
        {
            tooltip: "Tailwind CSS",
            img: "tailwindcss"
        },
        {
            tooltip: "Node.js",
            img: "node"
        },
        {
            tooltip: "MongoDB",
            img: "mongodb"
        },
        {
            tooltip: "Docker",
            img: "docker"
        },
        {
            tooltip: "Netlify",
            img: "netlify"
        },
        {
            tooltip: "AWS",
            img: "aws"
        },
        {
            tooltip: "reCAPTCHA",
            img: "recaptcha"
        }
    ],
    links: [
        {
            label: "website",
            url: "https://www.ecofrostheating.com",
            seq: 1
        }
    ]
}

export default data