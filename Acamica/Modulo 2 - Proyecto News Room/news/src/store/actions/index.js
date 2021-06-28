import { ADD_NEWS, CLEAR_NEWS} from '../actionsTypes'
// actions.js
export const addRepos = repos => ({
    type: ADD_NEWS,
    repos,
});

export const clearNews = () => ({ type: CLEAR_NEWS });


export const getNews = (categoria, addData) => async dispatch => {
    let dateNow = new Date()
    dateNow = dateNow.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).split("/").join("-");
    let apiCat = "https://api.canillitapp.com/news/category/"
    let apiLastNews = "https://api.canillitapp.com/latest/" + dateNow
    let apiSearch = "https://api.canillitapp.com/search/"

    let APIcategoriasDict = {
        "/home": apiLastNews,
        "/cienciaYtec": apiCat+"3",
        "/entretenimiento": apiCat+"4",
        "/negocios": apiCat+"1",
        "/deportes": apiCat+"5",
        "/internacional": apiCat+"2",
        "/search": apiSearch + addData
    }
    
    try {
        dispatch(clearNews());
        console.log(APIcategoriasDict[categoria])
        const url = `${APIcategoriasDict[categoria]}`;
        const response = await fetch(url)
        let responseBody = await response.json();
        categoria === "/search" 
            ? responseBody = responseBody.slice(0, 10)
            : responseBody = responseBody.slice(0, 50)
        dispatch(addRepos(responseBody));
    } catch (error) {
        console.error(error);
        dispatch(clearNews());
    }
}