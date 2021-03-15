import React from 'react'

import {Container, PanelTOC, IButton} from './style'
import TOC from './toc-example'

const InstanceRegistration = ({sendSignUpMutation, dispatch, STATUS}) => {

    const generateQRCode = () => {
        sendSignUpMutation()
        
        dispatch((previousState) => {
            return {...previousState, status: STATUS.READ}
        })
    }
    return (
        <Container>
            <h3>Registro</h3>
            <PanelTOC id="panel-toc">
                <TOC />
            </PanelTOC>
            <IButton variant="contained" color="primary" onClick={() => generateQRCode()}>
                Li e Aceito as Condições
            </IButton>
        </Container>
    )
}

export default InstanceRegistration