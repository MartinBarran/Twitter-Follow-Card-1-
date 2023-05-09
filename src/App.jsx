//import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


function App() {
  const formatUName = (userName) => `@${userName}`
  
  return (
    <section className="App">
      <TwitterFollowCard 
        formatUserName={formatUName}
        userName="AxeMeNow"
         name="Gimli"/>
      <TwitterFollowCard 
        formatUserName={formatUName} 
        userName="SecondBreakfast" 
        name="Samsagaz Gamyi"/>

      <TwitterFollowCard
        formatUserName={formatUName} 
        userName="DaRingBearer" 
        name="Frodo Bolsón"/>
      <TwitterFollowCard 
        formatUserName={formatUName}
        userName="PreciousOne" 
        name="Gollum"/>
    </section>
    
  )
}

export default App
