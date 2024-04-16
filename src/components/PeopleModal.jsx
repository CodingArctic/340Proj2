import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import facebook from '../assets/img/facebook.png';
import xcom from '../assets/img/x.png';

import '../assets/css/People.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{color: '#F76902'}} onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.tagline}
          </Typography>
          <img src={props.imagePath} />
          {/* most of the next few elements use ? to check for field's existance before rendering */}
          {props.website ?
            (<Typography variant="h6" component="h2">
              Website: <a href={props.website} target='_blank'>{props.website}</a>
            </Typography>)
            : null}
          <Typography variant="h6" component="h2">
            Email: <a href={"mailto:" + props.email} target='_blank'>{props.email}</a>
          </Typography>
          {props.phone ?
            (<Typography variant="h6" component="h2">
              Phone Number: {props.phone}
            </Typography>)
            : null}
          {props.office ?
            (<Typography variant="h6" component="h2">
              Office Location: {props.office}
            </Typography>)
            : null}
          {props.interestArea ?
            (<Typography variant="h6" component="h2">
              Areas of Interest: {props.interestArea}
            </Typography>)
            : null}
          {props.twitter ?
            (<a href={"https://www.twitter.com/" + props.twitter} target='_blank'><img
              src={xcom}
              alt="x.com logo"
              height={"24px"}
              /></a>)
            : null}
          {props.facebook ?
            (<a href={"https://www.facebook.com/" + props.facebook + "/"} target='_blank'><img
              src={facebook}
              alt="facebook logo"
              height={"24px"}
              /></a>)
            : null}
        </Box>
      </Modal>
    </div>
  );
}
