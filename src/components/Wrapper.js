import "./styles/Wrapper.css"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

// styles
const MyBox = styled(Box)(({ theme }) => ({
  width: "340px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "#485461",
  margin: "auto",
  marginTop: "10px",
}))

const Wrapper = ({ children }) => {
  return (
    <MyBox
    >
      {children}
    </MyBox>
  )
}

export default Wrapper