/* eslint-disable @next/next/no-img-element */
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
            alt='Profile Picture'
            width='64'
            height='64'
            className='rounded-full mr-3'
          />
          <span className='font-semibold text-xl tracking-tight'>
            Placeholder
          </span>
        </div>
        <div
          className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'
        >
          <div className='text-sm lg:flex-grow'>
            <a href='#' className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-blue-300 font-semibold'>
              Item 1
            </a>
            <a href='#' className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:text-blue-300 font-semibold'>
              Item 2
            </a>
          </div>
        </div>
      </nav>

      <div className='justify-center items-center flex middle text-center'>
        <div
          className='lg:grid lg:text-center lg:relative mb-5 text-center gap-4'
          style={{ right: -40, bottom: -20 }}
        >
          <h1>ArtieFuzzz</h1>
          <p className='tagline'>Self - Taught Backend / Frontend Developer.</p>
          <div className='flex items-start space-x-3'>
            <a
              className='btn-round-outline-blue'
              href='https://github.com/ArtieFuzzz'
            >
              Github
            </a>
            <a
              className='btn-round-outline-blue'
              href='https://steamcommunity.com/id/ArtieFuzzz/'
            >
              Steam
            </a>
            <a className='btn-round-outline-blue' href='/blog'>
              Blog
            </a>
            <a
              className='btn-round-outline-blue'
              href='https://wakatime.com/@ArtieFuzzz'
            >
              Wakatime Stats
            </a>
          </div>
        </div>
      </div>

      <div style={{ bottom: 0, left: 0 }}>
        <p className='text-center' style={{ fontSize: ' 1.2rem' }}>
          Copyright &copy; 2022 - Present |
          <a href='https://github.com/ArtieFuzzz'> ArtieFuzzz </a> | (
          <a href='https://www.pixiv.net/en/artworks/97122460'>
            Background Source
          </a>
          ){' '}
        </p>
      </div>
    </>
  )
}

export default Index
