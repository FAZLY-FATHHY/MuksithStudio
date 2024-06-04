import React from 'react';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import WovenImageList1 from './WovenImageList1';

const CustomizedDialogs1 = ({ state, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={state} onClose={handleClose}>
            

        <WovenImageList1/>

            <DialogActions>
                <Button onClick={handleClose}> close </Button>
            </DialogActions>
            </Dialog>
    );
};

export default CustomizedDialogs1;