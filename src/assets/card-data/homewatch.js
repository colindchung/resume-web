const data = {
    title: "HomeWatch",
    company: "Hack The North 2019",
    date: "Sep 2019",
    location: "Waterloo, Ontario",
    github: "https://github.com/colindchung/HomeWatch",
    devpost: "https://devpost.com/software/homewatch",
    description: "HomeWatch is a product I made with three other peers at Hack the North 2019. It is an AI powered home security system that performs facial and license plate recognition to provide more insights than a traditional system. It monitors the door and driveway and performs facial recognition on anyone approaching and parses the license plate of any vehicles that enter the driveway. With this functionality in conjunction with the web and mobile applications we created, homeowners can have full transparency about who is approaching their home.",
    bullets: [
        {
            type: "text",
            value: "I was in charge of designing and developing the mobile application for the product. The mobile app is meant to allow users to log in and see a live history of all people and cars that have recently entered the driveway. I designed and created the login and registration screens and used Firebase Authentication to allow users to log in and sign up for the service."
        },
        {
            type: "text",
            value: "Once the user is logged in, they need to see live data from our Cloud Firestore database. I was in charge of managing the response objects from our Tesseract/OpenCV endpoints and storing them in our database. Then, using Firebase’s Real-Time Database, we were able to consume live updates without refreshing the page."
        }
    ],
    stack: [
        {
            tooltip: "React",
            img: "react"
        },
        {
            tooltip: "React Native",
            img: "react"
        },
        {
            tooltip: "Google Firebase",
            img: "firebase"
        },
        {
            tooltip: "Python",
            img: "python"
        },
        {
            tooltip: "Flask",
            img: "flask"
        },
        {
            tooltip: "OpenCV",
            img: "opencv"
        }
    ],
    links: [
        {
            label: "GitHub",
            url: "https://github.com/colindchung/HomeWatch",
            seq: 1
        },
        {
            label: "Devpost",
            url: "https://devpost.com/software/homewatch",
            seq: 2
        }
    ]
}

export default data