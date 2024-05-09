import {useEffect, useState} from "react";
export default function UserInput() {
    // const [initialInvestment, setInitialInvestment] = useState(0)
    // const [annualInvestment, setAnnualInvestment] = useState(0)
    // const [expectedReturn, setExpectedReturn] = useState(0)
    // const [duration, setDuration] = useState(0)
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 12000,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    // useEffect( () => {
    //     if(initialInvestment && annualInvestment && expectedReturn && duration) {
    //         calculateInvestmentResults()
    //     }
    // }, [initialInvestment, annualInvestment, expectedReturn, duration])

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                           required
                           value={userInput.initialInvestment}
                           // onChange={() => setInitialInvestment(event.target.value)}></input>
                           onChange={() => handleChange('initialInvestment', event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                           required
                           value={userInput.annualInvestment}
                           // onChange={() => setAnnualInvestment(event.target.value)}></input>
                           onChange={() => handleChange('annualInvestment', event.target.value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                           required
                           value={userInput.expectedReturn}
                           // onChange={() => setExpectedReturn(event.target.value)}></input>
                           onChange={() => handleChange('expectedReturn', event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                           required
                           value={userInput.duration}
                           // onChange={() => setDuration(event.target.value)}></input>
                           onChange={() => handleChange('duration', event.target.value)}></input>
                </p>
            </div>
        </div>
    )
}

