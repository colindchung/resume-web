import headshot from '../../assets/about/headshot.jpg'

function About() {
    return (
        <div className="component-container">
            <div className="component-title">ABOUT</div>
            <div class="max-w-md rounded flex-row overflow-hidden pt-20">
                <img class="w-full headshot" src={headshot} alt="Sunset in the mountains"/>
                <div class="py-4">
                    <p class="text-gray-700 text-lg text-justify" style={{ fontFamily: "'Poppins', sans-serif"}}>
                        I'm a Computer Engineering student at The University of Waterloo and a Software Engineer at Wish, I have a passion for full-stack development, teaching and tutoring, basketball, tennis and cycling.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About