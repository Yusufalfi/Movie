
import './Main.css';
import React, {useState, useEffect}  from 'react'
import  axios  from 'axios'
import logo from "../../assets/logo.svg";
import {img500x500 } from "../../key/LinkImg"
import Movie from '../movie/Movie';
import Genre from '../genre/Genre';



const Main = () => {
  return (
    <main>
        <div className='main__container'>
        
            <div className='main__title'>
                <img src={logo} alt='logo' />
                <div className='main__greeting'>
                    <h1>Hallo</h1>
                    <p>Welcome</p>
                </div>
            </div>

            <div className='main__cards'>
                <div className='card'>
                    <i className='fa fa-user-o fa-2x text-lightblue'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Number</p>
                        <span className='font-bold text-title'>567</span>
                    </div>
                </div>
                <div className='card'>
                    <i className='fa fa-calendar fa-2x text-red'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Times</p>
                        <span className='font-bold text-title'>567</span>
                    </div>
                </div>
                <div className='card'>
                    <i className='fa fa-video-camera fa-2x text-yellow'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Videos</p>
                        <span className='font-bold text-title'>567</span>
                    </div>
                </div>
                <div className='card'>
                    <i className='fa fa-thumbs-up fa-2x text-red'></i>
                    <div className='card_inner'>
                        <p className='text-primary-p'>Likes</p>
                        <span className='font-bold text-title'>567</span>
                    </div>
                </div>
            </div>

        <div className='movie'>         
          <Movie />
        </div>
      

            

        </div>
    </main>
  )
}

export default Main



