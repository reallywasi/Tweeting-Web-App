import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Feed from './Feed'
const Home = () => {
  return (
    <div className='flex justify-between w-[80%]  mx-auto'>
    <LeftSidebar/>
    <Feed/>
  



    <h1>THIS IS HEADER FOR WTF</h1>
    <RightSidebar/>

    </div>
  )
}

export default Home
