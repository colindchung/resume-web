import images from '../../assets/images'
import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'

function CardWork(props) {

    const [detailsOpen, toggleDetailsOpen] = useState(false)

    const toggleDetails = () => {
        toggleDetailsOpen(!detailsOpen)
    }


    return (
        <div className="my-5 w-11/12 md:w-9/12 divide-y bg-slate-300">
            <div className="flex flex-col h-min lg:flex-row divide-x">
                <div className="flex flex-col lg:w-1/3 py-6 px-5">
                    <div className="font-poppins font-bold">{props.data?.title}</div>
                    <div className="font-poppins">{props.data?.company}</div>
                    <div className="font-poppins text-xs">{props.data?.date}</div>
                    <img className="max-w-2xs pt-5" alt="company logo" src={images.companies[props.data.logo]}/>
                </div>
                <div className="flex flex-col justify-between pr-2 pl-5 md:pl-10 md:pt-6 pb-2 lg:w-2/3">
                    <div className="text-sm md:text-base text-justify mr-5 md:mr-8 indent-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <Collapse in={detailsOpen}>
                        <div className='pt-2 text-sm md:text-base text-justify mr-5 md:mr-8 indent-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl at gravida suscipit, arcu orci dictum orci, eget bibendum ipsum urna et mauris. Quisque sit amet ornare nibh, ut rutrum ante. Aliquam porttitor tellus nec feugiat viverra. Quisque condimentum condimentum quam, ac cursus enim ornare sed. Vestibulum sed est in orci venenatis pharetra imperdiet porttitor sapien. Sed elementum nec risus tempor accumsan. Integer gravida lorem vel maximus scelerisque. Duis pellentesque malesuada venenatis.</div>
                        <div className='pt-2 text-sm md:text-base text-justify mr-5 md:mr-8 indent-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl at gravida suscipit, arcu orci dictum orci, eget bibendum ipsum urna et mauris. Quisque sit amet ornare nibh, ut rutrum ante. Aliquam porttitor tellus nec feugiat viverra. Quisque condimentum condimentum quam, ac cursus enim ornare sed. Vestibulum sed est in orci venenatis pharetra imperdiet porttitor sapien. Sed elementum nec risus tempor accumsan. Integer gravida lorem vel maximus scelerisque. Duis pellentesque malesuada venenatis.</div>
                        <div className='pt-2 text-sm md:text-base text-justify mr-5 md:mr-8 indent-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit, nisl at gravida suscipit, arcu orci dictum orci, eget bibendum ipsum urna et mauris. Quisque sit amet ornare nibh, ut rutrum ante. Aliquam porttitor tellus nec feugiat viverra. Quisque condimentum condimentum quam, ac cursus enim ornare sed. Vestibulum sed est in orci venenatis pharetra imperdiet porttitor sapien. Sed elementum nec risus tempor accumsan. Integer gravida lorem vel maximus scelerisque. Duis pellentesque malesuada venenatis.</div>
                    </Collapse>
                    <button 
                        className="self-end bg-slate-300 hover:bg-gray-400 text-gray-800 font-bold mb-2 py-2 px-4 rounded inline-flex items-center"
                        onClick={toggleDetails}
                    >
                        <img className="icon-xs pr-2" src={ detailsOpen ? images.svg.upArrow : images.svg.downArrow} alt="down-arrow"/>
                        <span>{ detailsOpen ? "Read Less" : "Read More" }</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center p-3">
                <div className="font-poppins text-base pr-5">Tech Stack:</div>
                {
                    props.data.stack.map(img => (
                        <img className="icon-sm mx-3 my-1" src={images.logos[img]} alt="tech logo" key={img}/>
                    ))
                }
            </div>


        </div>
    );
  }
  
  export default CardWork;
  