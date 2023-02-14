import react from 'react'
import './App.css';

function Calculate(weight,bottles,time,gender){
const litre = bottles * 0.33;
const grams = litre * 8 * 4.5;
const burning = weight / 10;
const gramsLeft = grams - (burning * time);

return gramsLeft / (weight * gender)

}

function App() {
  const [result, setResult] = react.useState(0)
  

  return (
    <>
    <h1>Calculating alcohol blood level</h1>
    <form onSubmit={event=>{
      /* estää sivun uudelleen latauksen */
      event.preventDefault()
      const result = Calculate(
        event.target.weight.value,
        event.target.bottles.value,
        event.target.time.value,
        event.target.gender.value
      )
      if(result < 0 ){
        result = 0 
      }
      setResult(result.toFixed(1))}}>
    <div>
      <label>Weigth</label>
      <input type="text" id="weight" inputmode="numeric" ></input>
    </div>
    <div>
      <label>Bottles</label>
      <input type="number" id="bottles"></input>
    </div>
    <div>
      <label>Time</label>
      <input type="number" id="time"></input>
    </div>
    <div>
      <label for="gender">Gender</label>
      <input type="radio" value="0.7" name="gender"></input><label>Male</label>
      <input type="radio" value="0.6" name="gender"></input><label>Female</label>
    </div>
    <div>
      <p>{result}</p>
    </div>
    <button >Calculate</button>
    </form>
    </>
  );
}

export default App;
