import React, { useState } from 'react';
import './App.css';

function App() {
  const [amountRequested, setAmountRequested] = useState();
  const [duration, setDuration] = useState();
  const [interestRate, setInterestRate] = useState();
  const [calculation, setCalculation] = useState([]);

  function onDurationInput(e) {
    setDuration(e.target.value);
    setCalculation([1, 2, 3]);
  }

  return (
    <div className='AppContainer'>
      <div className='Header'>
        <h1>Your loan</h1>
      </div>
      <div className='MainContent'>
        <div className='LoanInputContainer'>
          <div className='CenteredRow marginBottom10'>
            <span>Amount Requested</span>
            <input type='number' />
            <span>(in £)</span>
          </div>
          <div className='CenteredRow'>
            <span>Duration</span>
            <input type='number' onChange={onDurationInput} />
            <span>(in months)</span>
          </div>
        </div>
        <div className='TablesContainer'>
          <div className='RCF'>
            <div className='CenteredRow'>
              <span>Interest Rate</span>
              <input type='number' />
              <span>(in %)</span>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Repayment date</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Total repayment</th>
                  </tr>
                </thead>
                <tbody>
                  {calculation &&
                    calculation.map((d, index) => {
                      return (
                        <tr key={index}>
                          <td>date</td>
                          <td>money</td>
                          <td>interest</td>
                          <td>total</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <h2>Revolving Credit Facility</h2>
          </div>
          <div className='RCF'>
            <div className='CenteredRow'>
              <span>Interest Rate</span>
              <input type='number' />
              <span>(in %)</span>
            </div>
            <div>Cia bus table data</div>
            <h2>Business loan</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
