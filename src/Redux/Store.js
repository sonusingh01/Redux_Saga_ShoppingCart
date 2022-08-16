import {configureStore} from "@reduxjs/toolkit"
import RootReducers from "./RootReducers"


import createSagaMiddleware from 'redux-saga'
import ProductSaga from "./ProductSaga"
const sagaMiddleware = createSagaMiddleware()
 const store= configureStore({
    reducer:RootReducers,
    middleware:()=>[sagaMiddleware]
})

// const persistedState = localStorage.getItem('ProductSaga') 
//                        ? JSON.parse(localStorage.getItem('ProductSaga'))
//                        : {}
sagaMiddleware.run(ProductSaga)

export default store