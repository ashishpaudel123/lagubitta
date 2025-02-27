import React from 'react'
import Latestnews from './Latestnews'
import Mainnews from './Mainnews'
import Specialnews from './Specialnews'
import Video from './Video'
import Policy from './Policy'
import Information from './Information'

function Home() {
  return (
    <>
    <Mainnews/>
    <Latestnews/>
    <Specialnews/>
    <Information/>
    <Video/>
    <Policy/>
    </>
  )
}

export default Home