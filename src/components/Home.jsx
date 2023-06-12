import React, {useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Analytics from './Analytics'
import Newsletter from './Newsletter'
import Cards from './Cards'
import { Outlet } from 'react-router-dom'


export default function Home() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))


  return (<>
    <Navbar user={user} setUser={setUser}/>
    {
      user ? (
        <Outlet/>
      ) : (
        <>
          <Hero/>
          <Analytics/>
          <Newsletter/>
          <Cards/>
        </>
      )
    }
    
    
    <Footer/>
  </>
    
  )
}
