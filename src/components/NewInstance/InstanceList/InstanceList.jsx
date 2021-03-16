import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Delete from '@material-ui/icons/Delete'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import {Container, IList, IButton} from './InstanceListStyle'
import { useHistory } from 'react-router'

/**
 * Componente que exibe a primeira estapa de Registro de Instância.
 * 
 * Uma lista de instâncias registradas é exibida, o usuário pode clicar
 * para autenticar (reconnect) e utilizar a instância requisitada.
 * 
 * Um botão atualiza o Estado para exibir a próxima etapa de registro.
 * 
 * @param {state, dispatch} Recebe e envia Estado com etapa de registro e qrCode gerado
 * @param {STATUS} Dicionário para recuperar o nome correto da etapa
 * @param {deleteInstance} Função para deletar instância listada
 * @returns Container primeira etapa de registro de instância
 */
const InstanceList = ({state, dispatch, STATUS, deleteInstance}) => {

    const createNewInstance = () => {
        dispatch((previousState) => {
            return {...previousState, status: STATUS.CREATE}
        })
    }

    let history = useHistory()

    const redirectTo = (jwt) => {
        return history.push("/open/"+jwt)
    }
    
    return (
        <Container>
            <h3>Instâncias</h3>
            <IList>
                {Object.keys(state).map((i) => (
                    <ListItem key={i} button>
                        <ListItemIcon onClick={() => redirectTo(state[i].jwt)}>
                            <NightsStayIcon />
                        </ListItemIcon>
                        <ListItemText primary={`[${i}] ${state[i].name}`} onClick={() => redirectTo(state[i].jwt)} />
                        <ListItemIcon onClick={() => deleteInstance(i)}>
                            <Delete />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </IList>
            <IButton onClick={() => createNewInstance()}>
                <AddAPhotoIcon />
            </IButton>
        </Container>
    )
}

export default InstanceList