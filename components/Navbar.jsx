import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { ImFolderDownload } from 'react-icons/im';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleSide = (e) => {
		e.preventDefault();
		setNav(!nav);
	};

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.overflow = nav ? 'hidden' : 'auto';
	}, [nav]);

	return (
		<section id="top" className="w-full h-14 z-[100] bg-[#c0e9ff] text-polvere">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				{/* <Image
					src="/../public/assets/logo.png"
					alt="portfolio logo"
					width="40"
					height="40"
					className="ml-6"
				/> */}
				<h2 className="italic text-gray-700">HN</h2>
				<div>
					<ul className="hidden md:flex mr-6">
						<Link href="#about">
							<li className="ml-5 text-sm p-2 rounded-xl hover:text-oltremare ">
								About
							</li>
						</Link>
						<Link href="#skills">
							<li className="ml-5 text-sm p-2 rounded-xl hover:text-oltremare ">
								Skills
							</li>
						</Link>
						<Link href="#projects">
							<li className="ml-5 text-sm p-2 rounded-xl hover:text-oltremare">
								Projects
							</li>
						</Link>
						<Link href="#contacts">
							<li className="ml-5 text-sm p-2 rounded-xl hover:text-oltremare ">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleSide} className="md:hidden mr-4 rounded-full p-2 hover:bg-github hover:text-white ease-in duration-200">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				onClick={e => handleSide(e)}
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200 z-[100]'
						: ''
				}
			>
				<div
					onClick={e => e.stopPropagation()}
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-linear duration-500 rounded-r-2xl'
							: 'fixed left-[-100%] top-0 p-10 ease-linear duration-500 rounded-r-2xl'
					}
				>
					<div className="border-b border-gray-300 my-4">
						<div className="flex w-full item-center justify-between mb-6">
							<Image
								src="/../public/assets/logo.png"
								alt="logo"
								width="40"
								height="35"
							/>
							<div
								onClick={handleSide}
								className="rounded-full p-3 cursor-pointer hover:bg-github hover:text-white ease-in duration-200"
							>
								<AiOutlineClose />
							</div>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul>
							<Link href="#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm hover:text-oltremare">About</li>
							</Link>
							<Link href="#skills">
								<li onClick={() => setNav(false)} className="py-4 text-sm hover:text-oltremare">Skills</li>
							</Link>
							<Link href="#projects">
								<li onClick={() => setNav(false)} className="py-4 text-sm hover:text-oltremare">Projects</li>
							</Link>
							<Link href="#contacts">
								<li onClick={() => setNav(false)} className="py-4 text-sm hover:text-oltremare">Contact</li>
							</Link>
						</ul>
						<div className="mt-40 border-t border-gray-300">
							<div className="flex item-center justify-between py-4 w-[90%] sm:w-[80%]">
								<a href="https://www.linkedin.com/in/hideo-tommaso-nishimura-5029b0159/" target="_blank" rel="noreferrer" className="rounded-full p-3 cursor-pointer hover:bg-[#0072b1] hover:text-white ease-in duration-200">
									<FaLinkedinIn size={18} />
								</a>
								<a href="https://github.com/Hidnish" target="_blank" rel="noreferrer" className="rounded-full p-3 cursor-pointer hover:bg-github hover:text-white ease-in duration-200">
									<FaGithub size={18} />
								</a>
								<a href="#contacts" target="_blank" rel="noreferrer" className="rounded-full p-3 cursor-pointer hover:bg-[#C85250] hover:text-white ease-in duration-200">
									<BsPersonLinesFill size={18} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
