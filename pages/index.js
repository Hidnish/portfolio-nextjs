import Head from 'next/head';

import Navbar from '../components/Navbar';
import NavbarFixed from '../components/NavbarFixed';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Modal from '../components/subComponents/Modal';

export default function Home() {

	return (
		<div>
			<Head>
				<title>Hideo Nishimura - Portfolio</title>
				<meta
					name="Hideo Nishimura portfolio website"
					content="Portfolio website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavbarFixed />
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contacts />
			<Modal />
		</div>
	);
}
