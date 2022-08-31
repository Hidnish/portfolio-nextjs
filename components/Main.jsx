import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center bg-gradient-to-b from-[#c0e9ff] to-[#d0a4ff] text-polvere">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="py-3 text-sm tracking-widest text-gray-600">
						Let&apos;s Build Something Great
					</p>
					<h1 className="py-2 text-gray-700">
						Hi I&apos;m{' '}
						<span className="text-oltremare">Hideo</span>,
					</h1>
					<h1 className="py-2 text-gray-700">Junior Full Stack Web Developer</h1>
					<p className="py-6 text-gray-600 max-w-[70%] m-auto m-b-[100px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
							<div className="rounded-full p-3 cursor-pointer hover:bg-[#0072b1] hover:text-white ease-in duration-200">
								<FaLinkedinIn size={20}/>
							</div>
							<div className="rounded-full p-3 cursor-pointer hover:bg-github hover:text-white ease-in duration-200">
								<FaGithub size={20}/>
							</div>
							<div className="rounded-full p-3 cursor-pointer hover:bg-amber-500 hover:text-white ease-in duration-200">
								<HiOutlineMail size={20}/>
							</div>
							<div className="rounded-full p-3 cursor-pointer hover:bg-[#C85250] hover:text-white ease-in duration-200">
								<BsPersonLinesFill size={20}/>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
