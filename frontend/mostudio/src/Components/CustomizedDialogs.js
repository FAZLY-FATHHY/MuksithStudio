import React from 'react';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import WovenImageList from './WovenImageList';

const CustomizedDialogs = ({ state, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={state} onClose={handleClose}>
            

        <WovenImageList/>

            <DialogActions>
                <Button onClick={handleClose}> close </Button>
            </DialogActions>
            </Dialog>
    );
};

export default CustomizedDialogs;