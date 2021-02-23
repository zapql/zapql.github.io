import { useSubscription, gql } from '@apollo/client'

const DATENOW_SUBSCRIPTION = gql`
    subscription DateNow {
        datenow
    }
`

export function GetDateNow() {
    const { data, loading } = useSubscription( DATENOW_SUBSCRIPTION )

    console.log(data)
    return <h4>New DateNow(): {!loading && data.datenow}</h4>
}
