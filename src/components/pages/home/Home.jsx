import React from 'react'
import l from "./Home.module.css"
import Discover from "./discover/Discover"
import Trending from './trending/Trending'
import Creators from './creators/Creators'
import Browse from './browse/Browse'
import More from './more/More'
import How from './how/How'
import Join from './join/Join'

function Home() {
  return (
    <div className={l.home}>
        <Discover/>
        <Trending/>
        <Creators/>
        <Browse/>
        <More/>
        <How/>
        <Join/>
    </div>
  )
}

export default Home
