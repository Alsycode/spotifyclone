import React, { useEffect } from "react";
import "../Styles/MainContainer.css"
import { Banner } from './Banner'
import { FaUser } from 'react-icons/fa'
import  AudioList  from './AudioList'
function MainContainer() {
  return (
    <div className='mainContainer'>
 <Banner/>
 <div className='menuList'>
  <ul>
    <li>
      <a href=''>Popular</a>
    </li>
    <li>
      <a href=''>Albums</a>
    </li>
    <li>
      <a href=''>Songs</a>
    </li>
    <li className='active'>
      <a href='' >Fans</a>
    </li>
    <li>
      <a href=''>About</a>
    </li>
  </ul>
<p><i><FaUser/></i>12.1 MIllion<span> Followers</span></p>
 </div>
 <AudioList/>
    </div>
  )
}

export  {MainContainer}