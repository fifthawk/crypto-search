import React from 'react'
import './header.css';
import 'animate.css'


const Header = () => {
    return (
        <>
        <div className ='header-container'>
        <header>
            <h4 className='animate__animated animate__backInDown'> Cryptocurrency Search </h4>
            </header>
            <div className='img-container'>
                <img className ='header-img animate__animated animate__backInRight'
                src='https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010' 
                alt ='coin'
                >
                </img>
            </div>
            </div>
        </>
    )
}

export default Header