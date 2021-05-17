import React from 'react'
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";


function Sidebar() {
    return (
        <div>
            <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif",margin: 16 }}
          >
          Category
          </Typography>
             <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> PEOPLE
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> PREMIUM
          </Typography> <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> PETS
          </Typography> <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> FOODS
          </Typography> <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> LANDMARKS
          </Typography> <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> CITIES
          </Typography>
           <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> NATURE
          </Typography>
         <hr />
         <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif", margin: 16  }}
          >
          Price Range
          </Typography>
         <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Lower than $20
          </Typography>
          
          <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> $20 - $100
          </Typography><Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> $100 - $200
          </Typography><Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
           <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> More than $200
          </Typography>
        </div>
    )
}

export default Sidebar
