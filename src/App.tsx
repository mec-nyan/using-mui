import "./App.css";
import { Button } from "@mui/material";

function App() {
  function sayHi() {
    alert("Hi!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button variant="contained">Is this a f***ing button?</Button>
          <Button variant="text">I guess it is...</Button>
          <Button variant="outlined">Although...</Button>
        </div>
        <div>
          <Button variant="contained" disabled>
            Is this a f***ing button?
          </Button>
          <Button variant="text" disabled>
            I guess it is...
          </Button>
          <Button variant="outlined" disabled>
            Although...
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={sayHi}>
            Hi!
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
