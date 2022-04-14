import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <>
      <div className='items-center middle text-center flex'>
        <h1> Projects {`I'm`} working on <br /> (THIS PAGE IS INCOMPLETE)</h1>
        <ul className='display-boxes'>
          <li className='a-box'>
            <h2>Foo bar!</h2>
          </li>

          <li className='a-box'>
            <h2>Hello world!</h2>
          </li>

          <li className='a-box'>
            <h2>Eggs Also Bacons!</h2>
          </li>

          <li className='a-box'>
            <h2>WARNING NO MOTIVATION!</h2>
          </li>

          <li className='a-box'>
            <h2>Hello world!</h2>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Page
