import {useEffect, useState} from "react";
export default function UserInput({onChange, userInput}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                           required
                           value={userInput.initialInvestment}
                           // onChange={() => setInitialInvestment(event.target.value)}></input>
                           onChange={() => onChange('initialInvestment', event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                           required
                           value={userInput.annualInvestment}
                           // onChange={() => setAnnualInvestment(event.target.value)}></input>
                           onChange={() => onChange('annualInvestment', event.target.value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                           required
                           value={userInput.expectedReturn}
                           // onChange={() => setExpectedReturn(event.target.value)}></input>
                           onChange={() => onChange('expectedReturn', event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                           required
                           value={userInput.duration}
                           // onChange={() => setDuration(event.target.value)}></input>
                           onChange={() => onChange('duration', event.target.value)}></input>
                </p>
            </div>
        </div>
    )
}

