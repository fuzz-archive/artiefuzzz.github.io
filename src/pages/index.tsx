/* eslint-disable @next/next/no-img-element */
import {
  CssThree,
  Docker,
  Github,
  Html5,
  Mongodb,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Powershell,
  Rust,
  Sass,
  Steam,
  Tailwindcss,
  Typescript,
  Visualstudiocode,
  Wakatime
} from '@icons-pack/react-simple-icons'
import type { NextPage } from 'next'
import { useLanyard } from 'use-lanyard'
import ProfilePicture from '../../public/profilepic.png'

const Index: NextPage = () => {
  const discordData = useLanyard('389252140184633363')

  if (!discordData.data) return null

  const status = discordData.data.discord_status

  const statuses: Record<string, string> = {
    online: 'ring-green-400',
    idle: 'ring-yellow-300',
    dnd: 'ring-red-600',
    invisible: 'ring-gray-600',
    offline: 'ring-gray-600',
  }

  return (
    <>
      <nav className='max-w-7xl sm:px-6' style={{ 'paddingLeft': '2.5rem' }}>
        <div className='w-full pb-12 pt-6 lg:pb-6 flex items-center justify-start'>
          <div className='flex items-center flex-shrink-0 text-white px-1 pr-2'>
            <img
              src={ProfilePicture.src}
              className={`rounded-full ring-2 p-1 mr-3 ${statuses[status]} dark:border-gray-800`}
              alt='Profile Picture'
              width='64'
              height='64'
              draggable='false'
            />
          </div>
          <div className='flex w-10'>
            <a href='https://github.com/ArtieFuzzz' className='nav-item'>
              <Github />
            </a>
            <a href='https://wakatime.com/@ArtieFuzzz' className='nav-item'>
              <Wakatime />
            </a>
            <a
              href='https://steamcommunity.com/id/ArtieFuzzz/'
              className='nav-item'
            >
              <Steam />
            </a>
          </div>
        </div>
      </nav>
      {/* I'm trying to make the website look nice, but uhhh this code isn't looking neat... Does it matter? To me? I don't mind
          Perhaps in the future I'm gonna cringe at the fact this code is messy... */}
      <div className='lg:pb-40 pb-10 prose dark:prose-invert max-w-screen-2xl px-20 sm:px-6 lg:px-10 mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between gap-x10 py-12 lg:py-16'>
          <div className='justify-evenly flex lg:flex-col items-start mx-w-xl'>
            <div>
              <h1 className='text-6xl font-bold m-0'>
                Hello, {"I'm"} <span className='text-pink-300'>Artie</span>.
              </h1>
              <div className='text-white py-2 text-lg'>
                Self - Taught Programmer from Australia doing Frontend and
                Backend.
              </div>
              <div
                className='flex items-start justify-center'
                style={{ paddingRight: '17rem' }}
              >
                <Nodedotjs
                  color='#339933'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Rust className='ml-1 mr-1' width='24' height='24' />
                <Typescript
                  color='#3178C6'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Html5
                  color='#E34F26'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <CssThree
                  color='#1572B6'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Sass
                  color='#CC6699'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Nextdotjs className='ml-1 mr-1' width='24' height='24' />
                <Docker
                  color='#2496ED'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Tailwindcss
                  color='#06B6D4'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Mongodb
                  color='#47A248'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
                <Postgresql className='ml-1 mr-1' width='24' height='24' />
                <Powershell className='ml-1 mr-1' width='24' height='24' />
                <Visualstudiocode
                  color='#007ACC'
                  className='ml-1 mr-1'
                  width='24'
                  height='24'
                />
              </div>
            </div>

            <div className='items-start justify-center flex pt-12'>
              <div className='info-box'>
                <h2>Programming.</h2>
                <p className='text-lg text-gray-200'>
                  Ever since I started learning{' '}
                  <span className='text-pink-300'>Programming</span>, I fell in{' '}
                  <span className='text-pink-300'>Love</span>. I try to keep
                  most of my projects{' '}
                  <a
                    className='text-pink-300'
                    href='https://github.com/ArtieFuzzz?tab=repositories'
                  >
                    Open-Sourced
                  </a>
                  .
                </p>
              </div>

              <div className='info-box2 ml-72'>
                <h2>Hobbies.</h2>
                <p className='text-lg text-gray-200'>
                  I love Listening to{' '}
                  <span className='text-pink-300'>Music</span>, playing{' '}
                  <span className='text-pink-300'>Games</span>,{' '}
                  <span className='text-pink-300'>Relaxing</span> and{' '}
                  <span className='text-pink-300'>Talking</span> to my{' '}
                  <span className='text-pink-300'>Friends</span>.
                </p>
              </div>
            </div>
          </div>
          <div className='justify-evenly lg:flex flex-col items-center max-w-xl'></div>
        </div>
      </div>

      <div
        className='flex mx-auto text-center items-center justify-center'
        style={{ bottom: 100 }}
      >
        <footer
          className='text-center align-bottom fixed inset-x-0 bottom-10 text-white'
          style={{ fontSize: '1rem' }}
        >
          Copyright &copy; 2022 - Present |
          <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (
          <a href='https://www.pixiv.net/en/artworks/97122460'>
            Background Source
          </a>
          )
          <br />
          <a href='https://www.flaticon.com/free-icons/rose' title='rose icons'>
            Rose icons created by Freepik - Flaticon
          </a>
        </footer>
      </div>
    </>
  )
}

export default Index
