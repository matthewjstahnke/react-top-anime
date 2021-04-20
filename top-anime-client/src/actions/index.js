export const getAnimes = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch("http://localhost:3001/animes")
      .then(resp => resp.json())
      .then(animes => dispatch({ type: "SET_ANIMES", animes }))
  }
}

export const addAnime = (anime, history) => {
  return dispatch => {
    fetch('http://localhost:3001/animes', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ anime })
    })
      .then(resp => resp.json())
      .then(anime => {
        dispatch({ type: "ADD_ANIME", anime })
        history.push("/animes")
      })
  }
}

export const addLike = (anime, history) => {
  let id = anime.i
  console.log(anime)
  return dispatch => {
    fetch('http://localhost:3001/animes/' + id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ anime })
    })
      .then(resp => resp.json())
      .then(anime => {
        dispatch({ type: "ADD_LIKE", anime })
        history.push("/animes")
      })
  }
}