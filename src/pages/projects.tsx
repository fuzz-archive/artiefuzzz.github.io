import type { NextPage } from 'next'

interface IProjects {
  href: string
  title: string
  description: string
}

const projects: IProjects[] = [
  {
    href: 'https://github.com/ArtieFuzzz/arrow',
    title: 'Arrow',
    description: 'Some Random API',
  },
  {
    href: 'https://github.com/ArtieFuzzz/artiefuzzz.github.io',
    title: 'This Website',
    description: 'Source code of the Website'
  }
]

const ProjectsPage: NextPage = () => {
  return (
    <>
      <div className='mx-auto py-12 max-w-6xl'>
        <div className='prose mx-auto mt-24'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white'>Projects {"I'm"} Working on.</h1>

            <div className='flex flex-col justify-center items-center'>
              {projects.map((item, i) => (
                <p className='project-item' key={i}>
                  <a className='text-pink-300' href={item.href}>
                    {item.title}
                  </a>{' '}
                  - {item.description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
