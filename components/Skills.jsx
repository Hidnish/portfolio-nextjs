import React from 'react';
import Image from 'next/image';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Python from '../public/assets/skills/python.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import EditorX from '../public/assets/skills/editorx.png';
import Mongo from '../public/assets/skills/mongo.png';

const Skills = () => {
	return (
		<div id="skills" className="p-2 w-[90%] md:w-[85%] lg:h-[100vh] mx-auto flex items-center">
			<div className="max-w-[1240px] flex flex-col justify-center lg:grid grid-cols-12 gap-8 ">
				<div className="col-span-1 flex items-center lg:justify-center rounded-full lg:bg-gradient-to-b from-[#add2e6] to-[#bd95e8]">
					<p className="uppercase text-xl tracking-widest font-extrabold text-[#57b099] lg:text-[#ecf0f3] lg:rotate-[-90deg]">
						Skills
					</p>
				</div>
				<div className="col-span-11">
					<h2 className="py-4">What I Can Do</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
						<div className="flex justify-center p-6 drop-shadow rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Html}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Css}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Javascript}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={ReactImg}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Tailwind}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Bootstrap}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Python}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={Mongo}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
						<div className="flex justify-center p-6 shadow-md rounded-full h-32 w-32 hover:scale-105 ease-in duration-300">
							<div className="m-auto">
								<Image
									src={EditorX}
									width="64px"
									height="64px"
									alt="/"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
