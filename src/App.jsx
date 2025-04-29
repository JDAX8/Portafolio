import './App.css'
import NavBar from './components/Navbar'
import AboutMe from './sections/About'
import Hero from './sections/Hero'
import LaboralExperience from './sections/LaboralXp'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
	return (
		<main className='mx-auto min-h-screen max-w-screen-2xl'>
			<NavBar />
			<Hero />
			<AboutMe />
			<LaboralExperience />
			<Skills />
			<Projects />
		</main>
	)
}

export default App
