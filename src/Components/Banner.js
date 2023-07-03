import React from 'react'
import Artist from "../img/popp.jpg"
import { FaEllipsisH,FaHeadphones,FaCheck } from 'react-icons/fa'
import Check from"../img/check.png"
function Banner() {
  return (
    <div className="Banner">
    <img src={Artist} alt="" className="bannerImg" />

    <div className="content">
      <div className="breadCrump">
        <p>
          Home <span>/Popular Artist</span>
        </p>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="artist">
        <div className="left">
          <div className="name">
            <h2>ALfy</h2>
            <img src={Check} alt="" />
          </div>

          <p>
            <i>
              <FaHeadphones />
            </i>
            11,184,1811 <span>Monthly Listeners</span>
          </p>
        </div>

        <div className="right">
          <a className="play" href="#"> Play</a>
          <a className="follow" href="#">
            <i>
              <FaCheck />
            </i>
            Following
          </a>
        </div>
      </div>
    </div>

    <div className="bottom"></div>
  </div>
);
}


export  {Banner}