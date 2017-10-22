export const favoritesCounter = (state = 0, action) => {
  switch(action.type) {
    case 'SET_FAVORITE_COUNT':
      return action.data;
    case 'RESET_FAVORITES':
      return 0;
    case 'INCREASE_FAVORITE_COUNT':
      return state += 1;
    case 'DECREASE_FAVORITE_COUNT':
      return state -= 1;
    default:
      return state;
  }
}

export const favorites = (state = new Set([440021, 381283]), action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return state.add(action.data.movie_id);

    case 'RESET_FAVORITES':
      return state.map(movie=> {
        movie.isFavorited = false;
      });
    case 'SHOW_FAVORITES':
      return state.filter(movie => {
        return movie.isFavorited;
      })
    default:
      return state;
  }
}
