import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';

const Main = () => {
	return (
		<section
			id="main"
			className="w-full h-screen text-center bg-gradient-to-b from-[#c0e9ff] to-[#d0a4ff] text-polvere"
		>
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="py-3 text-sm tracking-widest text-gray-600">
						Let&apos;s Build Something Great Together
					</p>
					<h1 className="pb-0 lg:py-2 text-gray-700">
						Hi I&apos;m{' '}
						<span className="text-oltremare">Hideo</span>,
					</h1>
					<h1 className="py-2 px-2 text-gray-700">
						Junior Full Stack Web Developer
					</h1>
					<p className="py-6 text-gray-600 max-w-[70%] m-auto m-b-[100px]">
						Welcome to my official Portfolio Website. Please take a
						look around and don&apos;t hesitate to contact me for
						collaborations and new project ideas!
					</p>
					<div className="flex items-center justify-center md:justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/hideo-tommaso-nishimura-5029b0159/"
							target="_blank"
							rel="noreferrer"
							className="rounded-full p-3 mx-8 cursor-pointer hover:bg-[#0072b1] hover:text-white ease-in duration-200"
						>
							<FaLinkedinIn size={20} />
						</a>
						<a
							href="https://github.com/Hidnish"
							target="_blank"
							rel="noreferrer"
							className="rounded-full p-3 mx-8 cursor-pointer hover:bg-github hover:text-white ease-in duration-200"
						>
							<FaGithub size={20} />
						</a>
						<a
							href="#contacts"
							className="rounded-full p-3 mx-8 cursor-pointer hover:bg-[#C85250] hover:text-white ease-in duration-200"
						>
							<BsPersonLinesFill size={20} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
