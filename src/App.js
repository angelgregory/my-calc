import logo from "./logo.svg";
import "./App.css";

function CalcButton({ buttonLabel = "?" }) {
   function handlePlayClick() {
      alert(`${buttonLabel}`);
   }
   return (
      <div>
         <button onClick={handlePlayClick}>{buttonLabel}</button>
      </div>
   );
}
function CalcScreen({ log = "?" }) {
   return (
      <div>
         <h1>{log}</h1>
      </div>
   );
}
function handleClick() {
   alert("You clicked me!");
}

function App() {
   return (
      <div className="App">
         <div className="calculator">
            <div className="screen-log">
               <CalcScreen log="0" />
            </div>
            <div className="button-section">
               <div className="layers">
                  <CalcButton buttonLabel="OR" />
                  <CalcButton buttonLabel="0" />
                  <CalcButton buttonLabel="=" />
                  <CalcButton buttonLabel="+" />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="1" />
                  <CalcButton buttonLabel="2" />
                  <CalcButton buttonLabel="3" />
                  <CalcButton buttonLabel="-" />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="4" />
                  <CalcButton buttonLabel="5" />
                  <CalcButton buttonLabel="6" />
                  <CalcButton buttonLabel="x" />
               </div>
               <div className="layers">
                  <CalcButton buttonLabel="7" />
                  <CalcButton buttonLabel="8" />
                  <CalcButton buttonLabel="9" />
                  <CalcButton buttonLabel="÷" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
