import { Grid } from '@chakra-ui/react'
import React from 'react'
import ProfilePost from './ProfilePost'

const ProfilePosts = () => {
  return (
    <Grid templateColumns={{base:'repeat(1, 1fr)',md:'repeat(3, 1fr)'}} gap={1} py={4}>
<ProfilePost postimg='./pp14.png'/>
<ProfilePost postimg='./pp15.png'/>
<ProfilePost postimg='./pp16.png'/>
<ProfilePost postimg='./pp17.png'/>

    </Grid>
  )
}

export default ProfilePosts