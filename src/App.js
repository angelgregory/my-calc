import { useState } from "react";

import "./App.css";

function CalcButton({ buttonLabel = "?", onClick }) {
   return (
      <div>
         <button onClick={onClick}>{buttonLabel}</button>
      </div>
   );
}
function CalcScreen({ display }) {
   return (
      <div>
         <h1>{display}</h1>
      </div>
   );
}

function App() {
   const [disp, setDisp] = useState("0");
   const [num1, setNum1] = useState("");
   const [oper, setOper] = useState("");

   const numberClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      setDisp(parseInt(disp + value));
      console.log(value);
   };

   const operClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      setDisp(value);
      setNum1(disp);
      setOper(value);
      console.log(value);
   };
   const compute = () => {
      let ans;
      let firstNum = parseInt(num1);
      let secNum = parseInt(disp);
      switch (oper) {
         case "+":
            ans = firstNum + secNum;
            setDisp(ans);
            break;
         case "-":
            ans = firstNum - secNum;
            setDisp(ans);
            break;
         case "x":
            ans = firstNum * secNum;
            setDisp(ans);
            break;
      }
      console.log("num1", num1);
      console.log("oper", oper);
   };

   const clearClickHandler = () => {
      // setNum(0);
      setDisp("0");
      console.log(disp);
   };

   return (
      <div className="App">
         <div className="calculator">
            <div className="screen-log">
               <CalcScreen display={disp} />
            </div>
            <div className="button-section">
               <div className="layers">
                  <CalcButton buttonLabel="CLR" onClick={clearClickHandler} />
                  <CalcButton buttonLabel="0" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="=" onClick={compute} />
                  <CalcButton buttonLabel="+" onClick={operClickHandler} />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="1" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="2" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="3" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="-" onClick={operClickHandler} />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="4" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="5" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="6" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="x" onClick={operClickHandler} />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="7" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="8" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="9" onClick={numberClickHandler} />
                  <CalcButton buttonLabel="÷" onClick={operClickHandler} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
