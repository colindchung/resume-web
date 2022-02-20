const data = {
    title: "BiLLy",
    company: "RUHacks 2019",
    date: "May 2019",
    location: "Toronto, Ontario",
    description: "BiLLy is a product I made with three other peers at RUHacks 2019. It is a bill and receipt management web application which helps the end user manage their expenses. This application allows users to scan their receipts and upload them to the dashboard. Using the Google Vision OCR Engine, we are able to read the receipts from the picture and automate the data entry process.",
    bullets: [
        {
            type: "text",
            value: "One of my main responsibilities was to parse the response object from the Google Vision OCR endpoint. We needed to filter out fields from the raw data which was very tricky since every bill and receipt is formatted differently and images might be slanted or misoriented. Using regular expressions, we were able to correctly extract the necessary information for a small sample set of receipts."
        },
        {
            type: "text",
            value: "I also had to design and create the user interface for the home screen. I created the tables and data models in order to display data about all the receipts that have been logged. Once we received the raw data from the Google Vision OCR endpoint and parsed it, we needed to log important data and contextual information to the MongoDB database and also display it on the web application."
        }
    ],
    stack: [
        {
            tooltip: "MongoDB",
            img: "mongodb"
        },
        {
            tooltip: "Express.js",
            img: "express"
        },
        {
            tooltip: "React",
            img: "react"
        },
        {
            tooltip: "Node.js",
            img: "node"
        },
        {
            tooltip: "Google Cloud Vision",
            img: "googleVision"
        }
    ],
    links: [
        {
            label: "GitHub",
            url: "https://github.com/colindchung/BiLLy",
            seq: 1
        }
    ]
}

export default data