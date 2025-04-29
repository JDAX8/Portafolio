import React from 'react'
import TagsButtons from './Tags'
import Fondo from '/photos/fondo.png'

const ProjectDesc2 = ({ projectImg, name, description, projectLink }) => {
	return (
		<div className='flex md:flex-row flex-col justify-center items-center relative'>
			<h1 className='font-ProximaNova font-bold p-5 md:hidden'>{name}</h1>
			<img className='w-150 h-fit md:w-6/12 mb-10 rounded-2xl relative z-0 ' src={projectImg} />
			<img className='absolute w-full md:w-fullrounded-full md:pr-120 z-[-2] opacity-50 hidden md:block' src={Fondo} alt='' />
			<div className='flex flex-col justify-center items-center md:items-end relative md:-top-10 md:-right-15 z-10'>
				<h1 className='font-ProximaNova font-bold hidden md:block py-5 pl-10 md:text-right'>{name}</h1>
				<div className='blur-container shadow-2xl'>
					<p className='md:text-left md:p-5 py-10'>{description}</p>
				</div>
				<div className='py-5 md:self-end'>
					<TagsButtons link={projectLink} name='Ver proyecto' />
				</div>
			</div>
			<div className='p-3'></div>
		</div>
	)
}

export default ProjectDesc2
// flex flex-col justify-center md:items-start items-center relative md:-top-10 md:-left-15 z-10
