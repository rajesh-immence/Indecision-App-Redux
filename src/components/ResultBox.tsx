import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { randomChoice, selectData, useAppDispatch, useAppSelector } from '../counter/counterSlice';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ResultBox({}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const data= useAppSelector(selectData);

  const handleClickOpen = () => {
    dispatch(randomChoice());
    if(data){
        setOpen(true);
    }else{
        setOpen(false);
    }
    };

  const handleClose = () => {
    setOpen(false);
    };

  return (
    <div style={{width:"50%"    }}>
      <Button sx={{width:"100%", bgcolor:"#24527ac7"}}  variant="contained" size="large"  onClick={handleClickOpen}>
        Best choice
      </Button>
      <Dialog
      PaperProps={{
        style: {
          borderRadius:"12px",
          backgroundColor: "#C2CEEA",
          color:"#24527a",
          boxShadow: "none"
        },
      }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{fontWeight:"600", bgcolor:"#C2CEEA",textAlign:"center"}} variant='h6'>{"This is the best choice for you."}</DialogTitle>
        <DialogContent>
          <DialogContentText textAlign={"center"}  color="#24527a"  variant='h5' id="alert-dialog-slide-description">
           {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
          justifyContent: "center",
        }}>
          <Button 
          variant='contained'
          sx={{
            margin:"0 0px 10px 0",
            fontWeight:"600",
            bgcolor:"#24527a"
          }} onClick={handleClose}>ok</Button>
          <Button
          variant='contained'
          sx={{
            margin:"0 0px 10px 0",
            fontWeight:"600",
            bgcolor:"#24527a"
          }} onClick={handleClose}>cancle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}