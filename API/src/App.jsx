import React, { useState } from 'react'
import AskAi from './AskAi'
import './App.css'

export default function App() {
  let [output, setOutput] = useState('')

  async function handleAi(e) {

    e.preventDefault();
    let question = e.target[0].value;
    let answer = await AskAi(question);
    setOutput(answer);
  }


  return (
    <div>
      <center>
        <h1>The GROQ AI APP</h1>
        <div id="From">
          <form onSubmit={handleAi}>
            <input type="text" id="input" placeholder="Enter your query here.." />
            <button type="submit">ASK GROQ</button>

          </form>
        </div>

        <div >
          {output}

        </div>
      </center>
    </div>
  )
}

