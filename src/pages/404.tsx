import type { NextPage } from 'next'
import Link from 'next/link'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <div className='justify-center items-center flex middle text-center'>
        <div className='lg:grid lg:text-center lg:relative mb-5 text-center gap-4'>
          <h1>Not Found!</h1>
          <div className='flex items-start mx-auto'>
            <Link href='/'>
              <a className='btn-round-outline-blue'>Go back Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
