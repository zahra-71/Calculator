import { useState } from 'react';

// style
import './App.css';

// Components
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import ButtonNumber from './components/ButtonNumber';

const App = () => {

  const [value, setValue] = useState({
    sign: "",
    num: 0,
    res: 0
  })
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ]

  const numberClickHandler = (e) => {
    e.preventDefault() 
    const number = e.target.innerText;
    if (value.num.toString().length < 16 ) {
      setValue({
        ...value,
        num: 
          value.num === 0 && number === "0"
            ? "0"
            : value.num % 1 === 0
            ? Number(value.num + number)
            : value.num + number,
      })
    }
    // console.log("numberHandler", value)
  }
  
  const clearClickHandler = () => {
    setValue({sign: "", 
      num: 0,
      res: 0
    })
    // console.log("resetHandler", value)
  }

  const invertClickHandler = () => {
    setValue({
      ...value,
      num: value.num? value.num * -1 : 0,
      // res: value.res? value.res * -1 : 0 
    })
    // console.log("invertClickHandler", value)
  }

  const dotClickHandler = (e) => {
    e.preventDefault()
    const dot = e.target.innerText;
    // console.log("dotClickHandler", e)
    setValue({
      ...value,
      num: !value.num.toString().includes(".") ? value.num + dot: value.num
    })
  }

  const signClickHandler = (e) => {
    const sign = e.target.innerText
    setValue({
      ...value,
      num: 0,
      sign: sign,
      res: !value.res && value.num ? value.num : value.res
    })
    // console.log("sign", value)
  }

  const equalClickHandler = () => {
    if (value.num && value.sign) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : sign === "%"
          ? a % b
          : a / b; 
      setValue({
        res: math(value.res, value.num, value.sign),
        num: 0,
        sign: ""
      })
    }
    console.log("res", value)
   
  }

  return (
    <div className="App">
      <Wrapper>
        <Screen value={value.num? value.num : value.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, index) => {
            return(
              <ButtonNumber value={btn} key={index} onClick={
                btn === "C"
                ? clearClickHandler
                : btn === "+-" 
                ? invertClickHandler
                : btn === "."
                ? dotClickHandler
                : btn === "+" || btn === "-" || btn === "X" || btn === "/" || btn === "%"
                ? signClickHandler
                : btn === "="
                ? equalClickHandler
                : numberClickHandler
                } 
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
