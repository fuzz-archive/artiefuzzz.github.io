/* eslint-disable @next/next/no-img-element */
import { Github, Steam, Wakatime } from '@icons-pack/react-simple-icons'
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
      <nav className='flex items-center justify-between flex-wrap p-3 mx-auto pb-20'>
        <div className='flex items-center flex-shrink-0 text-white mr-3 px-1'>
          <img
            src={ProfilePicture.src}
            className={`rounded-full ring-2 p-1 mr-3 ${statuses[status]} dark:border-gray-800`}
            alt='Profile Picture'
            width='64'
            height='64'
          />
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='lg:flex-grow'>
            <a href='#' className='nav-item'>
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
      <div className='lg:pb-40 pb-8 prose dark:prose-invert max-w-screen-2xl px-4 sm:px-6 lg:px-10 mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between gap-x10 py-8 lg:py-16'>
          <div className='justify-evenly flex flex-col items-start mx-w-xl'>
            <div className='pb-5 lg:pb-0'>
              <h1 className='text-6xl font-bold m-0'>
                Hello, {"I'm"} <span className='text-pink-300'>ArtieFuzzz</span>
                .
              </h1>
              <div className='text-white py-2 text-lg'>
                Self-Taught Programmer from Australia doing Frontend and Backend
              </div>
            </div>

            <div className='info-box'>
              <h2>Programming Is My Hobby.</h2>
              <p className='text-lg text-gray-200'>
                Ever since I started learning{' '}
                <span className='text-pink-300'>Programming</span>, I fell in{' '}
                <span className='text-pink-300'>Love</span>.
              </p>
            </div>
          </div>
          <div className='justify-evenly lg:flex flex-col items-center max-w-xl mx-auto'>
            <div className='info-box2 bottom'>
              <h2>Other Hobbies</h2>
              <p className='text-lg text-gray-200'>
                I love to Listen to <span className='text-pink-300'>Music</span>
                , play <span className='text-pink-300'>Games</span>,{' '}
                <span className='text-pink-300'>Relax</span> and{' '}
                <span className='text-pink-300'>Talking</span> to my{' '}
                <span className='text-pink-300'>Friends</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='flex mx-auto text-center items-center justify-center'
        style={{ bottom: 100 }}
      >
        <footer
          className='text-center align-bottom fixed inset-x-0 bottom-10 text-white'
          style={{ fontSize: ' 1.2rem' }}
        >
          Copyright &copy; 2022 - Present |
          <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (
          <a href='https://www.pixiv.net/en/artworks/97122460'>
            Background Source
          </a>
          )
        </footer>
      </div>
    </>
  )
}

export default Index
