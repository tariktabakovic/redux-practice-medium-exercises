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
    createStore,
    combineReducers
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


const UPDATE_LUNCH_ITEM = 'UPDATE_LUNCH_ITEM';
function actionUpdateLunch(itemName){
    return {
        type: UPDATE_LUNCH_ITEM,
        payload: {
            itemName
        }
    }
}

const UPDATE_DESSERT_ITEM = 'UPDATE_DESSERT_ITEM';
function actionUpdateDessert(itemName){
    return {
        type: UPDATE_DESSERT_ITEM,
        payload: {
            itemName
        }
    }
}

const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT'
function actionIncrementCoffee(){
    return {
        type: INCREMENT_COFFEE_COUNT
    }
}

const defaultLunchState = {
    lunch: ''
}
function lunch(state=defaultLunchState, action){
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

const defaultDessertState= '';
function dessert(state= defaultDessertState, action){
    let newState= state;
    switch(action.type){
        case UPDATE_DESSERT_ITEM:
            newState = action.payload.itemName;
            break;
    }
    return newState;
}

const defaultCoffeeState= 0;
function coffeeCount(state=defaultCoffeeState, action){
    let newState = state;
    switch(action.type){
        case INCREMENT_COFFEE_COUNT:
            newState += 1;
            break;
        default:
            break;
    }
    return newState;
}

const rootReducer = combineReducers(
    {
        // part of tree: reducer function 
        lunch: lunch,
        coffee: coffeeCount,
        dessert: dessert
    }
);



const store = createStore(  rootReducer,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            );

store.subscribe(() => {
    console.table(store.getState());
})

// dispatch only takes action objects
store.dispatch(actionUpdateLunch('chicken'));
store.dispatch(actionUpdateDessert('ice cream'));


store.dispatch(actionAddMovie('Goodfellas'));
store.dispatch(actionAddMovie('fsadfadf'));
store.dispatch(actionAddMovie('Gooderqqwrfellas'));