

const initState = []

export default function shoppingCartReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_ITEM': return state.concat(action.payload)
        case 'REMOVE_ITEM': return state.filter( el => el.article.ref != action.payload)
        default: return state
    }
}