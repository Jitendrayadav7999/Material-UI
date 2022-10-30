import React from 'react'
import {Grid} from "@material-ui/core"
const GridMaterial = () => {
  return (
   <Grid lg={12} item container spacing={2}>
     <Grid item lg={3} xs={12}><h1 style={{backgroundColor:"blue"}}>Block 1</h1></Grid>
     <Grid item lg={3} xs={12}><h1 style={{backgroundColor:"blue"}}>Block 2</h1></Grid>
     <Grid item lg={3} xs={12}><h1 style={{backgroundColor:"blue"}}>Block 3</h1></Grid>
     <Grid item lg={3} xs={12}><h1 style={{backgroundColor:"blue"}}>Block 4</h1></Grid>
  </Grid>
  )
}
// We have Hidden so we can esily hide  block acoding to size
export default GridMaterial
