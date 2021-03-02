import { useSubscription, gql } from '@apollo/client'

const CLOCK_SUBSCRIPTION = gql`
    subscription Clock {
        clock
    }
`

export function GetClock() {
    const { data, loading } = useSubscription( CLOCK_SUBSCRIPTION )

    return <h4>New DateNow(): {!loading && data.clock}</h4>
}

export const AUTHCLOCK_SUBSCRIPTION = gql`
    subscription isAuthClock {
        isAuthClock
    }
`

export function GetAuthClock() {
    const { data, loading } = useSubscription( AUTHCLOCK_SUBSCRIPTION )

    return <h4>New DateNow(): {!loading && data.isAuthClock}</h4>
}
