import React from 'react';
import ProjectItem from './subComponents/ProjectItem';
import { projects } from '../content/projects';

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-[90%] md:w-[85%] lg:h-[100vh] lg:mb-20 mx-auto flex flex-col justify-center"
		>
			<div className="max-w-[1240px] mx-auto px-2 py-16 lg:grid grid-cols-12 lg:gap-8">
				<div className="col-span-1 lg:flex lg:items-center lg:justify-center lg:border-r lg:border-oltremare lg:mr-3">
					<p className="uppercase text-xl tracking-widest font-extrabold text-oltremare lg:rotate-[-90deg] pb-3">
						Projects
					</p>
				</div>
				<div className="col-span-11">
					<h2 className="py-4 lg:pb-10 lg:pt-0 mb-4">
						What I&apos;ve Built
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project, i) => {
							return (
								<ProjectItem
									key={i}
									title={project.title}
									backgroundImg={project.image}
									description={project.description}
									tech={project.tech}
									techStack={project.techStack}
									demo={project.demo}
									code={project.code}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
