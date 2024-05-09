import {useEffect, useState} from "react";
export default function UserInput() {
    const [initialInvestment, setInitialInvestment] = useState(0)
    const [annualInvestment, setAnnualInvestment] = useState(0)
    const [expectedReturn, setExpectedReturn] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect( () => {
        if(initialInvestment && annualInvestment && expectedReturn && duration) {
            calculateInvestmentResults()
        }
    }, [initialInvestment, annualInvestment, expectedReturn, duration])
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label id="user-input">INITIAL INVESTMENT</label>
                    <input id="user-input"
                           type="number"
                           onChange={() => setInitialInvestment(event.target.value)}></input>
                </div>
                <div>
                    <label id="user-input">ANNUAL INVESTMENT</label>
                    <input id="user-input"
                           type="number"
                           onChange={() => setAnnualInvestment(event.target.value)}></input>
                </div>
                <div>
                    <label id="user-input">EXPECTED RETURN</label>
                    <input id="user-input"
                           type="number"
                           onChange={() => setExpectedReturn(event.target.value)}></input>
                </div>
                <div>
                    <label id="user-input">DURATION</label>
                    <input id="user-input"
                           type="number"
                           onChange={() => setDuration(event.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

