import {Slider} from "@material-ui/core"
import { useState } from "react"

const RangeSliderMaterial = () => {
    const [val, setVal] = useState([30,40])
    const updateRange = (e,data)=>{
  setVal(data)
    }
  return (
    <div >
      <h1>Range Slider</h1>
      <div style={{width:300, margin:40}}>
        <Slider
            value={val}
            onChange={updateRange}
        />
      </div>
    </div>
  )
}

export default RangeSliderMaterial
