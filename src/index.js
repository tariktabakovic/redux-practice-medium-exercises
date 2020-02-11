// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import {
    createStore
} from 'redux';

// {
//     moviesWatched:
// }
const addMovie = 'addMovie';
function actionAddMovie(aMovie) {
    return {
        type: addMovie,
        aMovie
    }
}

const defaultState1 = { movies: [] }
function movieList(state = defaultState1, action) {
    const newState = { ...state };
    console.log(newState);
    switch (action.type) {
        case addMovie:
            newState.movies = [...state.movies, action.aMovie]
            console.log(newState)
            break;
        default:
            break;
    }
    return newState;
}


// {
//     favoriteSong:
// }
const addFavoriteSong = 'addFavoriteSong';
function actionAddFavoriteSong() {
    return {
        type: addFavoriteSong
    }
}



// {   
//     burritosEaten:
// }   
const numOfBurritos = 'numOfBurritos';
function actionAddNumberOfBurritos() {
    return {
        type: numOfBurritos
    }
}


// {
//     coffeeDrank:
// }
const numOfCoffee = 'numOfCofffee';
function actionAddNumberOfCoffee() {
    return {
        type: numOfCoffee
    }
}


// {
//     preferredSandwich:
// }
// const whichSandwich = 'whichSandwich';
// function actionAddToLunch() {
//     return {
//         type: whichSandwich
//     }
// }
const defaultLunchState = {
    lunch: 'burrito'
}
const UPDATE_LUNCH_ITEM = 'UPDATE_LUNCH_ITEM '
function lunch(state=defaultState1, action){
    const newState= {...state};
    switch(action.type){
        case UPDATE_LUNCH_ITEM:
            newState.lunch = action.payload.itemName;
            break;
        default:
            break;
    }
    return newState;
}


const store = createStore(movieList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.table(store.getState());
})

store.dispatch(actionAddMovie('Goodfellas'));
store.dispatch(actionAddMovie('fsadfadf'));
store.dispatch(actionAddMovie('Gooderqqwrfellas'));