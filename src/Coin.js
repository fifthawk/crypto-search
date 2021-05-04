import React from 'react'
import './Coin.css'
import animate from 'animate.css'

const Coin = ({name, image, symbol, price, volume}) => {
    return (
        <div className='coin-container '>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} className='animate__animated animate__zoomInLeft 'alt='coin' />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price animate__animated animate__slideInUp'>Price: ${price.toFixed(2)} </p> 
                    <p className='coin-volume'>Volume: ${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
