
import {useState} from "react"
import Axios from "axios"

// http://localhost:3000
 
// axios module
// 1) Frontend and Backend can be connected together
// 2) We can also send the frontend data to the backend

function App() 
{

  const [myTask, setMyTask] = useState("")
  // myTask = "Cooking"

  const [confirmationMessage, setConfirmationMessage] = useState("")

  // confirmationMessage = "Your Task is saved successfully!!!"
  function collectIt(event)
  {
    // We need to collect the task and store it in myTask variable

    setMyTask(event.target.value)
  }

  async function handleSubmit()
  {
    // Logic to send the data "Playing" to the Server

    // React Appn --> Port No --> 3000

    // CORS --> module --> npm install cors
    // (Cross origin resource sharing)
    await Axios.post("http://localhost:7070/read/data", {"message": myTask })
    .then(function(output)
    {
      setConfirmationMessage(output.data)
    })
    .catch(function(error)
    {
      console.log(error)
    })
  }

  return (
   <div>
      Enter Task:<input type="text" name="task" onChange={collectIt}/><br/><br/>
      <button onClick={handleSubmit}>Submit</button>

      <h1>{confirmationMessage}</h1>
   </div>
  );
}

export default App;
