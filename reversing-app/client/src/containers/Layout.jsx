import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export default function Layout(props) {
    const {children} = props;
  return (
    <div style={{minHeight: "100vh"}}>
      <Navbar></Navbar>
        <div style={{minHeight: "100vh"}}>
          {children}
        </div>
          <Footer></Footer>
    </div>
  )
}
