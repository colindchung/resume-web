import images from '../../assets/images';

function About() {
    return (
        <div className="component-container min-h-screen flex flex-col py-36 justify-center items-center">
            <div className="font-poppins text-4xl">ABOUT</div>
            <div className="rounded flex flex-col md:flex-row justify-evenly items-center pt-10 px-10">
                <img className="animate-wipe w-full headshot max-w-xs" src={images.headshot} alt="LinkedIn Headshot"/>
                <div className="md:ml-20 py-4 max-w-lg">
                    <p className="text-gray-700 text-lg text-justify md:indent-16" style={{ fontFamily: "'Poppins', sans-serif"}}>
                        I'm a Computer Engineering student at the University of Waterloo and a Software Engineer at Wish. I am seeking SWE internship opportunities for Fall 2022 and new graduate opportunities for May 2023. I have skills and a passion for full-stack development, database design, application security and web development. In my personal time, you might find me cycling, playing basketball, playing tennis, watching movies or listening to hip hop music.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About