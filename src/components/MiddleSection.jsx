import React from 'react'
import { Container } from './Container'
import { CreatePost } from './CreatePost'
import { Allpost } from './Allpost'

export const MiddleSection = () => {
  return (
    <Container className=" w-[47%] relative left-[22%] flex justify-center">
    <div className=" w-full flex flex-col items-center p-4">
      <CreatePost />
      <Allpost />
    </div>
  </Container>
  )
}
