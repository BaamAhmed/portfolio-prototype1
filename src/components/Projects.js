import ProjectCard from './subcomponents/ProjectCard'

const Projects = ({darkMode}) => {
  const headingColor = `${darkMode ? 'text-white' : 'text-red-500'}`
  const textColor = `${darkMode ? 'text-white' : 'text-black font-normal'}`
  const primaryBg = `${darkMode ? 'bg-white' : 'bg-red-500'}`
  const buttonText = `${darkMode ? 'text-black': 'text-white'}`

  return (
    <div className="container mx-auto text-right mb-20" >
      <div className=" grid grid-cols-1 md:grid-cols-3">
        <div className='order-2 md:order-1 col-span-1 md:col-span-2 mx-3 md:mr-4'>
          <div className=" flex flex-wrap text-left">
            <ProjectCard links={[{label: 'Website', link:'https://www.reloaded.pk'}]} mainText='My biggest project ever, ReLoaded was the first web app of its kind: a platform that allowed users to trade their console video games with other gamers in the city. I launched this project as a startup during June 2022' title='ReLoaded' icons={['FaBootstrap', 'GrNode', 'SiMongodb', 'SiExpress']} darkMode={darkMode} />
            <ProjectCard links={[{label: 'Website', link:'http://aurparho.herokuapp.com'},{label: 'Repo', link:'https://github.com/BaamAhmed/AurParho'}]} mainText='My first ever web app, AurParho aimed to fixed a problem that I saw within my college: inefficient sharing of notes. As such, I built AurParho, so that everyone could access my class notes all in one place.' title='AurParho' icons={['FaBootstrap', 'GrNode', 'SiMongodb', 'SiExpress']} darkMode={darkMode} />
            <ProjectCard links={[{label: 'Website', link:'http://bullsnbears.herokuapp.com'}]} mainText='I built this simplified stock-trading platform for entrepreneurial competition hosted by Nixor Financial Services, a college club that I was an executive of.' title='Bulls n Bears' icons={['FaBootstrap', 'GrNode', 'SiMongodb', 'SiExpress']}  darkMode={darkMode} />
            <ProjectCard links={[{label:'Website', link: 'https://cerulean-sunflower-e63eb9.netlify.app/'},{label: 'Repo', link:'https://github.com/BaamAhmed/Nitoxi'}]} mainText='My first big React Native project, this mobile app allowed users to self-administer COV19 tests based on their sense of smell. The app used QR codes to verify test validity and user authentication, among other features.' title='Nitoxi' icons={['DiReact', 'SiMongodb', 'GrNode', 'SiExpress']}  darkMode={darkMode} />
            <ProjectCard links={[{label: 'Repo', link:'https://github.com/BaamAhmed/PastPapersBot'}]} mainText='A small summer project, this Discord bot was developed in collaboration with a friend, and it allowed other users in the server to find and fetch CAIE Past Papers using text commands in Discord channels.' title='Past Papers Bot' icons={['SiJavascript', 'SiDiscord']}  darkMode={darkMode} />
           
          </div>
        </div>
        
        <div className="order-1 md:order-2 mx-5 md:mx-0">
          <h1 className={`${headingColor} font-bold text-3xl`} >dev projects</h1>
          <p className={`${textColor} mb-3`} >At the moment, all development work I’ve done has been either web or app development. Since I did my first Udemy course, JS has been my primary language and NodeJS my default runtime. MERN is my go-to stack, and I’m currently trying to master React.</p>
        </div>

      </div>
    </div>
  )
}

export default Projects