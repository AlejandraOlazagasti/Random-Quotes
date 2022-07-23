import { useState } from 'react'
import './App.css'
import quotes from "./json/quotes.json"
import colors from './utilities/colors'
import Quote from './components/quote'


function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);

  const [randomQuote, setRandomQuote] = useState(quoteRandom);
  const [randomColor, setRandomColor] = useState(colorRandom);

  const objStyle = { backgroundColor: randomColor}

  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes);
    colorRandom = getRandomElement(colors);
    setRandomQuote(quoteRandom)
    setRandomColor(colorRandom)
  } 
  
  return (
    <div className="App" style={objStyle}>
      <Quote randomQuote={randomQuote} randomColor={randomColor} getRandomAll={getRandomAll}/>
    </div>
  )
}

export default App
