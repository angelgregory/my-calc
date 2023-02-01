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
   const [num2, setNum2] = useState("");
   const [oper, setOper] = useState("");

   const numberClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;

      if (oper === "+" || oper === "-" || oper === "x"|| oper === "÷") {
         setNum2(parseInt(num2 + value));
         setDisp(num2 + value);
      } else {
         setNum1(parseInt(num1 + value));
         setDisp(num1 + value);
      }

      console.log("num1: ", num1);
      console.log("num2: ", num2);

      console.log(value);
   };

   const operClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      setOper(value);
      setDisp(value);
      console.log(value);
   };
   const compute = () => {
      let ans;
      let firstNum = num1;
      let secNum = num2;

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
            case "÷":
               ans = firstNum / secNum;
            setDisp(ans);
         default:
            return 0;
            

      }
      setNum1("");
      setNum2("");
      setOper("");
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
