import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './header.js'
import axios from 'axios'
import Coin from './Coin'
import 'animate.css'

const App =() => {
    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
        setCoin(res.data)
    }).catch(error => alert('error'))
    },[])

     const handleChange = e => {
        setSearch(e.target.value)
     }

     const filteredCoin = coin.filter(coin => 
         coin.name.toLowerCase().includes(search.toLowerCase())
     )

  
    return (
		<>
		<Header  />
        <div className='coin-app'>
         <div className='coin-search'>
             <form>
                 <input type='text'
                  placeholder='Search for a coin'
                  className='coin-input animate__animated animate__fadeInTopLeft'
                  onChange={handleChange}
                    />
             </form>
         </div>
         {filteredCoin.map(coin => {
             return (
                 <Coin 
                 key={coin.id}
                 name={coin.name} 
                 price={coin.current_price}
                 image={coin.image}
                 symbol={coin.symbol}
                 volume={coin.market_cap}
                 />
             )
         })}
        </div>
		</>
    )
}


export default App
