import React,{useState} from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core"
const TabsMaterial = () => {
    const [value,setValue] = useState(0)
const Tabshandle = (e,val)=>{
    setValue(val)
}
    return (
        <div>
            <h1>Taps</h1>
            <AppBar position="static">
                <Tabs value={value}  onChange={Tabshandle}>
                    <Tab label = "item 1" />
                    <Tab label = "item 2"/>
                    <Tab label = "item 3"/>
                </Tabs>
            </AppBar>
            <TabPanel value = {value} index={0}>Item 1 data</TabPanel>
            <TabPanel value = {value} index={1}>Item 2 data</TabPanel>
            <TabPanel value = {value} index={2}>Item 3 data</TabPanel>
           <br /><br /><br /><br /><br />
        </div>
    )
}

function TabPanel(props){
    const {children, value, index} = props
    return (
        <div>
            {
                value === index && (
                    <h1>{children}</h1>
                )
            }
        </div>
    )
}

export default TabsMaterial
