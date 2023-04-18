import React, { useState,useEffect } from 'react'

import './index.css'
import useFetch from './utils/useFetch'



const Country = ({ country: { name, flags, capital,languages,population} } ) => {


  const language = () => {
      for (const key in languages) {
        return languages[key]
      }
  }

  return (
    <div className='country'>
        
        <div className='country-img'>
            <img src={flags.png}/>
        </div>
        <div className='country-inforetion'>
           <h4 className='country_name'>{name.common}</h4>
              <div className='country-content'>
                 <p>Capital: {capital}</p>
                 <p>Languages: {language()}</p>
                 <p>Population: {population}</p>
              </div>
        </div>
     
    </div>
  )
}

const App = (props) => {
  const url = 'https://restcountries.com/v3.1/all'
  const data = useFetch(url) 




  return (
    <div className='app'>
        <h1>Fetching Data Using Hook</h1>
         <h1>Calling API</h1>
        <p>There are {data.length} countries in the api</p>
      <div>
       
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country country={country}   />
          ))}
        </div>
      </div>
    </div>
  )
}


export default App