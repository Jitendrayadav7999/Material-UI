import { Radio } from "@material-ui/core"
import { useState } from "react"
const MaterialRadioBtn = () => {
  const [gender, setGender] = useState("female")
  const radioHandler = (e) => {
    // alert("hello")
    console.log(e.target.value)
    setGender(e.target.value)

  }
  return (
    <div>
      <h1>Matrial Radio Button</h1>
      <div>
        <span>Male</span>
        <Radio value="male" checked={gender === "male"} color="primary" onChange={radioHandler} />
      </div>
      <div>
        <span>Female</span>
        <Radio value="female" checked={gender === "female"} color="primary" onChange={radioHandler} />
      </div>
      <div>
        <span>Other</span>
        <Radio value="other" checked={gender === "other"} color="primary" onChange={radioHandler}
        // disabled
        />
      </div>
    </div>
  )
}

export default MaterialRadioBtn
