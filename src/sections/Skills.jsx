import ProgramsImages from '../components/Programs'
import Ai from '/photos/Ai.png'
import Blender from '/photos/Blender.png'
import expres from '/photos/express.png'
import Figma from '/photos/Figma.png'
import Html from '/photos/Html.png'
import JS from '/photos/JS.png'
import Node from '/photos/Node.png'
import Ps from '/photos/Ps.png'
import ReactImg from '/photos/React.png'
import Tailwind from '/photos/Tailwind.png'
import TS from '/photos/TS.png'

const Skills = () => {
	return (
		<section id='skills' className='flex flex-col justify-center items-center mt-10 md:py-12'>
			<h1 className='font-ProximaNova font-bold text-gradient mb-7 gap-10 w-full md:text-left md:pl-8'>Habilidades</h1>
			<section className='flex flex-row justify-center p-5'>
				<div className='ms:w-full md:w-3/4 flex flex-wrap gap-3 pt-2 items-center justify-center'>
					<ProgramsImages programImg={Ai} />
					<ProgramsImages programImg={Blender} />
					<ProgramsImages programImg={expres} />
					<ProgramsImages programImg={Figma} />
					<ProgramsImages programImg={Html} />
					<ProgramsImages programImg={JS} />
					<ProgramsImages programImg={Node} />
					<ProgramsImages programImg={Ps} />
					<ProgramsImages programImg={ReactImg} />
					<ProgramsImages programImg={Tailwind} />
					<ProgramsImages programImg={TS} />
				</div>
			</section>
		</section>
	)
}
export default Skills
