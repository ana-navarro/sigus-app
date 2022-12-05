import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Title } from './styled.style';
import { ResponseStripe, UnstyledLinks } from '../admin/credit/styled.style';
import cancel from './img/cancel.jpg'
import { ToastContainer } from 'react-toastify';

export const Cancel = () => {
    return (
        <>
            <ToastContainer />
            <AppBar style={{ background: '#060b26' }}>
                <Toolbar>
                    <Title><UnstyledLinks to={'/'}><h3>SIGUS</h3></UnstyledLinks></Title>
                </Toolbar>
            </AppBar>
            <ResponseStripe>
                <div className='text-center'><h3>Realização de Pagamento cancelada!</h3></div>
                <img src={cancel} className="img-fluid" />
            </ResponseStripe>
        </>
    )
}
