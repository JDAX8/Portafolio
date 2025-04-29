import React from 'react'

const NavBar = () => {
	return (
		<nav className='fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-[400px] bg-white/25 rounded-2xl flex justify-around items-center py-3 px-4 shadow-md md:w-3/4 lg:max-w-[600px] z-10'>
			<a href='#about' className='text-center text-xl font-ProximaNova font-regular text-white focus:outline-none hover:text-gray-300 transition-colors duration-300'>
				Sobre mí
			</a>
			<a href='#skills' className='text-center text-xl font-ProximaNova text-white focus:outline-none hover:text-gray-300 transition-colors duration-300'>
				Habilidades
			</a>
			<a href='#projects' className='text-center text-xl font-ProximaNova text-white focus:outline-none hover:text-gray-300 transition-colors duration-300'>
				Proyectos
			</a>
		</nav>
	)
}

export default NavBar
