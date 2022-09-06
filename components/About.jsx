import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Dede from '../public/assets/hideo.jpg';
import { ImFolderDownload } from 'react-icons/im';
import { AiOutlineProject } from 'react-icons/ai';

const About = () => {
	return (
		<section
			id="about"
			className="w-[90%] md:w-[85%] lg:h-[100vh] mx-auto p-2 flex items-center py-16"
		>
			<div className="max-w-[1240px] m-auto mt-10 lg:mt-auto lg:grid grid-cols-12 gap-8">
				<div className="col-span-1 lg:flex lg:items-center lg:justify-center lg:border-r border-oltremare lg:mr-3">
					<p className="uppercase text-xl tracking-widest font-extrabold text-oltremare lg:rotate-[-90deg] pb-3">
						About
					</p>
				</div>
				<div className="col-span-7">
					<h2 className="py-4 lg:pb-10 lg:pt-0">Who I Am</h2>
					<p className="pt-2 pb-10 text-gray-400">
						At present, I work as a front-end developer intern for{' '}
						<strong>Bokföringsproffsen AB</strong> while mastering
						React on my own. During the past year I have acquired
						skills in developing e-commerce oriented web
						applications, and have worked on several portfolio
						projects that can be viewed by clicking on the link
						below.
						<br /> My goal as a web developer is to gain foothold in
						the industry, work with a passionate team and never stop
						learning new things!
					</p>
					<a
						href="#projects"
						className="py-3 cursor-pointer hover:text-oltremare ease-in duration-200 flex w-fit"
					>
						Check out of my projects &nbsp; <AiOutlineProject size={25} />
					</a>
					<a
						href="/../public/assets/Hideo_CV_2022.pdf"
						title="resume"
						className="py-3 cursor-pointer hover:text-oltremare ease-in duration-200 flex w-fit"
						download
					>
						Dowload my resume &nbsp; <ImFolderDownload size={20} /> 
					</a>
				</div>
				<div className="col-span-4 w-full max-w-md h-auto m-auto mt-6 lg:mt-auto rounded-full flex items-center justify-center p-4">
					<Image src={Dede} className="rounded-full" alt="/" />
				</div>
			</div>
		</section>
	);
};

export default About;
