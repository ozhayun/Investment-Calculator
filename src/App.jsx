import Header from '../src/Components/Header'
import UserInput from "./Components/UserInput.jsx";
import {useState} from "react";
import Results from "./Components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: -10000,
        annualInvestment: 12000,
        expectedReturn: 6,
        duration: 0
    })
    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
        {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
        {inputIsValid && <Results input={userInput}/>}
    </div>
  )
}

export default App
