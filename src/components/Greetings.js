import React, { useState } from 'react'

function Greetings() {
  const [greeting, setGreeting] = useState({ greet: 'Hello, Brother' })
  console.log(greeting, setGreeting)

  function updateGreeting() {
    setGreeting({ greet: 'Hello, World-Wide Web' })
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  )
}

export default Greetings
