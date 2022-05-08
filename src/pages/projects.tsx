import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <div className='justify-center items-center align-middle flex flex-col mx-auto'>
        <ul className='display-boxes'>
          <li className='a-box mx-auto'>
            <div className='flex flex-col justify-center p-1 lg:p-2'>
              <h2 className='font-bold text-lg lg:text-2x1'>
                <a>Hello world!</a>
              </h2>
            </div>

            <footer className='flex p-2 items-center'>
              <p>Hello!</p>
            </footer>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Page
