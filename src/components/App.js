
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [value,setValue] = useState(0)

  return (
    <div>
      <p>Button clicked {value} times</p>
        <button onClick={()=>setValue(value+1)}>Clie</button>
    </div>
  )
}

export default App
