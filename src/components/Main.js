import React from 'react'
import { Switch, Route } from 'react-router-dom'


import App from '../App'
import { MovieDetails } from "."; 



const Main = () => (
    <main>
      <Switch>
        <Route path='/movie/:id' component={MovieDetails}/>
      </Switch>
    </main>
  )
  
  export default Main