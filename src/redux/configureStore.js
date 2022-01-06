import {combineReducers, createStore} from 'redux';
import {Dishes} from './Dishes'
import {Leaders} from './Leaders'
import {Comments} from './Comments'
import {Promotion} from './Promotion'

export const ConfigureStore=()=>{
    const store=createStore(
       combineReducers({
           dishes:Dishes,
           comments:Comments,
           leaders:Leaders,
           promot:Promotion
       })
    );
    return store;
}