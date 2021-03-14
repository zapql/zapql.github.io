import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import {Container, IList, IButton} from './style'

const InstanceList = ({dispatch, STATUS}) => {

    const createNewInstance = () => {
        dispatch((previousState) => {
            return {...previousState, status: STATUS.CREATE}
        })
    }
    return (
        <Container>
            <h3>Instâncias</h3>
            <IList>
                <ListItem button>
                    <ListItemIcon>
                        <NightsStayIcon />
                    </ListItemIcon>
                    <ListItemText primary="INST 1" />
                </ListItem>
            </IList>
            <IButton onClick={() => createNewInstance()}>
                <AddAPhotoIcon />
            </IButton>
        </Container>
    )
}

export default InstanceList