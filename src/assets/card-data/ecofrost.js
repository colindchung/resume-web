const data = {
    title: "Technical Lead",
    company: "Ecofrost Heating and Cooling",
    date: "Jan 2021 - May 2021",
    location: "Mississauga, Ontario",
    description: "Ecofrost Heating and Cooling Solutions is a local HVAC (heating, ventilation, air conditioning) business located in the GTA. I am in charge of all their technical needs, and I am responsible for all aspects of the technical infrastructure besides the UI design. My primary responsibilities include development, testing, deployment and search engine optimization. As they are planning on opening a physical store, I am also working on fleshing out a new site for them which includes inventory management, online checkout and parts reservation, invoicing and more.",
    bullets: [
        {
            type: "text",
            value: "The notable features of the website include an in-house payment solution to reduce cash payments and processing fees, a parts picker (based on customer's home specifications), integration with Google Business (for reviews, location and hours), and a contact form with reCAPTCHA verification. Currently, I am working on releasing Quickbooks integration to production so that live inventory can be accurate on the website without any manual intervention."
        },
        {
            type: "text",
            value: "Finding a secure host to serve both the frontend and backend was difficult. Keeping cost in mind, I decided to host the frontend in Netlify and the backend using a Docker container hosted in a load-balanced AWS Elastic Beanstalk instance. The backend uses ACM for certificate management, API Gateway for rate limiting and Supabase for the primary relational database."

        },
        {
            type: "text",
            value: "The last aspect of the development process was search engine optimization (SEO). Since Ecofrost is a small business, it is important that they gain exposure through Google search results. One of the largest issues with React is that it renders on the client side, and thus appears to be an empty site for web crawlers. To improve SEO, I migrated the application to Next.js so that the website renders server side. There were many other optimizations such as integration with Google Business, mobile-responsiveness, keywords and performance tuning which help the business get more clicks."
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
            tooltip: "Supabase",
            img: "supabase"
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
            tooltip: "Figma",
            img: "figma"
        },
        {
            tooltip: "reCAPTCHA",
            img: "recaptcha"
        }
    ],
    links: [
        {
            label: "website",
            url: "https://www.Ecofrostheating.com",
            seq: 1
        }
    ]
}

export default data