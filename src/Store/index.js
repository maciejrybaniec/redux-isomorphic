import { createStore, combineReducers } from 'redux';
import rootReducer from '../Reducers/index';

/**
 * Render static page.
 * @param {string} html Static react components html.
 * @param {object} appState Initial application state.
 */
const configureStore = (appState = {
    users: []
}) => {
    return createStore(
        combineReducers({
            ...rootReducer
        }),
        appState
    );
};

export default configureStore;
