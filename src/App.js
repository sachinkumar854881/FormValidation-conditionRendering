import React from 'react'
import {useState} from 'react'
function App(){
    const[name,setName] = useState("")
    const[age,setAge] = useState("")

    function collectName(event){
        setName(event.target.value)
    }
    function collectAge(event){
        setAge(event.target.value)
    }

    return(
        <div>
            <center>
                <h2>Contact form</h2>
                <form method="POST">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={collectName}/><br/><br/>

                    <label>Age:</label>
                    <input type="number" value={age} onChange={collectAge}/><br/><br/>

                    <div>
                        {name && age ? <button>Submit</button> : <h3>Please fill all required filled</h3>}
                    </div>

                </form>
            </center>
        </div>
    )
}
export default App;