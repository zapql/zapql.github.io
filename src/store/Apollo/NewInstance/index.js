import { gql } from '@apollo/client'

export const SIGN_UP_CONNECTION = gql`
    mutation SignUpConnection {
        signupconnection (input: {}) {
            qr
        }
    }
`

export const LAST_QR_CODE = gql`
mutation LastQRCode($qr: String!) {
    lastqrcode (input: {qr: $qr}) {
        jwt, 
        userinfo {
            avatar,
            name,
            number
        }
    }
}
`