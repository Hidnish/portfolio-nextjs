import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Python from '../public/assets/skills/python.png';
import Django from '../public/assets/skills/django.png';
import Flask from '../public/assets/skills/flask.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import EditorX from '../public/assets/skills/editorx.png';
import Mongo from '../public/assets/skills/mongo.png';
import SkillTag from './subComponents/SkillTag';

const Skills = () => {
	return (
		<div
			id="skills"
			className="p-2 w-[90%] md:w-[85%] lg:h-[100vh] mx-auto flex flex-col justify-center"
		>
			<div className="max-w-[1240px] lg:grid grid-cols-12 lg:gap-8">
				<div className="col-span-1 lg:flex lg:items-center lg:justify-center lg:border-r lg:border-oltremare lg:mr-3">
					<p className="uppercase text-xl tracking-widest font-extrabold text-oltremare lg:rotate-[-90deg] pb-3">
						Skills
					</p>
				</div>
				<div className="col-span-11">
					<h2 className="py-4 lg:pb-10 lg:pt-0 mb-4">What I Can Do</h2>
					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-4 md:gap-6">
						<SkillTag img={Html} title="HTML" />
						<SkillTag img={Css} title="CSS" />
						<SkillTag img={Javascript} title="JavaScript" radius={10} />
						<SkillTag img={ReactImg} title="React - React Native" />
						<SkillTag img={Tailwind} title="Tailwindcss" />
						<SkillTag img={Bootstrap} title="Bootstrap" />
						<SkillTag img={Python} title="Python" />
						<SkillTag img={Flask} title="Flask" radius={10} />
						<SkillTag img={Django} title="Django" />
						<SkillTag img={Mongo} title="MongoDB" />
						<SkillTag img={EditorX} title="EditorX" radius={10} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
