import { createStore, combineReducers } from 'redux';
import { Dishes } from './Dishes';
import { Promotions } from './Promotions';
import { Comments } from './Comments';
import { Leaders } from './Leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
};