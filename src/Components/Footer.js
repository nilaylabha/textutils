import React from 'react';
import Styled from 'styled-components';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';



const Footercomponents = Styled.footer`
text-align: center;
  padding: 10px;
  background-color: black;
  color: white;`;


export default function Footer() {
    return (
        <>
            <Footercomponents>
                
                <div className='  ' >
                  
                        © Copyright 2021-2022
                   
                        <a href='https://www.instagram.com/?hl=en'><img src={insta} alt="insta login" /></a>
                        <a href='https://www.facebook.com/'><img src={facebook} alt="facebooklogin" /></a>
                        <a href='https://twitter.com/i/flow/login'><img src={twitter} alt="twitterlogin" /></a>
                
                </div>

            </Footercomponents>
        </>
    )
}
