import Navbar from "./components/navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/Projects";

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
			</section>
		</>
	);
}
