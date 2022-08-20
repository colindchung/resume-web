import images from '../../assets/images'
import resume from '../../assets/resume.pdf'
import { Link } from 'react-router-dom'

function Icon(props) {
    return (
        <div className="p-2 mx-3 hover:bg-slate-300 rounded-sm">
            {
                props.download ? (
                    <a href={props.href} target="_blank" rel="noopener noreferrer">
                        <img className="icon-sm" src={images.contact[props.img]}/>
                    </a>
                ) : (
                    <a href={props.href} target="_blank" download>
                        <img className="icon-sm" src={images.contact[props.img]}/>
                    </a>
                )
            }
        </div>
    )
}

function Contact() {
    return (
        <div className="component-container flex flex-col py-20 items-center">
            <div className="flex flex-row">
                <Icon href="https://www.linkedin.com/in/colindchung/" img="linkedInTeal" download={false}/>
                <Icon href="https://github.com/colindchung" img="githubTeal" download={false}/>
                <Icon href="https://devpost.com/colindchung" img="devpostTeal" download={false}/>
                <Icon href={resume} img="resumeTeal" download={true}/>
            </div>
        </div>
    )
}
  
export default Contact;
  