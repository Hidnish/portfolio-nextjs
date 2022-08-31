import React, { useState } from 'react';
import Image from 'next/image';

const SkillTag = ({ img, title, radius }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className="flex justify-center shadow-inner shadow-[#101010] rounded-full h-32 w-32 relative"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<div className="m-auto hover:rotate-[15deg] ease-in duration-200">
				<Image
					src={img}
					width="64px"
					height="64px"
					alt="/"
					style={{ borderRadius: radius }}
				/>
			</div>
			{isHovering && (
				<div className="absolute bg-[rgba(0,0,0,.2)] top-[80%] flex justify-center p-2 z-[2] w-[100%] rounded-lg backdrop-blur-md">
					<p className="text-center">{title}</p>
				</div>
			)}
		</div>
	);
};

export default SkillTag;
