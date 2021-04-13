import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

import Gallery from './Gallery';
import Photos from './Photos';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function GalleryModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState(0);

  const handleOpen = (i) => {
    setOpen(true);
    setImage(i);
  };

  const handleClose = () => {
    setOpen(false);
    setImage(0);
  };

  return (
    <div>
      <Gallery onClick={(e) => handleOpen(e)} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Photos imgIndex={image} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
