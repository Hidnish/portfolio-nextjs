import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Dede from '../public/assets/hideo.jpg';

const About = () => {
	return (
		<div
			id="about"
			className="w-[90%] md:w-[76%] mx-auto mt-10 lg:mt-auto md:h-screen p-2 flex items-center py-16"
		>
			<div className="max-w-[1240px] m-auto lg:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#57b099]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					{/* <p className="py-2 text-gray-600">
						/ / I am not your average developer
					</p> */}
					<p className="py-2 text-gray-600">
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
					<p className="py-2 text-gray-600">
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
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className="w-full max-w-md h-auto m-auto mt-6 lg:mt-auto rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={Dede} className="rounded-full" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
