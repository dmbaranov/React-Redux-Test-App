import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Page'

const initialState = {
    year: 2016, 
    photos: [],
    isFetching: false
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true }
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false }
        default:
            return state
    }
}