import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'

import InstanceList from '../../components/NewInstance/InstanceList'
import InstanceRegistration from '../../components/NewInstance/InstanceRegistration'
import InstanceReadCode from '../../components/NewInstance/InstanceReadCode'
import {Container, Form} from './NewInstanceStyle'

import AlertMessage from '../../components/AlertMessage'

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

    const [errorState, setErrorState] = useState({open: false, severity: "error", message: ""})

    const [registrationState, setRegistrationState] = useState({status: STATUS.LIST, qrCode: false})

    const [sendSignUpMutation, { loading: signupLoading, error: signupError, data: signupData }] = useMutation(SIGN_UP_CONNECTION, { onError: () => {} })
    const [sendQrCodeMutation, { loading: qrCodeLoading, error: qrCodeError, data: qrCodeData }] = useMutation(LAST_QR_CODE, { onError: () => {} })

    const [instanceState, setInstanceState] = useState({})

    useEffect(() => {
        localForage.getItem('instance-list')
        .then((result) => {
            setInstanceState(() => {
                return {...result}
            })
        })
    }, [])

    useEffect(() => {
        if (signupLoading) {
            console.log("Loading Signup...")
        }
        if (signupError) {
            console.log("Signup Error...")
            setErrorState(() => {
                return {
                    open: true,
                    severity: "error",
                    message: "Signup Error, aguarde e tente novamente..."
                }
            })
        }
        if (signupData) {
            setRegistrationState((previousState) => {
                return {...previousState, qrCode: signupData.signupconnection.qr}
            })
            sendQrCodeMutation({variables: {qr: signupData.signupconnection.qr}})
        }
    }, [signupLoading, signupError, signupData])
    
    useEffect(() => {
        if (qrCodeLoading) {
            console.log("Loading QR Code...")
        }
        if (qrCodeError) {
            console.log("QR Code Error...")
            setErrorState(() => {
                return {
                    open: true,
                    severity: "error",
                    message: "QR Code Error, aguarde e tente novamente..."
                }
            })
        }
        if (qrCodeData) {
            if (qrCodeData.lastqrcode === null) {
                // TIMEOUT, REQUISICAO PARA GERAR NOVO QRCODE
                console.log("Gerando outro QR Code...")
                setErrorState(() => {
                    return {
                        open: true,
                        severity: "warning",
                        message: "Tempo esgotado, gerando outro QR Code..."
                    }
                })
                return sendSignUpMutation()
            }
            else {
                // TODO: conferir se nao esta sobrepondo
                localForage.getItem('instance-list')
                .then((result) => {
                    localForage.setItem("instance-list", {
                        ...result,
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
                })
            }
        }
    }, [qrCodeLoading, qrCodeError, qrCodeData])

    return (
        <Container container>
            <AlertMessage state={errorState} dispatch={setErrorState} />
            <Form>
                {registrationState.status === STATUS.LIST 
                ? <InstanceList state={instanceState} dispatch={setRegistrationState} STATUS={STATUS} />
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