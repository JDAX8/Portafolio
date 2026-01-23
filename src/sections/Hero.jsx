import TagsButtons from '../components/Tags'
import buttonsData from '../data/buttonsData'
import photo from '/photos/profile.png'

const Hero = () => {
	return (
		<section id='Hero' className='flex flex-col w-full items-center gap-7 py-10 md:flex-row md:justify-between md:gap-10 md:py-12'>
			<div className='w-[70%] h-[70%] md:w-1/2'>
				<img src={photo} alt='Profile' className='w-full h-auto' />
			</div>
			<div className='text-center flex flex-col md:gap-7 md:w-100% md:text-left'>
				<h1 className='font-ProximaNova font-bold'>
					<span>Hola</span>, soy Juan David
				</h1>
				<p className='font-ProximaNova text-xl py-5'>
					Soy un <span className='font-ProximaNova font-bold text-2xl'>modelador 3D</span>, apasionado por el desarrollo Front-end y el diseño UI/UX.
				</p>
				<div className='flex justify-center gap-3 flex-wrap pt-2 w-full md:justify-start'>
					{buttonsData.map((button, index) => (
						<TagsButtons key={index} link={button.link} name={button.name} target={button.target} svg={button.svg} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
