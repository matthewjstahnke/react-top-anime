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
            console.log(this.state.likes)
            return {
                ...state,
                likes: this.state.likes + 1
            }
        default:
            return state;
    }
}

export default animesReducer;