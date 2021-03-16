import React from 'react'
import {Container, PanelQRCode} from './InstanceReadCodeStyle'
import QRCode from 'qrcode.react'

import Loading from '../../Loading'

const InstanceReadCode = ({qrCode}) => {
    return (
        <Container>
            <h3>Leia o QR Code</h3>
            <PanelQRCode>
                {qrCode
                ? <QRCode id="QRCODE" level="L" value={qrCode} size={384}/>
                : <Loading mt={"5vh"} mb={"5vh"} />}
            </PanelQRCode>
        </Container>
    )
}

export default InstanceReadCode