import React from 'react'
import Home from './Home'
import { Flex } from '@chakra-ui/react'
import Search from './Search'
import Notification from './Notification'

import CreatePost from './CreatePost'
import Profile from './Profile'

const SideBarItems = () => {
  return (
    <>
    <Flex direction={'column'} gap={{base:5,lg:3}}>
    <Home/>
    <Search/>
    <Notification/>
    <CreatePost/>
    <Profile/>
    
    </Flex>
    
    
    </>
  )
}

export default SideBarItems