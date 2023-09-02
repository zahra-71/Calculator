import { styled } from "@mui/system";
import { Box } from "@mui/material";

const MyBox = styled(Box)(({theme}) => ({
  width: "100%",
  display: "grid",
  height: "calc(100% -110px)",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gridGap: "10px"
}))
const ButtonBox = ({children}) => {
  return(
    <MyBox>
      {children}
    </MyBox>
  )
}
export default ButtonBox;