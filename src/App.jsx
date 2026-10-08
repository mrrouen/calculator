import './App.css'
import { useState } from "react"

function CalcDisplay({ dispValue }) {
  return (
    <div className="CalcDisplay">
      {dispValue}
    </div>
  )
}

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (

    <button className={buttonClassName} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState("0");

  const handleButtonClick = (value) => {
    if (value === 'CLR') {
      setDisp("0");
    } else {

      setDisp((prev) => (prev === "0" ? value : prev + value));
    }
  }

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Rouenhowell Reyes - DA3A
      </div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={handleButtonClick} />
          <CalcButton label={'8'} onClick={handleButtonClick} />
          <CalcButton label={'9'} onClick={handleButtonClick} />
          <CalcButton label={'÷'} onClick={handleButtonClick} />
          <CalcButton label={'4'} onClick={handleButtonClick} />
          <CalcButton label={'5'} onClick={handleButtonClick} />
          <CalcButton label={'6'} onClick={handleButtonClick} />
          <CalcButton label={'*'} onClick={handleButtonClick} />
          <CalcButton label={'1'} onClick={handleButtonClick} />
          <CalcButton label={'2'} onClick={handleButtonClick} />
          <CalcButton label={'3'} onClick={handleButtonClick} />
          <CalcButton label={'-'} onClick={handleButtonClick} />
          <CalcButton label={'C'} buttonClassName={"ClearButton"} onClick={handleButtonClick} />
          <CalcButton label={'0'} onClick={handleButtonClick} />
          <CalcButton label={'='} onClick={handleButtonClick} />
          <CalcButton label={'+'} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  )
}

export default App