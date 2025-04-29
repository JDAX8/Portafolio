import Experience from '../components/Experience'
import Bancoldex from '/photos/Bancoldex.png'
import Pacific from '/photos/Pacific.png'
import Teapoyamos from '/photos/Teapoyamos.png'

const LaboralExperience = () => {
	return (
		<section id='experience' className='flex flex-col w-full gap-7 md:mt-10 md:py-12'>
			<h1 className='font-ProximaNova md:text-left font-bold text-gradient mb-7'>Experiencia laboral</h1>
			<div>
				<div className='flex flex-col gap-10 md:hidden'>
					<Experience companyImg={Pacific} name='Pacific medical suit' description='Soy un diseñador UI, UX y programador front-end del aplicativo web llamado “Pacific medical suit lite”' />
					<Experience companyImg={Bancoldex} name='Bancoldex' description='Participación en el diseño de una solución digital financiera, creando y diseñando interfaces para la misma.' />
					<Experience companyImg={Teapoyamos} name='Teapoyamos' description='Programación de la landing page y la sección de "Contáctanos" de la página web.' />
				</div>
				<div className='hidden md:flex flex-wrap justify-center gap-10'>
					<div className='flex flex-row gap-10 h-fit justify-center items-center'>
						<Experience
							companyImg={Pacific}
							name='Pacific medical suit'
							description='Soy un diseñador UI, UX y programador front-end del aplicativo web llamado “Pacific medical suit lite”'
						/>
						<Experience
							companyImg={Bancoldex}
							name='Bancoldex'
							description='Participación en el diseño de una solución digital financiera, creando y diseñando interfaces para la misma.'
						/>
					</div>
					<div className='flex flex-wrap gap-10 h-full min-w-8/12 justify-center items-center text-left md:text-justify'>
						<Experience companyImg={Teapoyamos} name='Teapoyamos' description='Programación de la landing page y la sección de "Contáctanos" de la página web.' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default LaboralExperience
