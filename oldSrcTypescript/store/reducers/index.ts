import datazero from '../datazero'
import { ACTIONS } from '../actions/index'

interface State {
    chatListData: any[]
  }
  
interface Action {
    type: string
}

const reducer = (state: State, action: Action) => { // na verdade ele nem deixa tirar, então vou restarurar
    switch (action.type) {
        case ACTIONS.GET_CHAT:
            // lembando que voce sempre precisa colocar um return newState aqui. Igual no redux
            console.log("getting chats")
            return state
        default:
            return state
    }
} // ta bom
// beleza
export default reducer
//opa
// tá aqui?
