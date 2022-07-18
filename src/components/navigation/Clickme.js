import React, {useState} from 'react'

function Clickme(){
   const [word, setWord] = useState('')
   const [count, setCount] = useState(0)
   

   function handleWord (event) {

       setWord(event.target.value)
       
   }

   function counter (event) {
        event.preventDefault()

        setCount(count+word.length)
        setWord('')
   }


    

    return (
        <form onSubmit={(counter)}>
            <input type="text" onChange={handleWord} value={word}></input>
            <button type="submit">Click me!</button>
            <p>Count is {count}</p>
        </form>
    )
    }

    export default Clickme;