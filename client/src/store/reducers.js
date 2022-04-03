import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dashboard from '../modules/UserPages/store/reducer'
import user from '../modules/AuthPages/store/reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
}

const reducers = combineReducers({
    user,
    dashboard
})

export default persistReducer(persistConfig, reducers);