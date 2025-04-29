import ProjectDesc from '../components/ProjectDesc'
import ProjectDesc2 from '../components/ProjectDesc2'
import TagsButtons from '../components/Tags'
import Alien from '/photos/Alien.png'
import Catnap from '/photos/Catnap.png'
import Monster from '/photos/Monster.png'
import Robbie from '/photos/Robbie.jpg'
import Scenario from '/photos/Scenario.png'

const Projects = () => {
	return (
		<section id='projects' className='flex flex-col justify-center items-center mt-10 md:py-12'>
			<h1 className='font-ProximaNova font-bold text-gradient mb-7 gap-10'>Proyectos</h1>
			<section className='flex flex-col justify-center items-center p-5'>
				<ProjectDesc
					projectImg={Alien}
					name='Alien'
					description='Este es un alienígena que modelé en Blender, explorando formas orgánicas y detalles en la textura de la piel para darle un aspecto inquietante. Experimenté con iluminación dramática y tonos fríos para resaltar su expresión siniestra, complementada por luces flotantes que refuerzan la atmósfera alienígena.'
					projectLink='https://www.behance.net/gallery/217400185/Space-alien'
				/>
				<ProjectDesc2
					projectImg={Catnap}
					name='Catnap'
					description='Este es un render en 3D de Catnap, un personaje que modelé en Blender, enfocándome en texturas realistas y una iluminación cinematográfica para crear una atmósfera inquietante. Jugué con el contraste entre lo adorable y lo perturbador, destacando los reflejos en los ojos y la expresión exagerada.'
					projectLink='https://www.behance.net/gallery/217117169/CATNAP-3D-(Poppy-playtime)'
				/>
				<ProjectDesc
					projectImg={Robbie}
					name='Robbie 3D'
					description='Este es un robot 3D que modelé en Blender para explorar el uso de nodos y técnicas básicas de modelado. Me enfoqué en crear formas mecánicas simples y texturas metálicas, experimentando con iluminación para resaltar los detalles industriales del diseño.'
					projectLink='https://www.behance.net/gallery/217118717/Robbie'
				/>
			</section>
		</section>
	)
}
export default Projects
