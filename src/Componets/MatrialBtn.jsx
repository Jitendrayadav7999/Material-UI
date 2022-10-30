import {Delete} from "@material-ui/icons"
import {Button,ButtonGroup} from "@material-ui/core"
import { useState } from "react"
const MatrialBtn = (props) => {
    const [color,setColor] = useState("primary")
    const [btnDisable,setBtnDisable] = useState(false)
    function cleckme(){
        // alert("hello")
        // setColor("secondary")
        setBtnDisable(true)
        console.log(props.data)
 
    }
  return (
    <div>
      <h1>Matrial Button</h1>
      <Button 
      color={color}
      variant='contained'
      disabled= {btnDisable}
      size= "small"
      onClick={()=>cleckme()}
    //   endIcon={<Delete/>}
    startIcon={<Delete/>}
      >Delete</Button>
      <br /><br /><br /><br />
      <h1> Matrial Button Group</h1>
      <ButtonGroup color="primary" orientation="vertical" variant="contained">
      <Button >One</Button>
      <Button >Two</Button>
      <Button >Three</Button>

      </ButtonGroup>
     


    </div>
  )
}

export default MatrialBtn
