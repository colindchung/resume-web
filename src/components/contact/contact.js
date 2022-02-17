import images from '../../assets/images'

function Icon(props) {
    return (
        <div className="p-3 mx-3 hover:bg-teal-500 rounded-sm">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img className="icon-sm" src={images.contact[props.img]}/>
            </a>
        </div>
    )
}

function Contact() {
    return (
        <div className="component-container flex flex-col py-20 items-center bg-slate-700">
            <div className="flex flex-row">
                <Icon href="https://www.linkedin.com/in/colindchung/" img="linkedIn"/>
                <Icon href="https://github.com/colindchung" img="github"/>
                <Icon href="https://devpost.com/colindchung" img="devpost"/>
                <Icon href="https://www.instagram.com/colindchung/" img="instagram"/>
            </div>
        </div>
    )
}
  
export default Contact;
  