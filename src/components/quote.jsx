import React from 'react'

const Quote = ({randomQuote, randomColor, getRandomAll}) => { 
  const objStyle = {color: randomColor}
  const backStyle = {backgroundColor: randomColor}
  return (
    <div className='card' style={objStyle}>
      <i className="fas fa-quote-left"></i>
      <div className='card__text' style={objStyle}>
        <p className='card__quote'>{randomQuote.quote}</p>
      </div>
      <h2 className='card__author'><em>{randomQuote.author}</em></h2>
      <button onClick={getRandomAll} className='card__btn' style={backStyle}>►</button>
    </div>
  )
}

export default Quote