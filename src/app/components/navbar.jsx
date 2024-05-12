'use client';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Projects', link: '/#projects' },
        { id: 3, text: 'Skills', link: '/skills' },
        { id: 4, text: 'About', link: '/about' },
        { id: 5, text: 'Contact', link: '/contact' },
    ];

    const navbar = <div className='justify-between w-[100dvw] z-10 flex items-center'>
        <div id="logo" className="flex relative">
            <a href="/">
                <img
                    src="/logo.png"
                    width={100}
                    alt="Logo"
                    className='drop-shadow-2xl'
                />
            </a>
        </div>

        <nav className="relative hidden md:flex flex flex-row gap-4 text-white text-right w-auto absolute font-serif font-medium">
            {navItems.map(item => (
                <a
                    key={item.id}
                    className='py-2 px-4 font-bold hover:text-black hover:bg-white rounded-3xl m-2 cursor-pointer duration-300'
                    href={item.link}
                >
                    {item.text}
                </a>
            ))}
        </nav>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='relative md:hidden z-200 w-[20%] object-right'>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
    </div>


    return (

        <header className="backdrop-blur-sm  w-[100dvw] h-[13dvh] uppercase fixed flex justify-between p-4 max-w-[1240px] mx-auto">

            {navbar}

            {/* Mobile Navigation Menu */}
            <ul
                onClick={handleNav}
                className={
                    nav
                        ? 'bg-[#000000b3] fixed flex-row md:hidden left-0 top-0 w-[100dvw] h-[100dvh] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                <div className='md:hidden flex flex-row w-[100dvw] h-[20dvh] justify-between p-4'>
                    {navbar}
                </div>

                <div className='flex flex-col'>
                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            className='p-4 border-b duration-300 cursor-pointer border-gray-600'
                            href={item.link}

                        >
                            <div className='hover:bg-white w-[25dvw] hover:rounded-xl px-4 py-2 duration-300 hover:text-black'>
                                {item.text}
                            </div>
                        </a>
                    ))}
                </div>

            </ul>

        </header>

    )
}

export default Navbar