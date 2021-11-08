import React from 'react';
import Logo from "../images/1.jpg";

const About = () => {
    return (
        <div className="flex justify-between">
            <div className="">
                <h1 className="font-semibold text-lg text-purple-500 ml-20 mt-8">WHO ARE WE</h1>
                <p className="mt-2 ml-12">
                    Lorem ipsum dolor sit amet consectetur <br/> 
                    adipisicing elit. Maxime, laborum. <br/>
                    Optio eos totam cum ab possimus! 
                </p>
                <button className="mt-4 shadow bg-purple-500 hover:bg-purple-400 ml-12 rounded-lg text-white border w-48 h-12">
                    Read More
                </button>
            </div>
            <div className="mr-12 mt-4">
                <img src={Logo} alt="Logo" width="280" height="300" />
            </div>
        </div>
    )
}

export default About;