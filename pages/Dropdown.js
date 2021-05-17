import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    borderRadius: theme.spacing(1),
    position: "absolute",
    padding: theme.spacing(5),
    top: theme.spacing(3),
  },
}));

function DropDown(props) {
  const classes = useStyles();

  const { title, cartItems, open, setOpen, toggle, onAdd, onClear } = props;
  

  return (
    <Dropdown 
    active={true}
    toggle={toggle}
      isOpen={open}
      style={{ width: "360px", height: "auto", justifyContent: "end", float: "right", zIndex: 5 }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" components="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button onClick={()=>setOpen(true)}>
            <CloseIcon />
          </Button>
        </div>
      </div>
      <DropdownMenu>
        <div>{cartItems?.length === 0 && <div>No items added</div>} </div>
        <div>
          {cartItems.map((good) => (
            <Grid container>
              <Grid item md={6} style={{padding: 10}}> 
                <h3 style={{fontWeight: "bold"}}>{good.data.name}</h3>
                <h5  style={{fontWeight: "bold", opacity: 0.7}} >${good.data.price?.toFixed(2)}</h5>
              </Grid>
              <Grid item md={6}>
                <Image
                  src={
                    good.data.image.src ? good.data.image.src : good.data.image
                  }
                  alt="Vercel Logo"
                  width={100}
                  height={80}
                />
              </Grid>
            </Grid>
          ))}
        </div>
        <hr />
        <Button
          style={{
            background: "#2c3225",
            height: 40,
            color: "white",
            width: "100%",
          }}
          onClick={onClear}
        >
          CLEAR
        </Button>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;
