import React from 'react'

function ReturnNullException (message, e) {
    this.message = message
    this.name = 'ReturnNullException'
    this.tooltip = 'Return Null Error'
    this.error = e
}

function NetworkErrorException (message, e) {
    this.message = message
    this.name = 'NetworkErrorException'
    this.tooltip = 'Network Error'
    this.error = e
}

function GraphQLErrorException (message, e) {
    this.message = message
    this.name = 'GraphQLErrorException'
    this.tooltip = 'GraphQL Error'
    this.error = e
}

function UnknowErrorException (message, e) {
    this.message = message
    this.name = 'UnknowErrorException'
    this.tooltip = 'Unknow Error'
    this.error = e
}

export const handleError = (error, dispatch, chatId, callback = () => {}) => {
    callback()

    try {
        if (error.type === null) {
            throw new ReturnNullException("Retorno nulo de mutation.", error)
        }
        if (error.networkError) {
            throw new NetworkErrorException("Network Error: the entire query was rejected.", error)
        }
        if (error.graphQLErrors) {
            throw new GraphQLErrorException("GraphQL Error: failed resolvers on parse, validation or execution phase.", error)
        }
        throw new UnknowErrorException("Unknow Error", error)
    } catch (Exception) {
        console.error(Exception.message)
        console.table(Exception)

        dispatch((previousState) => {
            return ( 
                {...previousState, 
                chats: {
                    ...previousState.chats,
                    [chatId]: {
                        ...previousState.chats[chatId],
                        messages: [...previousState.chats[chatId].messages, {
                            wid: `error-${Math.random()}`,
                            msg: "Sua mensagem não pôde ser enviada.",
                            isError: true,
                            errorType: Exception.tooltip,
                            timestamp: (Date.now() / 1000)
                        }]
                    }                    
                }}
            )
        })
        // TODO: log error com mutation em database de erros
    }
}