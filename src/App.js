import React, { useState } from 'react'
import './App.css'

function App() {
  const [weight, setweight] = useState()
  const [height, setheight] = useState()
  const [messeage, setmesseage] = useState()
  const [error, seterror] = useState()
  const [bmi, setBmi] = useState()
  const [reloaded, setreloaded] = useState(false)

  let calBMI = (event) => {
    event.preventDefault()
    if (weight <= 0 || height <= 0) {
      seterror('Enter valid input')
    } else {
      seterror('') // Clear error if inputs are valid
    }

    if (weight > 0 && height > 0) {
      let bmi = weight / (height * height)
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 25) {
        setmesseage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setmesseage('You are a healthy weight')
      } else {
        setmesseage('You are overweight')
      }
    }
  }

  let reload = () => {
    setreloaded(true)
    setBmi('')

    setheight('')
    setmesseage(' ')
    setweight('')
  }
  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div>
          <form onSubmit={calBMI}>
            <div>
              <label>Weight(Kgs):</label>
              <input
                type="text"
                placeholder="Enter the Weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
              />
            </div>
            <div>
              <label>Height(meter):</label>
              <input
                type="text"
                placeholder="Enter the Height"
                value={height}
                onChange={(e) => setheight(e.target.value)}
              />
            </div>
            <>
              {!reloaded && (
                <div>
                  <p className="error">{error}</p>
                </div>
              )}
            </>

            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn" type="submit" onClick={reload}>
                Reload
              </button>
            </div>
            <div className="center">
              <p>Your BMI is : {bmi}</p>
            </div>
            <div className="center">
              <p>{messeage}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
