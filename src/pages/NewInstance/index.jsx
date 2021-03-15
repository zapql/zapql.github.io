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
            console.log("Loading Signup...")
        }
        if (signupError) {
            console.log("Signup Error...")
        }
        if (signupData) {
            setRegistrationState((previousState) => {
                return {...previousState, qrCode: signupData.signupconnection.qr}
            })
            sendQrCodeMutation({variables: {qr: signupData.signupconnection.qr}})
        }
    }, [signupLoading, signupError, signupData])

    //onMessage({variables: {to: chatId, msg: inputState[chatId]}})
    
    // TODO: testar
    useEffect(() => {
        if (qrCodeLoading) {
            console.log("Loading QR Code...")
        }
        if (qrCodeError) {
            console.log("QR Code Error...")
        }
        if (qrCodeData) {
            if (qrCodeData.lastqrcode === null) {
                // TIMEOUT, REDIRECIONA PARA GERAR NOVO QRCODE
                console.log("Gerando outro QR Code...")
                return sendSignUpMutation()
            }
            else {
                localForage.setItem("instances", {
                    [qrCodeData.lastqrcode.userinfo.number]: {
                        avatar: qrCodeData.lastqrcode.userinfo.avatar,
                        name: qrCodeData.lastqrcode.userinfo.name,
                        number: qrCodeData.lastqrcode.userinfo.number,
                        jwt: qrCodeData.lastqrcode.jwt
                    }
                })
                .then(() => {
                    history.push(`/open/${qrCodeData.lastqrcode.jwt}`)
                })
            }
        }
    }, [qrCodeLoading, qrCodeError, qrCodeData])

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