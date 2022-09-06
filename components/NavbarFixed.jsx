import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import {
	AiOutlineHome,
	AiOutlineProject,
	AiOutlinePhone,
} from 'react-icons/ai';
import { BiUser, BiCodeAlt } from 'react-icons/bi';
import { useScrollspy } from '../hooks/useScrollSpy';

const NavbarFixed = () => {
	const ids = ['main', 'about', 'skills', 'projects', 'contacts'];
	const activeId = useScrollspy(ids, 80);
	const scrollPos = useScrollPosition();
	const visibility = scrollPos ? "visible opacity-1" : "invisible opacity-0 transition-opacity linear duration-500"

	return (
		<nav
			className={`${visibility} bg-[rgba(0,0,0,.5)] flex py-2 px-2 z-[3] w-max fixed left-[50%] translate-x-[-50%] bottom-8 rounded-full backdrop-blur-md text-grigello`}
			style={{ transition: 'visibility 0.4s, opacity 0.4s linear' }}
		>
			<a
				href="#main"
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeId === 'main' ? 'text-white bg-[rgba(0,0,0,.7)]' : ''
				}`}
			>
				<AiOutlineHome size={24} />
			</a>
			<a
				href="#about"
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeId === 'about' ? 'text-white bg-[rgba(0,0,0,.7)]' : ''
				}`}
			>
				<BiUser size={24} />
			</a>
			<a
				href="#skills"
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeId === 'skills'
						? 'text-white bg-[rgba(0,0,0,.7)]'
						: ''
				}`}
			>
				<BiCodeAlt size={24} />
			</a>
			<a
				href="#projects"
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeId === 'projects'
						? 'text-white bg-[rgba(0,0,0,.7)]'
						: ''
				}`}
			>
				<AiOutlineProject size={24} />
			</a>
			<a
				href="#contacts"
				className={`bg-transparent p-2 mx-1 rounded-full flex text-base hover:text-white ${
					activeId === 'contacts'
						? 'text-white bg-[rgba(0,0,0,.7)]'
						: ''
				}`}
			>
				<AiOutlinePhone size={24} />
			</a>
		</nav>
	);
};

export default NavbarFixed;
