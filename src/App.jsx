import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(0);
  const [expression, setExpression] = useState('0');
  const [storeNum, setStoreNum] = useState(0);

  function handleData(data) {
    if (!isNaN(data)) {
      setTotal(total * 10 + parseInt(data));
      setExpression((prevExpression) => 
        prevExpression === '0' ? data : prevExpression + data
      );
    } else if (data === "=") {
      setTotal(storeNum + total);
      setExpression((storeNum + total).toString());
    } else {
      setStoreNum(total);
      setExpression(total + " " + data + " ");
      setTotal(0);
    }
  }

  return (
    <>
      <div className="total">
        {expression}
      </div>
      <div className="calc-row">
        <Buttons value='7' onButtonClick={() => handleData('7')} />
        <Buttons value='8' onButtonClick={() => handleData('8')} />
        <Buttons value='9' onButtonClick={() => handleData('9')} />
        <Buttons value='+' onButtonClick={() => handleData('+')} />
      </div>
      <div className="calc-row">
        <Buttons value='4' onButtonClick={() => handleData('4')} />
        <Buttons value='5' onButtonClick={() => handleData('5')} />
        <Buttons value='6' onButtonClick={() => handleData('6')} />
        <Buttons value='-'/>
      </div>
      <div className="calc-row">
        <Buttons value='1' onButtonClick={() => handleData('1')} />
        <Buttons value='2' onButtonClick={() => handleData('2')} />
        <Buttons value='3' onButtonClick={() => handleData('3')} />
        <Buttons value='x'/>
      </div>
      <div className="calc-row">
        <Buttons value='C'/>
        <Buttons value='0' onButtonClick={() => handleData('0')} />
        <Buttons value='=' onButtonClick={() => handleData('=')} />
        <Buttons value='/'/>
      </div>
    </>
  );
}

function Calculate({ data, storeNum, total, setExpression, setTotal, expression }) {

  if (data === "+") {
    setTotal(storeNum + total);
    setExpression(() => total.toString());
  }

  return null;
}

function Buttons({ value, onButtonClick }) {
  return <button className="buttons" onClick={() => onButtonClick(value)}>
    {value}
  </button>
}