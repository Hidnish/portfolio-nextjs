import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({
	show,
	onClose,
	backgroundImg,
	title,
	description,
	techStack,
	demo,
	code,
}) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	const handleClose = (e) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div
			onClick={(e) => handleClose(e)}
			className="fixed left-0 top-0 bg-[rgba(0,0,0,0.5)] h-[100vh] w-[100vw] z-[100] backdrop-blur-sm flex justify-center items-center"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="mx-auto w-[90%] h-[90%] lg:w-[70%] lg:h-[80%] bg-[rgba(36,41,46,.95)] rounded-xl overflow-auto relative"
			>
				<div
					onClick={(e) => handleClose(e)}
					className="absolute right-1 top-1 w-min rounded-full p-3 m-3 cursor-pointer text-bamba hover:text-polvere hover:bg-bamba ease-in duration-200"
				>
					<AiOutlineClose size={18} />
				</div>

				<div className="w-full p-5">
					<div className="flex justify-center my-14">
						<Image
							width="600px"
							height="300px"
							src={backgroundImg}
							alt="/"
							className="mx-auto rounded-xl shadow-sm"
						/>
					</div>
					<div className="block text-bamba z-10 p-2 border-b border-bamba">
						<h2 className="py-2">{title}</h2>
					</div>

					<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
						<div className="col-span-3">
							<h3 className="mb-5 text-oltremare">
								Project Overview
							</h3>
							<p className="mb-4">{description}</p>
							<a href={code} target="_blank" rel="noreferrer">
								<button className="px-8 py-2 mt-4 mr-8 border rounded-full border-bamba hover:bg-bamba hover:text-polvere">
									Code
								</button>
							</a>
							<a href={demo} target="_blank" rel="noreferrer">
								<button className="px-8 py-2 mt-4 border rounded-full border-bamba hover:bg-bamba hover:text-polvere">
									Demo
								</button>
							</a>
						</div>
						<div className="col-span-4 md:col-span-2 rounded-xl">
							<div className="p-4 bg-[rgba(0,0,0,.5)] rounded-xl">
								<p className="text-center font-bold pb-2 text-oltremare">
									Technologies
								</p>
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 ">
									{techStack.map((tech, i) => {
										return (
											<p
												key={i}
												className="text-gray-400 py-2 flex items-center text-sm sm:text-md"
											>
												<RiRadioButtonFill className="pr-1" />{' '}
												{tech}
											</p>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : null;

	return mounted
		? createPortal(modalContent, document.querySelector('#modal'))
		: null;
};

export default Modal;
