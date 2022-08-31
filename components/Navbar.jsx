import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleSide = () => {
		setNav(!nav);
	};

	return (
		<div id="top" className="w-full h-14 z-[100] bg-[#c0e9ff] text-polvere">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/logo.png"
					alt="portfolio logo"
					width="40"
					height="40"
					className="ml-6"
				/>
				<div>
					<ul className="hidden md:flex mr-6">
						<Link href="">
							<li className="ml-5 text-sm p-2 rounded-xl hover:bg-github hover:text-white">
								Home
							</li>
						</Link>
						<Link href="">
							<li className="ml-5 text-sm p-2 rounded-xl hover:bg-github hover:text-white ">
								About
							</li>
						</Link>
						<Link href="">
							<li className="ml-5 text-sm p-2 rounded-xl hover:bg-github hover:text-white ">
								Skills
							</li>
						</Link>
						<Link href="">
							<li className="ml-5 text-sm p-2 rounded-xl hover:bg-github hover:text-white">
								Projects
							</li>
						</Link>
						<Link href="">
							<li className="ml-5 text-sm p-2 rounded-xl hover:bg-github hover:text-white ">
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
				onClick={handleSide}
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-200'
						: ''
				}
			>
				<div
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
						{/* <div className="border-b border-gray-300 my-4">
                            <p className="w-[45%] md:w-[90%] py-4">
                                Pick One
                            </p>
                        </div> */}
					</div>
					<div className="py-4 flex flex-col">
						<ul>
							<Link href="/">
								<li className="py-4 text-sm hover:text-oltremare">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm hover:text-oltremare">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm hover:text-oltremare">Skills</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm hover:text-oltremare">Projects</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm hover:text-oltremare">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="tracking-widest text-[#2e6353]">
								Let&apos;s connect
							</p>
							<div className="flex item-center justify-between py-4 w-[90%] sm:w-[80%]">
								<div className="rounded-full p-3 cursor-pointer hover:bg-[#0072b1] hover:text-white ease-in duration-200">
									<FaLinkedinIn size={18} />
								</div>
								<div className="rounded-full p-3 cursor-pointer hover:bg-github hover:text-white ease-in duration-200">
									<FaGithub size={18} />
								</div>
								<div className="rounded-full p-3 cursor-pointer hover:bg-amber-500 hover:text-white ease-in duration-200">
									<AiOutlineMail size={18} />
								</div>
								<div className="rounded-full p-3 cursor-pointer hover:bg-[#C85250] hover:text-white ease-in duration-200">
									<BsPersonLinesFill size={18} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
