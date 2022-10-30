import {TextField} from "@material-ui/core"
const TextFieldMaterial = () => {
    const getValue = (e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
      <h1>Text Field</h1>
      <TextField
      label="Enter Name"
      color="primary"
      variant="outlined"
      size="small"
    //   multiline
    //   fullWidth
      type="password"
      onChange={getValue}
 
       />
       <br /><br />
    </div>
  )
}

export default TextFieldMaterial
