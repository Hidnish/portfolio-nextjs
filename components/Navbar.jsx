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
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/logo.png"
					alt="portfolio logo"
					width="50"
					height="50"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="">
							<li className="ml-10 text-sm hover:border-b">
								Home
							</li>
						</Link>
						<Link href="">
							<li className="ml-10 text-sm hover:border-b ">
								About
							</li>
						</Link>
						<Link href="">
							<li className="ml-10 text-sm hover:border-b ">
								Skills
							</li>
						</Link>
						<Link href="">
							<li className="ml-10 text-sm hover:border-b ">
								Projects
							</li>
						</Link>
						<Link href="">
							<li className="ml-10 text-sm hover:border-b ">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleSide} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
                onClick={handleSide}
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
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
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
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
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Projects</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="tracking-widest text-[#2e6353]">
								Let's connect
							</p>
							<div className="flex item-center justify-between py-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsPersonLinesFill />
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
