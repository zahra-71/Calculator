import React, {useState} from "react"
import { styled } from "@mui/system"
import { Button } from "@mui/material"

const MyButton = styled(Button)(({theme}) => ({
  backgroundColor: "rgb(80, 60, 209)",
  color: "rgb(255, 255, 255)",
  fontSize: "24px",
  fontWeight: "bold",
  borderRadius: "10px",
  cursor: "pointer",
  outLine: "none",
  '&:hover': {
    backgroundColor: "rgb(61, 43, 184)"
  },
}))

const ButtonNumber = ({ value, onClick }) => {

  // const handleClick = () => {
  //   onClick
  //   // console.log("number", value)
  // }

  return(
    <MyButton onClick={onClick}
      sx={value === "=" && {backgroundColor: "#fbb034", gridColumn: "3/5",
        '&:hover':{
          backgrounColor: "rgb(228, 39, 15)"
        }
      }}
    >
      {value}
    </MyButton>
  )
}

export default ButtonNumber;