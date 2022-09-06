import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from './Modal';


const ProjectItem = (props) => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.overflow = showModal ? 'hidden' : 'auto';
	}, [showModal]);

	return (
		<div className="relative flex items-center justify-center h-auto w-full rounded-xl group opacity-[.85] hover:bg-gradient-to-r from-azzurrino to-oltremare">
			<Image
				className="rounded-xl group-hover:opacity-[.2] group-hover:blur-sm"
				src={props.backgroundImg}
				alt="/"
			/>
			<div className="hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex flex-col">
				<h3 className="text-xl text-polvere tracking-wider text-center mb-2">
					{props.title}
				</h3>
				<p className="text-sm pb-4 pt-2 text-polvere text-center hidden lg:block">
					{props.tech}
				</p>
				<button
					onClick={() => setShowModal(true)}
					className="py-3 px-6 mx-auto rounded-full bg-[rgba(255,255,255,.4)] backdrop-blur-md text-polvere font-bold text-md cursor-pointer hover:bg-[rgba(255,255,255,.8)] ease-in duration-200"
				>
					More Info
				</button>
			</div>
			<CSSTransition
				in={showModal}
				timeout={1500}
				classNames="my-node"
			>
				<Modal
					show={showModal}
					onClose={() => {
						setShowModal(false);
					}}
					{...props}
				/>
			</CSSTransition>
		</div>
	);
};

export default ProjectItem;
