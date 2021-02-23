import { useQuery, gql } from '@apollo/client'

const QUERY_HELLO = gql`
    query HelloWorld {
        hello
    }
`
export function GetHelloWorld() {
    const { loading, error, data } = useQuery(QUERY_HELLO)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return <p>{data.hello}</p>
}
