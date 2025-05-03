import {  Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { IoSearch } from "react-icons/io5";
import {  useState } from "react";
import { navigation } from "../constants/navigation";
export default function Header()
{
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    const [searchInput, setSearchInput] = useState(query ?? "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchInput.trim() !== "")
            navigate(`/search?q=${searchInput.trim()}`);
    }

    return (
        <header className='fixed top-0 w-full h-16 bg-black opacity-50 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        width={120}
                        
                    />
                </Link>
                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                        {
                            navigation.map((nav) => {
                                return(
                                    <div key={nav.label}>
                                        <NavLink to={nav.href} className={({ isActive }) => `px-2 hover:text-white ${isActive ? "text-white" : ""}`}>
                                            {nav.label}
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                </nav>
                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Search here..."
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white hidden lg:block' type="submit">
                            <IoSearch/>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}