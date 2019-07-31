import React from "react"
import {articlesDeCuisine,articlesDeJardin,salonDeThe} from '../helpers'

const initState={
    cuisine:articlesDeCuisine,
    jardin:articlesDeJardin,
    salon:salonDeThe
}

export default function cartReducer(state = initState, action) {
    switch (action.type) {
        default: return state
    }


}