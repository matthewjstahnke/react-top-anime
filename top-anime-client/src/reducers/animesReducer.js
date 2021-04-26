const initialState = {
    animes: [],
    loading: true
}

const animesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return{
                ...state,
                loading: true
            }
        case "SET_ANIMES":
            return {
                ...state,
                loading: false,
                animes: action.animes
            }
        case "ADD_ANIME":
            return {
                ...state,
                animes: [...state.animes, action.anime]
            }
        case "ADD_LIKE":
            console.log(action.anime,"in aR")
            let newLike = action.anime.likes += 1
            action.anime = newLike
            console.log(action.anime,"in aR2")
            debugger

            return {
                ...state,
                animes: action.anime
            }
        default:
            return state;
    }
}

export default animesReducer;