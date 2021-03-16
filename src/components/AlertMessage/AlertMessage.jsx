import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

/**
 * Esse componente tem como propósito servir de alerta para 
 * desconexões, token inválido, redirecionamentos, etc.
 * 
 * Seu estado (aberto ou fechado), assim como a cor do alerta (severity)
 * e a mensagem são controlados por um Estado.
 * 
 * @param {state, dispatch} Recebe e envia Estado de Alerta 
 * @returns MUI Snackbar Component
 */
const AlertMessage = ({state, dispatch}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch((previousState) => {
            return {...previousState, open: false}
        });
    };

    return (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={state.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert elevation={6} variant="filled" onClose={handleClose} severity={state.severity}>
            {state.message}
            </Alert>
        </Snackbar>
    )
}

export default AlertMessage