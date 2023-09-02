import { styled } from "@mui/system"
import { Box } from "@mui/material"

const MyBox = styled(Box)(({theme}) =>({
  width: "100%",
  height: "100px",
  borderRadius: "10px",
  padding: "0 10px",
  marginBottom: "10px",
  backgrounColor: "#4357692d",
  color: "white",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  boxSizing: "border-box",
  border: "2px"
}))
const Screen = ({value}) => {
  return (
    <MyBox>
      {value}
    </MyBox>
  )
}

export default Screen;