import type { NextPage } from 'next'
import Image from '../components/Image'

const Index: NextPage = () => {
  return (
    <>
      <div className='justify-center items-center flex middle text-center'>
        <Image
          className='rounded-full'
          alt='Profile Picture'
          src='../static/profilepic.png'
          width='256'
          height='256'
          draggable='false'
        />
        <div
          className='lg:grid lg:text-center lg:relative mb-5 text-center gap-4'
          style={{ right: -20, bottom: -20 }}
        >
          <h1>ArtieFuzzz</h1>
          <p className='tagline'>Self - Taught Backend / Frontend Developer.</p>
          <div className='flex items-start space-x-2'>
            <a
              className='bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              href='https://github.com/ArtieFuzzz'
            >
              Github
            </a>
            <a
              className='bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              href='https://steamcommunity.com/id/ArtieFuzzz/'
            >
              Steam
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
