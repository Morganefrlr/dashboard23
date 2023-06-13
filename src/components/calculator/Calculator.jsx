import { useState } from 'react';


const Calculator = () => {
    const [calc, setCalc] = useState('')
  const ops = ['/' , '*' , '+' , '-' , '.' ]

  const updateCalc = value =>{
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return
    }
      setCalc(calc + value)
  }


  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteNbr = () => {
        if(calc === ''){
            return
        }

        const value = calc.slice(0, -1)
        setCalc(value)
  }

  return (
    <div className="container">
      <div className="container_results">
        <div className="results">
          {calc || '0'}
        </div>
      </div>
      <div className="container_button">
        <div className="button-row">
          <button onClick={() => setCalc('')}>C</button>
          <button>+/-</button>
          <button onClick={deleteNbr}>DEL</button>
          <button onClick={() => updateCalc('/')}>/</button>
        </div>
        <div className="button-row">
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('*')}>X</button>
        </div>
        <div className="button-row">
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('-')}>-</button>
        </div>
        <div className="button-row">
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('+')}>+</button>
        </div>
        <div className="button-row">
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>,</button>
          <button className='btn-double' onClick={calculate}>=</button>
          
        </div>
      </div>
    </div>
  );
};

export default Calculator;