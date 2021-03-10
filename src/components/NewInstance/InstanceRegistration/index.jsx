import React from 'react'

import {Container, PanelTOC, IButton} from './style'
import TOC from './toc-example'

const InstanceRegistration = ({state, dispatch, STATUS}) => {

    const generateQRCode = () => {
        dispatch((previousState) => {
            return {...previousState, status: STATUS.READ}
        })
    }
    return (
        <React.Fragment>
            {
                state.status === STATUS.CREATE
                ?
                <Container>
                    <h3>Registro</h3>
                    <PanelTOC id="panel-toc">
                        <TOC />
                    </PanelTOC>
                    <IButton variant="contained" color="primary" onClick={() => generateQRCode()}>
                        Li e Aceito as Condições
                    </IButton>
                </Container>
                : ""
            }
        </React.Fragment>
    )
}

export default InstanceRegistration