import React from 'react'
import { Route, Link } from 'react-router-dom'

const ExploreJapan = () => <h3>I want to go to Japan</h3>
const ExploreCanada = () => <h3>I want to go to Canada</h3>


const Explore = () => {
  return (
    <div>
      <div>
        <Link to="/explore/Japan">Explore Japan </Link> |
        <Link to="/explore/Canada"> Explore Canada</Link>
      </div>
      <h2>Where do you want to go?</h2>
      <img src="https://picsum.photos/200/300" alt="Girl in a jacket" width="200"></img>
      <Route path="/explore/japan" component={ExploreJapan} />
      <Route path="/explore/canada" component={ExploreCanada} />
    </div>
  )
}

export default Explore 