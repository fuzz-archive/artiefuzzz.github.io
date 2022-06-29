import type { NextPage } from 'next'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <div className='mx-auto py-12 max-w-6xl'>
        <div className='prose mx-auto mt-24'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white'>
              Projects {"I'm"} Working on.
            </h1>

            <div className='flex flex-col justify-center items-center not-prose'>
              <p className='project-item'><a className='text-pink-300' href='https://github.com/ArtieFuzzz/chain'>Chain</a> - An Economy for you Discord Server</p>
              <p className='project-item'><a className='text-pink-300' href='https://github.com/ArtieFuzzz/dart'>Dart</a> - My attempt to use plug_cowboy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
