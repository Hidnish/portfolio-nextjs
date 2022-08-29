import React from 'react';
// import './navbar.css';
import { AiOutlineHome, AiOutlineProject, AiOutlinePhone } from 'react-icons/ai';
import { BiUser, BiCodeAlt } from 'react-icons/bi';


import { useState } from 'react';

const NavbarFixed = ({visibility}) => {
	const [activeNav, setActiveNav] = useState('#top');

	return (
		<nav
			className={`${visibility} bg-[rgba(0,0,0,.3)] flex py-2 px-2 z-[2] w-max fixed left-[50%] translate-x-[-50%] bottom-8 gap-01 rounded-full backdrop-blur-md`}
            style={{transition: "visibility 0.4s, opacity 0.4s linear"}}
		>
			<a
				href="#top"
				onClick={() => setActiveNav('#top')}
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeNav === '#top' ? 'text-white bg-[rgba(0,0,0,.4)]' : ''
				}`}
			>
				<AiOutlineHome size={24} />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeNav === '#about' ? 'text-white bg-[rgba(0,0,0,.4)]' : ''
				}`}
			>
				<BiUser size={24} />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav('#skills')}
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeNav === '#skills' ? 'text-white bg-[rgba(0,0,0,.4)]' : ''
				}`}
			>
				<BiCodeAlt size={24} />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav('#services')}
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeNav === '#services' ? 'text-white bg-[rgba(0,0,0,.4)]' : ''
				}`}
			>
				<AiOutlineProject size={24} />
			</a>
			<a
				href="#contacts"
				onClick={() => setActiveNav('#contact')}
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeNav === '#contact' ? 'text-white bg-[rgba(0,0,0,.4)]' : ''
				}`}
			>
				<AiOutlinePhone size={24} />
			</a>
		</nav>
	);
};

export default NavbarFixed;
