import ProjectDesc from '../components/ProjectDesc'
import ProjectDesc2 from '../components/ProjectDesc2'
import { projectsData } from '../data/projectsData'

const Projects = () => {
	return (
		<section id='projects' className='flex flex-col justify-center items-center mt-10 md:py-12'>
			<h1
				className='font-ProximaNova font-bold text-gradient mb-7 gap-10
               w-full md:text-left md:pl-8'
			>
				Proyectos
			</h1>
			<section className='flex flex-col justify-center items-center p-5'>
				{projectsData.map((project, index) => {
					const ProjectComponent = index % 2 === 0 ? ProjectDesc : ProjectDesc2
					return <ProjectComponent key={project.id} projectImg={project.projectImg} name={project.name} description={project.description} projectLink={project.projectLink} />
				})}
			</section>
		</section>
	)
}

export default Projects
