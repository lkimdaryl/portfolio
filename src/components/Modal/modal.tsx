import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface modalProps{
    open: boolean;
    handleClose: () => void;
    job?: Job
}

interface Job {
  company: string;
  [key: string]: any; // optional, if you expect more props
}

export default function BasicModal( {open, handleClose, job} : modalProps) {

    return (
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style} id={'box'}>
                    <Button onClick={handleClose}>X</Button>
                    <Typography variant="h6"><strong>{job?.title}</strong></Typography>
                    <Typography component="span">{job?.company}</Typography>
                    <Typography component="span"> | {job?.start_date} - {job?.end_date}</Typography>
                    <Typography>{job?.location}</Typography>
                    <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                        {job?.responsibilities.map((task, idx) => (
                            <li key={idx}> {task}</li>
                        ))}
                    </Typography>
                    {job?.achievements && (
                        <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                            {job?.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                            ))}
                        </Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
