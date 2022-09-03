import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import ContactBox from './subComponents/ContactBox';

const Contacts = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_p0bdekf',
				'template_y9ic0lx',
				form.current,
				'MiFcV_SDFR_H38N6b'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		
			e.target.reset();
	};

	return (
		<section
			id="contacts"
			className="w-[90%] md:w-[85%] lg:h-[100vh] mx-auto flex flex-col justify-center mb-20 lg:mb-0"
		>
			<div className="w-full mx-auto px-2 py-16 lg:grid grid-cols-12 lg:gap-8">
				<div className="col-span-1 lg:flex lg:items-center lg:justify-center lg:border-r lg:border-oltremare lg:mr-3">
					<p className="uppercase text-xl tracking-widest font-extrabold text-oltremare lg:rotate-[-90deg] pb-3">
						Contacts
					</p>
				</div>

				<div className="col-span-11">
					<h2 className="py-4 lg:pb-10 lg:pt-0 mb-4">
						Let&apos;s Get in Touch
					</h2>
					<div className="lg:grid lg:grid-cols-9 lg:gap-8">
						<div className="flex justify-center lg:justify-start lg:col-span-3 mb-20">
							<div className="flex flex-col gap-5 w-[80%]">
								<ContactBox
									title="Email"
									content="hideonishimura@live.it"
								>
									<MdOutlineEmail className="text-2xl mb-2 mx-auto" />
								</ContactBox>
								<ContactBox
									title="Messanger"
									link="https://m.me/hideo.nishimura.90"
									message="Send a Message"
								>
									<RiMessengerLine className="text-2xl mb-2 mx-auto" />
								</ContactBox>
								<ContactBox
									title="Whatsapp"
									link="https://api.whatsapp.com/send?phone=0761254308"
									message="Send a Message"
								>
									<BsWhatsapp className="text-2xl mb-2 mx-auto" />
								</ContactBox>
							</div>
						</div>

						<div className="flex justify-center lg:justify-start lg:col-span-6">
							<form
								className="flex flex-col gap-5 w-[80%] lg:w-[90%]"
								ref={form}
								onSubmit={sendEmail}
							>
								<input
									type="text"
									name="name"
									placeholder="Your Full Name"
									required
									className="w-full max-h-1 p-6 rounded-xl bg-[rgb(0,0,0,.3)] text-bamba focus:ring-1 focus:ring-oltremare focus:outline-none"
								/>
								<input
									type="text"
									name="email"
									placeholder="Your Email"
									required
									className="w-full max-h-1 p-6 rounded-xl bg-[rgb(0,0,0,.3)] text-bamba focus:ring-1 focus:ring-oltremare focus:outline-none"
								/>
								<textarea
									name="message"
									rows="7"
									placeholder="Your Message"
									required
									className="w-full p-6 rounded-xl bg-[rgb(0,0,0,.3)] resize-none text-bamba focus:ring-1 focus:ring-oltremare focus:outline-none"
								></textarea>
								<button
									type="submit"
									className="px-7 mx-auto text-center py-3 rounded-full bg-[rgba(255,255,255,.6)] backdrop-blur-md text-polvere font-bold text-lg cursor-pointer hover:bg-[rgba(255,255,255,.9)] ease-in duration-200"
								>
									<FiSend />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
