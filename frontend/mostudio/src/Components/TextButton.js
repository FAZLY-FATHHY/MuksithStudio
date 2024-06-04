import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useInView } from 'react-intersection-observer';
import Home from '../Routes/Home'; // Ensure the import path is correct
import './TextButton.css';
import img11 from '../Assets/Muslim husband and wife _ Muslim husband and wife aesthetic _ Muslim husband wife dp.jpg'


function ButtonText() {
    const { ref: navbarRef, inView: navbarInView } = useInView({ triggerOnce: true });
  
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="container">

                {!open && (
                    <Button
                        ref={navbarRef}
                        className={`navbar fade-in-section ${navbarInView ? 'is-visible' : ''}`}
                        variant="text"
                        style={{
                            color: 'rgb(229, 184, 11)',
                            fontSize: '30px',
                            marginLeft: '-10px',
                            marginTop:'450px',
                            paddingTop: '10px',
                            fontFamily: '"IBM Plex Sans Arabic", sans-serif'
                        }}
                        onClick={handleClick}
                    >
                        ﷽
                    </Button>
                )}

            {open && <Home state={open} setOpen={setOpen} />}
               
            {
                !open && (
                                <div className='frontContainer'>

   <div className='imagee'>

   <img src={img11} alt="img" />

   </div>
    </div>
                )
            }

         
            </div>
        </div>
    );
}

export default ButtonText;
