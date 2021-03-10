import React, {useState} from 'react'

import InstanceList from '../../components/NewInstance/InstanceList'
import InstanceRegistration from '../../components/NewInstance/InstanceRegistration'
import InstanceReadCode from '../../components/NewInstance/InstanceReadCode'
import {Container, Form} from './style'

const NewInstance = () => {
    const STATUS = {
        LIST: "list",
        CREATE: "create",
        LOAD: "load",
        READ: "read"
    }

    const [registrationState, setRegistrationState] = useState({status: STATUS.LIST})

    console.log(registrationState)
    return (
        <Container container>
            <Form>
                <InstanceList state={registrationState} dispatch={setRegistrationState} STATUS={STATUS} />
                <InstanceRegistration state={registrationState} dispatch={setRegistrationState} STATUS={STATUS} />
                <InstanceReadCode state={registrationState} dispatch={setRegistrationState} STATUS={STATUS} />
            </Form>
        </Container>
    )
}

export default NewInstance