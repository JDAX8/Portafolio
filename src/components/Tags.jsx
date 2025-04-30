import React from 'react'

const TagsButtons = ({ svg, name, link, target }) => {
	return (
		<a
			target={target}
			href={link}
			rel='noopener noreferrer'
			type='button'
			className='flex gap-2 w-fit h-2 items-center justify-center rounded-full bg-transparent text-white px-4 py-6 border-3 border-tag cursor-pointer shadow-[0_0_3px_4px_rgba(139,92,246,0.2)] visited:text-white'
		>
			<p className='text-regular'>{name}</p>
			{svg && <span className='w-8 h-8'>{svg}</span>}
		</a>
	)
}

export default TagsButtons
