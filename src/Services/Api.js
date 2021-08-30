const KEY = 'd199b0de69eae36946cfe1a024ed75ed';
const BSASE_URL = 'https://api.themoviedb.org/3'

export function getHomeView() {
    return fetch(`${BSASE_URL}/trending/all/day?api_key=${KEY}`).then(res=>res.json());
}
export function getMouviePage(movie_id) {
    return fetch (` ${BSASE_URL}/movie/${movie_id}?api_key=${KEY}&language=en-US`).then(res=>res.json()); 
}
export function getCast(movie_id) {
    return fetch(` ${BSASE_URL}/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`).then(res => res.json());
}
export function getReview(movie_id) {
    return fetch(`${BSASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}&language=en-US&page=1`).then(res => res.json());
}
export function getMouvies(query) {
    return fetch(`${BSASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(res => res.json());
}