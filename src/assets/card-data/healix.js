const data = {
    title: "Healix",
    company: "DeltaHacks VI",
    date: "Jan 2020",
    location: "Hamilton, Ontario",
    description: "Healix is a product I made with two other peers at DeltaHacks 2020. It is a digital therapy solution that allows users to take therapy sessions from the comfort of their home. Since there is stigma around mental health and also an emphasis on online resources due to the pandemic, it would be useful to allow people to take AI powered therapy sessions at their own comfort. At a high level, the application allows people to record videos answering prompts about their mental health, analyze their emotions and deliver some principal data that could be useful for therapists to improve their sessions.",
    bullets: [
        {
            type: "text",
            value: "For this project, I was primarily responsible for handling the data. This includes querying to get all the data for sessions, questions and recording responses. The other form of data was capturing live video footage of the end user when they answer prompts, encoding it and sending it to our backend AI endpoint. The AI returned a response object which gave us insights on the emotions that the person had based on their facial expressions in the video."
        },
        {
            type: "text",
            value: "Specifically, we used React for the web application and Chart.js for the visualization of the data. Once the video footage was analyzed, we parsed the response object and displayed some metrics on the dashboard that can be viewed by both the therapist and patient. For example, we created a pie chart which breaks down the different emotions that were analyzed from the video footage."
        }
    ],
    stack: [
        "react",
        "firebase",
        "chartjs",
        "python",
        "flask",
        "numpy"
    ],
    links: [
        {
            label: "GitHub",
            url: "https://github.com/colindchung/DeltahacksVI",
            seq: 1
        },
        {
            label: "Devpost",
            url: "https://devpost.com/software/healix-xi3617",
            seq: 2
        }
    ]
}

export default data