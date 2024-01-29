import React from 'react'
import Navbar from '../Navbar/Navabr'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Page from '../Pages/Page'
import Product from '../Product/Product'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className="container mx-auto">
        <Navbar/>
        <Hero/>
        <About/>
        <Page/>
        <Product/>
        <Blog/>
        <Contact/>
        
    </div>
  )
}

export default Home