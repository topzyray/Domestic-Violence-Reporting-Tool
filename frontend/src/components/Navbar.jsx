import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false)

    function handleVisibility() {
        setOpen(!open)
    }

    return(
<<<<<<< HEAD
        <div className="p-6 md:p-8 flex justify-between items-center text-white md:w-full md:max-w-[1280px] md:mx-auto relative">
            <img src="/logo.webp" alt="Logo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
=======
        <div className="p-6 md:p-2 flex justify-between items-center text-white md:w-full md:max-w-[1280px] md:mx-auto relativ">
            <img src="/logo.png" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
>>>>>>> a200dbd070c1a5ea0aa90f999b55119fd6b86502
            <nav className="hidden md:flex">
                <ul className="flex gap-6">
                    <Link to='/'>Report Now</Link>
                    <Link to='/resources'>Resources</Link>
                    <Link to='/safetyTips'>Safety Tips</Link>
                </ul>
            </nav>
            { open ? <AiOutlineClose className="h-6 w-6 md:hidden" onClick={handleVisibility}/> : <FiAlignJustify className="w-6 h-6 md:hidden" onClick={handleVisibility}/>}
            <div className={`flex flex-col absolute md:hidden top-14 right-0 items-center bg-[#967ced] text-white z-10 w-3/5 max-w-[285px] h-[450px] gap-6 pt-5 rounded-md ${open ? 'opacity-100 scale-100 transform transition-all duration-200 ease-out' : 'opacity-0 pointer-events-none'}`}>
                <Link to='/' className="text-xl font-semibold">Report Now</Link>
                <Link to='/resources' className="text-xl font-semibold">Resources</Link>
                <Link to='/safetyTips' className="text-xl font-semibold">Safety Tips</Link>
            </div>
        </div>
    );
}