import React from 'react'

const InstanceReadCode = ({state, dispatch, STATUS}) => {
    return (
        <React.Fragment>
            {
                state.status === STATUS.READ
                ?
                <h3>Read QRCode</h3>
                : ""
            }
        </React.Fragment>
    )
}

export default InstanceReadCode