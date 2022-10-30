import { Box, Button } from "@material-ui/core"
const BoxMaterial = () => {
    return (
        <div>
            <h1>Layout | Box</h1>
            <Box
                //   component="span"
                clone style={{ color: "red" }}
            >
                <Button>Click Me</Button>
            </Box>

            <br /><br />
        </div>
    )
}

export default BoxMaterial
