import React from 'react'

const Experience = ({ companyImg, name, description }) => {
	return (
		<div className='flex flex-col md:flex-row-reverse ms:w-full ms:h-fit md:w-9/12 md:h-5/6 rounded-lg bg-gradient-new items-center justify-center p-5 md:p-3 shadow-2xl'>
			<div className='p-5 md:p-5 md:text-left '>
				<h2 className='md:text-left font-bold text-xl md:text-2xl md:py-3'>{name}</h2>
				<p className='py-5 md:py-0 md:text-left'>{description}</p>
			</div>
			<img className='w-50 h-50 md:w-30 md:h-30' src={companyImg} alt={name} />
		</div>
	)
}

export default Experience
