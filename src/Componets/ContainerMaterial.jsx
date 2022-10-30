import React from 'react'
import { Container } from "@material-ui/core"
const ContainerMaterial = () => {
  return (
    <div>
      <Container maxWidth="xl" style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container</h1>
      </Container>

      <Container maxWidth="lg" style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container</h1>
      </Container>

      <Container maxWidth="md" style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container</h1>
      </Container>

      <Container maxWidth="sm" style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container</h1>
      </Container>



      <Container maxWidth="xs" style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container</h1>
      </Container>

      <Container fixed style={{ backgroundColor: "red" }}>
        <h1>LayOut | Container | Fixed</h1>
      </Container>

      <br /><br />
    </div>
  )
}

export default ContainerMaterial
