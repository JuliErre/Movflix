import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar() {
    const[show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 50){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[])

    return (
        <nav className={ `h-24 fixed w-full top-0 p-5 z-40 duration-700 ${show && 'bg-neutral-900 '}`}>
            <div className=' flex flex-row justify-between'>
               <Link to="/"> <img className='h-12 ml-10 fixed left-0 cursor-pointer' src="https://i.ibb.co/Cv0ShGC/Movflix-M.png" alt="" /></Link>
                <img className='h-12 fixed right-4 cursor-pointer' src="https://i.ibb.co/pyRZg7d/Netflix-User.png" alt="" />
                <SearchBar/>
            </div>

        </nav>
    )
}

export default Navbar