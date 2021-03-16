import React from 'react'

import {Container, PanelTOC, IButton} from './InstanceRegistrationStyle'
import TOC from './toc-example'

/**
 * Componente que exibe a segunda etapa de registro de instância.
 * 
 * @param {sendSignUpMutation} Dispatch de Mutation para gerar QR Code
 * @param {dispatch} Dispatch para atualizar o Estado com a etapa de registro
 * @param {STATUS} Dicionário para recuperar o nome correto da etapa
 * @returns Container com segunda etapa de registro de instância
 */
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