const ProjectsVideos = () => {
	const videos = [
		{ id: 1, url: 'https://www.youtube.com/embed/Iei-9D8mj3E', title: 'Video 1' },
		{ id: 2, url: 'https://www.youtube.com/embed/KyVFk05XS7o', title: 'Video 2' },
		{ id: 3, url: 'https://www.youtube.com/embed/94nx-pjGUpw', title: 'Video 3' }
	]

	 return (
		<section id='projects' className='flex flex-col justify-center items-center mt-10 md:py-12'>
			<h1
				className='font-ProximaNova font-bold text-gradient mb-7 gap-10
               w-full md:text-left md:pl-8'
			>
				Edición de videos
			</h1>
			<section className='flex flex-col gap-8 p-5 w-full max-w-5xl'>
				{videos.map((video) => (
					<div key={video.id} className='w-full aspect-video'>
						<iframe
							className='w-full h-full rounded-lg shadow-lg'
							src={video.url}
							title={video.title}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				))}
			</section>
		</section>
	)
}

export default ProjectsVideos