import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-xl group opacity-[.85] hover:bg-gradient-to-r from-azzurrino to-rosino'>
    <Image className='rounded-xl group-hover:opacity-[.2] group-hover:blur-sm' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-polvere tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-polvere text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-[rgba(255,255,255,.4)] backdrop-blur-md text-polvere font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem