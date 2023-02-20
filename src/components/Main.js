import React from 'react'
import Banner from './banner/Banner'
import Blog from './blogs/Blog'
import Footer from './footer/Footer'
import Header from './header/Header'
import './style.css'

export default function Main() {
  return (
    <>
      <Header />
      <Banner />
      <Blog />
      <Footer />
    </>
  )
}
