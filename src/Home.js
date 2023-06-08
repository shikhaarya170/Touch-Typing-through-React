import React, { useEffect, useState } from 'react'

function Home() {

  const [inputvalue, setInputValue] = useState("");
  const [sentenceRandom, setSentenceRandom] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [keyCounted, setKeyCounted] = useState(false)

  const sentence = [
    "safdga",
    "jsadjfiafu",
    "jdajfd",
    "hisdioifs"
  ]

  const check = inputvalue === sentenceRandom.slice(0, inputvalue.length)
  function randomsentence() {
    const randomIndex = Math.floor(Math.random() * sentence.length)
    setSentenceRandom(sentence[randomIndex])

  }

  useEffect(() => {
    randomsentence()
  }, [])
  return (
    <div class="main1">
      <h2>TouchTypingProject</h2>
      <p>type the sentence below</p>
      <h3>{sentenceRandom}</h3>
      <input type='' placeholder='Enter the above word' id='text' value={inputvalue} onChange={(e) => {
        setInputValue
          (e.target.value)
      }}
        style={{ backgroundColor: check ? "green" : "red" }}
      ></input>
    </div>
  )
}

export default Home