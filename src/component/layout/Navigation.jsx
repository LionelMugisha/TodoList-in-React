import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        
        <nav className="mt-1 ">
            <Link to="/" className="">| Home</Link>
            <Link to="add" className="ml-3 ">| Add</Link>
            <Link to="contact" className="ml-3 ">| Contact Us</Link>
            <Link to="about" className="ml-3 ">| About Us |</Link>
        </nav>
    );

}

export default Navigation;