import {Switch} from "@material-ui/core"

const SwitchMaterial = () => {
    const getValue =(e, val)=>{
        console.log(val)
    }
  return (
    <div>
      <h1>Switch</h1>
      <Switch
        color="primary"
        size="small"
        onChange={getValue}
      />
      <br /><br />
    </div>
  )
}

export default SwitchMaterial
