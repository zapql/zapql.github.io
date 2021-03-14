import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'

import InstanceList from '../../components/NewInstance/InstanceList'
import InstanceRegistration from '../../components/NewInstance/InstanceRegistration'
import InstanceReadCode from '../../components/NewInstance/InstanceReadCode'
import {Container, Form} from './style'

import localForage from 'localforage'

import { useMutation } from '@apollo/client'
import { SIGN_UP_CONNECTION, LAST_QR_CODE } from '../../store/Apollo/NewInstance'

const NewInstance = () => {
    const STATUS = {
        LIST: "list",
        CREATE: "create",
        READ: "read",
        DONE: "done",
    }

    let history = useHistory()

    const [registrationState, setRegistrationState] = useState({status: STATUS.LIST, qrCode: false})

    const [sendSignUpMutation, { loading: signupLoading, error: signupError, data: signupData }] = useMutation(SIGN_UP_CONNECTION, { onError: () => {} })
    const [sendQrCodeMutation, { loading: qrCodeLoading, error: qrCodeError, data: qrCodeData }] = useMutation(LAST_QR_CODE, { onError: () => {} })

    // TODO: testar
    useEffect(() => {
        if (signupLoading) {
            console.log("loading signup")
        }
        if (signupError) {
            console.log("signup error")
        }
        if (signupData) {
            console.log("data:")
            console.table(signupData)

            // setRegistrationState((previousState) => {
            //     return {...previousState, qrCode: signupData.qr}
            // })
            // sendQrCodeMutation({variables: {qr: signupData.qr}})
        }
    }, [signupLoading, signupError, signupData])

    //onMessage({variables: {to: chatId, msg: inputState[chatId]}})
    
    // TODO: testar
    useEffect(() => {
        if (qrCodeLoading) {
            console.log("loading qrCode")
        }
        if (qrCodeError) {
            console.log("qrcode error")
        }
        if (qrCodeData) {
            localForage.setItem("instances", {
                [qrCodeData.userinfo.number]: {
                    avatar: qrCodeData.userinfo.avatar,
                    name: qrCodeData.userinfo.name,
                    number: qrCodeData.userinfo.number,
                    jwt: qrCodeData.jwt
                }
            })
            .then(() => {
                history.push(`/open/${qrCodeData.jwt}`)
            })
        }
    }, [qrCodeLoading, qrCodeError, qrCodeData])

    console.log(registrationState)
    return (
        <Container container>
            <Form>
                {registrationState.status === STATUS.LIST 
                ? <InstanceList dispatch={setRegistrationState} STATUS={STATUS} />
                : ""}
                
                {registrationState.status === STATUS.CREATE
                ? <InstanceRegistration sendSignUpMutation={sendSignUpMutation} dispatch={setRegistrationState} STATUS={STATUS} />
                : ""}
                
                {registrationState.status === STATUS.READ
                ? <InstanceReadCode qrCode={registrationState.qrCode} />
                : ""}
            </Form>
        </Container>
    )
}

export default NewInstance