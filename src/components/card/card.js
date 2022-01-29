import images from '../../assets/images'

function CardWork(props) {
    return (
        <div className="my-5 w-9/12 divide-y bg-slate-300">
            <div className="flex flex-row divide-x">
                <div className="flex flex-col w-1/3 py-6 px-5">
                    <div className="font-poppins font-bold">{props.data?.title}</div>
                    <div className="font-poppins">{props.data?.company}</div>
                    <div className="font-poppins text-xs">{props.data?.date}</div>
                    <img className="max-w-2xs pt-5" alt="company logo" src={images.companies[props.data.logo]}/>
                </div>
                <ul className="flex flex-col px-10 py-6 w-2/3 list-disc">
                    {props.data.bullets.map(b => (
                        <li className="font-poppins" key={b}>{b}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-row items-center p-3">
                <div className="font-poppins text-base pr-5">Tech Stack:</div>
                {
                    props.data.stack.map(img => (
                        <img className="icon-sm mx-3" src={images.logos[img]} alt="tech logo" key={img}/>
                    ))
                }
            </div>


        </div>
    );
  }
  
  export default CardWork;
  