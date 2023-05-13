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

export default function ResultBox() {
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
    <div style={{width:"25%"    }}>
      <Button sx={{width:"100%"}}  variant="contained" size="large" color="warning" onClick={handleClickOpen}>
        Best choice
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle variant='h5'>{"This is the best choice for you."}</DialogTitle>
        <DialogContent>
          <DialogContentText variant='h5' id="alert-dialog-slide-description">
           {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}