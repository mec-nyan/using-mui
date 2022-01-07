import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Is this a f***ing button?</Button>
        <Button variant="text">I guess it is...</Button>
        <Button variant="outlined">Although...</Button>
      </header>
    </div>
  );
}

export default App;
