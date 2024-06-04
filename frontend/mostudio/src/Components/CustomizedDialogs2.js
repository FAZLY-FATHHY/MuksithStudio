import React from 'react';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import WovenImageList2 from './WovenImageList2';

const CustomizedDialogs2 = ({ state, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={state} onClose={handleClose}>
            

        <WovenImageList2/>

            <DialogActions>
                <Button onClick={handleClose}> close </Button>
            </DialogActions>
            </Dialog>
    );
};

export default CustomizedDialogs2;