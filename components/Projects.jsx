import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Flame from '../public/assets/projects/flame.jpeg';
import DaMovies from '../public/assets/projects/damovies.jpeg';
import Kyoto from '../public/assets/projects/kyotodnn.jpeg';
import Shutter from '../public/assets/projects/shutterspeedi.jpeg';
import ProjectItem from './subComponents/ProjectItem';

const Projects = () => {
	return (
		<div
			id="projects"
			className="w-[90%] md:w-[85%] lg:h-[100vh] mx-auto flex flex-col justify-center"
		>
			<div className="max-w-[1240px] mx-auto px-2 py-16 lg:grid grid-cols-12 lg:gap-8">
				<div className="col-span-1 lg:flex lg:items-center lg:justify-center lg:border-r lg:border-oltremare lg:mr-3">
					<p className="uppercase text-xl tracking-widest font-extrabold text-oltremare lg:rotate-[-90deg] pb-3">
						Projects
					</p>
				</div>
				<div className="col-span-11">
					<h2 className="py-4 lg:pb-10 lg:pt-0">
						What I&apos;ve Built
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<ProjectItem
							title="ShutterSpeedi Photography"
							backgroundImg={Shutter}
							projectUrl="/property"
							tech="HTML, CSS"
						/>
						<ProjectItem
							title="Kyoto Day'n'Night"
							backgroundImg={Kyoto}
							projectUrl="/crypto"
							tech="HTML, CSS, JS"
						/>
						<ProjectItem
							title="DaMovies"
							backgroundImg={DaMovies}
							projectUrl="/netflix"
							tech="HTML, CSS, JS, Python(Flask)"
						/>
						<ProjectItem
							title="Flame"
							backgroundImg={Flame}
							projectUrl="/twitch"
							tech="HTML, CSS, JS, Python(Django)"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
