import {Slider} from "@material-ui/core"
const MaterialSlider = () => {
    const mark = [
        {
            value:0,
            label:"start"
        },
        {
            value:75,
            label:"middle"
        },
        {
            value:150,
            label:"max"
        }
    ]
    const getValue = (e, val)=>{
         console.log(val)
    }
  return (
    <div>
      <h1>Material Slider</h1>
      <div style={{height:200,margin:30,marginLeft:600}}>
        <Slider
            color="primary"
            defaultValue={60}
            max={150}
            step={20}
            marks={mark}
            valueLabelDisplay="auto"
            onChange={getValue}
            orientation="vertical"
        />
      </div>
    </div>
  )
}

export default MaterialSlider
