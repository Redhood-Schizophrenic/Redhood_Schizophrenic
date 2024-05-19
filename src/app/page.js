import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/Projects";
import SkillsPage from "./components/Skills";
import AboutPage from "./components/About";
import ContactPage from './components/Contact'
import { Footer } from "./components/Footer"

export default function Home() {
	return (
		<>

			<section className="scroll-smooth">
				{/* Landing Page */}
				<Navbar />
				<section id="home">
					<HomePage />
				</section>

				<section id="projects">
					<ProjectsPage />
				</section>

				<section id="skills">
					<SkillsPage/>
				</section>

				<section id="about">
					<AboutPage/>
				</section>

				<section id="contact">
					<ContactPage/>
				</section>

				<section id="footer">
					<Footer/>
				</section>
			</section>
		</>
	);
}
