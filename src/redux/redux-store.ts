import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {imagesReducer} from "./images-reducer";

const rootReducer = combineReducers({
  imagesReducer: imagesReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsType<A extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesType<A>>
export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.__store__ = store

export default store