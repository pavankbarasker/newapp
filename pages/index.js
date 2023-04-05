import { useState } from 'react'
import Clock from 'react-live-clock';



const index = () => {
    let [username, setusername] = useState("John Deo")

    let [frd, setfrd] = useState("Not Friend")



    const changehandler = () => {
        setusername("Josn Deo")
        setfrd("Friend")
    }

  return (
    <div>
        <h1>{username}</h1>
        <Clock
          format={'h:mm:ssa'}
          style={{fontSize: '1.5em'}}
          ticking={true} />
        <p>{frd}</p>
        <button onClick={changehandler}>Change name</button>
    </div>
  )
}

export default index