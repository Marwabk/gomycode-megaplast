import { articlesDeCuisine, articlesDeJardin, salonDeThe } from '../helpers'

const initState = []

export default function shoppingCartReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_ITEM': return state.concat(action.payload)
        default: return state
    }
}