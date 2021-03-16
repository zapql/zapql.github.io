import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import {Container, IList, IButton} from './InstanceListStyle'
import { useHistory } from 'react-router'

const InstanceList = ({state, dispatch, STATUS}) => {

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
                    <ListItem key={i} button onClick={() => redirectTo(state[i].jwt)}>
                        <ListItemIcon>
                            <NightsStayIcon />
                        </ListItemIcon>
                        <ListItemText primary={`[${i}] ${state[i].name}`} />
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