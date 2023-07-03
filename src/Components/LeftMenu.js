import React from 'react'
import Menu from './Menu';
import "../Styles/LeftMenu.css"
import { FaSpotify ,FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi"
import { MenuList } from './MenuList';
import MenuPlayList from './MenuPlayList';
import TrackList from './TrackList';
function LeftMenu() {
  return (
    <div className='leftMenu'>
    <div className='logoConatiner'>
        <i className='logOne'><FaSpotify/></i>
        <h3>Spotify</h3>
        <i className="logTwo"><FaEllipsisH/></i></div>
    <div className='searchBox'>
        <input type='text' placeholder='Search..'></input>
         <i className='searchIcon'><BiSearchAlt/></i>
    </div>
    <Menu title={"Menu"} menuObject={MenuList} />
    <MenuPlayList/>
    <TrackList/>
    </div>
  )
}

export  {LeftMenu}