/* eslint-disable @next/next/no-img-element */
import {
  Github,
  Steam,
  Visualstudiocode,
  Wakatime
} from '@icons-pack/react-simple-icons'
import type { NextPage } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { useLanyard } from 'use-lanyard'
import ProfilePicture from '../../public/profilepic.png'
import Icons from '../components/Icons'

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
      <nav className='max-w-7xl sm:px-6' style={{ paddingLeft: '2.1rem' }}>
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
            <a
              href='https://github.com/ArtieFuzzz'
              className='nav-item'
              onClick={() => umami('Clicked Github Icon')}
            >
              <Github />
            </a>
            <a
              href='https://wakatime.com/@ArtieFuzzz'
              className='nav-item'
              onClick={() => umami('Clicked Wakatime Icon')}
            >
              <Wakatime />
            </a>
            <a
              href='https://steamcommunity.com/id/ArtieFuzzz/'
              className='nav-item'
              onClick={() => umami('Clicked Steam Icon')}
            >
              <Steam />
            </a>
            <Link href='/projects'>
              <a
                className='nav-item'
                onClick={() => umami('Clicked Projects Icon')}
              >
                <Visualstudiocode />
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {/* I'm trying to make the website look nice, but uhhh this code isn't looking neat... Does it matter? To me? I don't mind
          Perhaps in the future I'm gonna cringe at the fact this code is messy... */}
      <div className='prose prose-zinc dark:prose-invert xl:max-w-full md:mx-auto px-4 sm:px-7 lg:px-9 md:pt-[2.8rem]'>
        <div className='flex flex-col lg:flex-row justify-between gap-x-8 py-8 lg:py-16'>
          <div className='flex flex-col justify-evenly items-start mx-w-xl'>
            <h1 className='text-6xl font-bold m-0 text-white'>
              Hello, {"I'm"} <span className='text-pink-300'>Artie</span>.
            </h1>
            <div className='text-white py-2 text-lg'>
              Self - Taught Programmer from Australia doing Frontend and
              Backend.
            </div>
            <Script async={true} src='/show.js' />
            <div
              className='flex align-start items-start justify-center hide'
              id='icon-fade'
              style={{ paddingRight: '33rem' }}
            >
              <Icons />
            </div>
            <div className='items-start justify-evenly flex-col pt-16 lg:flex max-w-lg'>
              <div>
                <h2 className='text-white'>Programming.</h2>
                <p className='text-lg text-gray-200'>
                  Ever since I started{' '}
                  <span className='text-pink-300'>Programming</span>, I fell in{' '}
                  <span className='text-pink-300'>Love</span> since there are so
                  many things I can do with Programming.
                </p>
              </div>
            </div>
          </div>
          <div className='items-center justify-evenly flex-col lg:flex max-w-lg pt-[15rem]'>
            <div>
              <h2 className='text-white'>Hobbies.</h2>
              <p className='text-lg text-gray-200'>
                I love Listening to <span className='text-pink-300'>Music</span>
                , playing <span className='text-pink-300'>Games</span>,{' '}
                <span className='text-pink-300'>Relaxing</span> and{' '}
                <span className='text-pink-300'>Talking</span> to my{' '}
                <span className='text-pink-300'>Friends</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' mx-auto text-center items-center justify-center'>
        <footer
          className='text-center align-bottom lg:fixed inset-x-0 bottom-10 text-white'
          style={{ fontSize: '1rem' }}
        >
          Copyright &copy; 2022 - Present |
          <a
            href='https://github.com/ArtieFuzzz'
            onClick={() => umami('Clicked Footer Link to Github')}
          >
            {' '}
            ArtieFuzzz{' '}
          </a>{' '}
          | (
          <a
            href='https://www.pixiv.net/en/artworks/97122460'
            onClick={() => umami('Clicked Footer Link to Background Source')}
          >
            Background Source
          </a>
          )
          <br />
          <a
            href='https://www.flaticon.com/free-icons/rose'
            title='rose icons'
            onClick={() => umami('Clicked Attribute')}
          >
            Rose icons created by Freepik - Flaticon
          </a>
        </footer>
      </div>
    </>
  )
}

export default Index
