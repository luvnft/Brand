import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <main className="flex justify-between px-5 py-5 mt-10 text-xs border-t background sm:px-10 md:px-15 xl:px-20 md:text-sm xl:text-base border-bgDark">
            <div className="flex flex-wrap gap-2 md:gap-3 xl:gap-5">
                <Link to="/" className="text-white">Home</Link>
                <Link to="/create" className="text-white">Create Campaign</Link>
                <Link to="/view" className="text-white">View Campiagns</Link>  
            </div>
            <p>All right reserved &copy; AFF 2024</p>
        </main>
     );
}
 
export default Footer;