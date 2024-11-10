import './App.css';
import {useState} from 'react';

export default function App() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result,setResult] = useState("");
  const [calculated, setCalculated] = useState(false);

  let handleResult = ()=>{
    if(weight==="" || height===""){
      alert("Enter a valid input")
      setCalculated(false);
      return;
      
    }
    const ans = weight / (height * height);
    setResult(ans.toFixed(2));
    setWeight("");
    setHeight("");
    if(calculated!==true){
      setCalculated(!calculated);
    }
    
  }

  return (
    <div className="container">
    <div className="container-body ">
      <h1>
        BMI Calculator
      </h1>
      <div className="body">
      <div className="input-field">
        <span><b>Weight:</b></span>
        <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter your body weight in kg"/><br/>
      </div>
      <div className="input-field">
        <span><b>Height:</b></span>
        <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Enter your height in kg"/><br/>
      </div>
      <button onClick={handleResult}>Calculate</button>
      {calculated?<h3>Your BMI is {result}</h3>:null}
      
      </div>
    </div>
    </div>
  )
}
