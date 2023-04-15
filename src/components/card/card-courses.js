import images from '../../assets/images'
import React, { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import Tooltip from '@mui/material/Tooltip'

function CardCourses(props) {

    const [detailsOpen, toggleDetailsOpen] = useState(false)

    const toggleDetails = () => {
        toggleDetailsOpen(!detailsOpen)
    }


    return (
        <div className="my-5 w-11/12 md:w-9/12 2xl:w-7/12 divide-y bg-slate-300">
            <div className="flex flex-col h-min lg:flex-row divide-x mb-4">
                <div className="flex flex-col lg:w-1/3 py-6 px-5">
                    <div className="font-poppins font-bold">{props.data?.title}</div>
                    <div className="font-poppins">{props.data?.company}</div>
                    <div className="font-poppins text-xs">Final Grade: <b>{props.data?.grade}</b></div>
                    <div className="font-poppins text-xs">{props.data?.date}</div>
                </div>
                <div className="flex flex-col justify-between pr-2 pl-5 md:pl-10 md:pt-6 lg:w-2/3">
                    {/* <div className="text-sm md:text-base text-justify mr-5 md:mr-8"><b>Course Description: </b>{props.data?.description}</div> */}
                    <div className="text-sm md:text-base text-justify mr-5 md:mr-8 indent-8">{props.data?.topics}</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center p-3">
                <div className="font-poppins text-base pr-5 mb-3 md:mb-0">Tech Stack:</div>
                <div className="flex flex-row flex-wrap">
                    {
                        props.data.stack.map(i => (
                            <Tooltip title={i.tooltip}>
                                <img data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" className="icon-sm mx-3 my-1" src={images.logos[i.img]} alt="tech logo" key={i.img}/>
                            </Tooltip>
                        ))
                    }   
                </div>
            </div>
        </div>
    );
  }
  
  export default CardCourses;
  