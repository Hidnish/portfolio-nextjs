import React from 'react';

const ContactBox = ({ children, title, content, link, message }) => {
	return (
		<article className="p-5 text-center min-w-[15rem] bg-[rgb(87,176,153,.1)] rounded-xl border border-transparent hover:bg-[rgba(0,0,0,0.1)] hover:border-rosino ease-in duration-200">
			{children}
			<h3 className="text-lg">{title}</h3>
			{content ? <p className="text-sm">{content}</p> : ''}
			{link && message ? (
				<a className="mt-3 inline-block text-sm text-oltremare" href={link} target="_blank" rel="noopener noreferrer">
					{message}
				</a>
			) : (
				''
			)}
		</article>
	);
};

export default ContactBox;
