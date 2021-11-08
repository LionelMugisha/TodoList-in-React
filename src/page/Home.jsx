import React from 'react';
import Main from "../component/MainComponent";

const Home = ({todos,handleBntClick}) => {
    return (
        <div className="mt-5">
            <Main todos={todos} handleBntClick={handleBntClick} />
        </div>
    )
}

export default Home;