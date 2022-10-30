import {Select,MenuItem} from "@material-ui/core"
import { useState } from "react"
const SelectMaterial = () => {
    const [Course, SetCourse] = useState("")
    const updateSelectVal = (e)=>{
        SetCourse(e.target.value)
    }
  return (
    <div>
      <h1>Select</h1>
      <Select value={Course} displayEmpty onChange={updateSelectVal}>
        <MenuItem value=""  disabled>Select Course</MenuItem>
        <MenuItem value={1} >MongoDb</MenuItem>
        <MenuItem value={2}>Express</MenuItem>
        <MenuItem value={3}>React</MenuItem>
        <MenuItem value={4}>Node</MenuItem>
      </Select>
      <br /><br /><br /><br />
    </div>
  )
}

export default SelectMaterial
