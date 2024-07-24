// import React from 'react'
import RProjects from "../RProjects"
import Upcoming from "../Uprojects.jsx";
import Future from "../FProjects.jsx";
import { Link } from "react-router-dom"
import Nav from "./Nav"

const Home = () => {
  return (
    <>
    <Nav/>
    <Upcoming />
    <Link to="/Upcoming" >
    <button className='h-10 w-28 cursor-pointer bg-black text-white '>Add New</button> <br />
    </Link>
    <RProjects />
    <Link to="/RProjects" >
    <button className='h-10 w-28 cursor-pointer bg-black text-white'>Add New</button> <br />
    </Link>

    <Future/>
    <Link to="/Future" >
    <button className='h-10 w-28 cursor-pointer bg-black text-white'>Add New</button>
    </Link>
    </>
  )
}

export default Home
