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
// {
//     moviesWatched:
// }
const addMovie = 'addMovie';
function actionAddMovie(addMovie){
    return {
        moviesWatched: addMovie
    }
}


// {
//     favoriteSong:
// }
const addFavoriteSong = 'addFavoriteSong';
function actionAddFavoriteSong(addFavoriteSong){
    return {
        favoriteSong: addFavoriteSong
    }
}



// {   
//     burritosEaten:
// }   
const numOfBurritos = 'numOfBurritos';
function actionAddNumberOfBurritos(numOfBurrito){
    return {
        burritosEaten: numOfBurrito
    }
}


// {
//     coffeeDrank:
// }
const numOfCoffee = 'numOfCofffee';
function actionAddNumberOfCoffee(numOfCoffee){
    return {
        coffeeDrank: numOfCoffee
    }
}


// {
//     preferredSandwich:
// }
const whichSandwich = 'whichSandwich';
function actionWhichSandwich(whichSandwich){
    return {
        preferredSandwich: whichSandwich
    }
}


