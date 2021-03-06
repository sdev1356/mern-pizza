import {combineReducers} from 'redux';

import {createStore,applyMiddleware} from 'redux'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import {cartReducer} from './reducers/cartReducer'
import {registerUserReducer} from './reducers/userReducers'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

const finalReducer=combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[] 
const initialState={
    cartReducer:{
        cartItems: cartItems
    }
}

const composeEnhancers= composeWithDevTools({})

const store= createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store