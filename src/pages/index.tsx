/* eslint-disable @next/next/no-img-element */
import { Github, Steam, Wakatime } from '@icons-pack/react-simple-icons'
import type { NextPage } from 'next'
import { useLanyard } from 'use-lanyard'
import ProfilePicture from '../static/profilepic.png'

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
      <nav className='flex items-center justify-between flex-wrap p-3'>
        <div className='flex items-center flex-shrink-0 text-white mr-5 px-1'>
          <img
            src={ProfilePicture.src}
            className={`rounded-full ring-2 p-1 mr-3 ${statuses[status]} dark:border-gray-800`}
            alt='Profile Picture'
            width='64'
            height='64'
          />
          <span className='font-semibold text-xl tracking-tight'>
            ArtieFuzzz
          </span>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <a
              href='#'
              className='nav-item'
            >
              <Github/>
            </a>
            <a
              href='https://wakatime.com/@ArtieFuzzz'
              className='nav-item'
            >
              <Wakatime/>
            </a>
            <a href='https://steamcommunity.com/id/ArtieFuzzz/'>
              <Steam/>
            </a>
          </div>
        </div>
      </nav>

      <div className='justify-evenly items-center flex text-center'>
        <div
          className='lg:grid lg:text-center lg:relative mb-5 text-center gap-4'
          style={{ right: -40, bottom: -20 }}
        >
          <h1>ArtieFuzzz</h1>
          <p className='tagline'>Self - Taught Backend / Frontend Developer.</p>
        </div>
      </div>

      <div
        className='flex mx-auto text-center items-center justify-center'
        style={{ bottom: 100 }}
      >
        <p className='text-center' style={{ fontSize: ' 1.2rem' }}>
          Copyright &copy; 2022 - Present |
          <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (
          <a href='https://www.pixiv.net/en/artworks/97122460'>
            Background Source
          </a>
          )
        </p>
      </div>
    </>
  )
}

export default Index
