import {
  CssThree,
  Docker,
  Elixir,
  Html5,
  Kubernetes,
  Mongodb,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Powershell,
  Rust,
  Sass,
  Tailwindcss,
  Typescript,
  Visualstudiocode
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

const Icons: FC = () => {
  return (
    <>
      <Nodedotjs color='#339933' className='ml-1 mr-1' width='24' height='24' />
      <Rust color='#FFFFFF' className='ml-1 mr-1' width='24' height='24' />
      <Elixir color='#4B275F' className='ml-1 mr-1' width='24' height='24' />
      <Typescript
        color='#3178C6'
        className='ml-1 mr-1'
        width='24'
        height='24'
      />
      <Html5 color='#E34F26' className='ml-1 mr-1' width='24' height='24' />
      <CssThree color='#1572B6' className='ml-1 mr-1' width='24' height='24' />
      <Sass color='#CC6699' className='ml-1 mr-1' width='24' height='24' />
      <Nextdotjs color='#FFFFFF' className='ml-1 mr-1' width='24' height='24' />
      <Docker color='#2496ED' className='ml-1 mr-1' width='24' height='24' />
      <Tailwindcss
        color='#06B6D4'
        className='ml-1 mr-1'
        width='24'
        height='24'
      />
      <Mongodb color='#47A248' className='ml-1 mr-1' width='24' height='24' />
      <Postgresql
        color='#FFFFFF'
        className='ml-1 mr-1'
        width='24'
        height='24'
      />
      <Powershell
        color='#5391FE'
        className='ml-1 mr-1'
        width='24'
        height='24'
      />
      <Visualstudiocode color='#007ACC' className='ml-1 mr-1' />
      <Kubernetes
        color='#326CE5'
        className='ml-1 mr-1'
        width='24'
        height='24'
      />
    </>
  )
}

export default Icons
