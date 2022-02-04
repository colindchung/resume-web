import images from '../../assets/images'
import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'

function CardProjects(props) {

    const [detailsOpen, toggleDetailsOpen] = useState(false)

    const toggleDetails = () => {
        toggleDetailsOpen(!detailsOpen)
    }


    return (
        <div className="my-5 w-9/12 divide-y bg-slate-300">
            <div className="flex flex-col lg:flex-row divide-x">
                <div className="flex flex-col lg:w-1/3 pt-5 pb-2 px-5 justify-between">
                    <div>
                        <div className="font-poppins font-bold">{props.data?.title}</div>
                        <div className="font-poppins">{props.data?.company}</div>
                        <div className="font-poppins text-xs">{props.data?.date}</div>
                    </div>
                    <div className="font-poppins text-xs justify-self-end">
                        Check out the 
                        {
                            props.data?.links.map(link => (
                                <span className="ml-1">{ link.seq > 1 ? "or " : ""}<a target="_blank" rel="noopener noreferrer" className="underline" href={link.url}>{link.label}</a></span>
                            ))
                        }
                    </div>
                    {/* <img className="max-w-2xs pt-5" alt="company logo" src={images.companies[props.data.logo]}/> */}
                </div>
                <div className="flex flex-col justify-between pr-2 pl-5 md:pl-10 md:pt-6 pb-2 lg:w-2/3">
                    <div className="text-sm md:text-base text-justify mr-5 md:mr-8 indent-8">{props.data?.description}</div>
                    <Collapse in={detailsOpen}>
                        {
                            props.data?.bullets.map(b => (
                                <div className='pt-2 text-sm md:text-base text-justify mr-5 md:mr-8 indent-8' key={b.slice(10)}>{b}</div>
                            ))
                        }
                    </Collapse>
                    <button 
                        className="self-end bg-slate-300 hover:bg-gray-400 text-gray-800 font-bold mt-2 mb-2 py-2 px-4 rounded inline-flex items-center"
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
  
  export default CardProjects;
  