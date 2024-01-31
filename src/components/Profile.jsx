import React from 'react'
import { Container } from './Container'
import { CreatePost } from './CreatePost'

export const Profile = () => {
  return (
    <Container className=" w-[47%] relative left-[22%] flex justify-center">
        <CreatePost/>
    </Container>
  )
}
