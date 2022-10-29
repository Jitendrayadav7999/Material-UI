import { Checkbox } from "@material-ui/core"
import { Favorite, FavoriteBorder } from "@material-ui/icons"
import { useState } from 'react'
const MaterialCheckBox = () => {
  const [name, setName] = useState([])
  function getValue(e) {
    let data = name;
    data.push(e.target.value)
    setName(data)
    console.log(name)
  }
  return (
    <div>
      <h1>Matrial CheckBox</h1>
      <Checkbox color='secondary' value="jitendra" onChange={(e) => getValue(e)} />
      <Checkbox color='secondary' value="Nitin" onChange={(e) => getValue(e)} />
      <Checkbox color='secondary' value="Hrishabh" onChange={(e) => getValue(e)} />
      <Checkbox color='secondary' value="Yash" indeterminate onChange={(e) => getValue(e)} />
      <Checkbox color='secondary' value="Yash" icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e) => getValue(e)} />
    </div>
  )
}

export default MaterialCheckBox
