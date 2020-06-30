import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
const oldState = loadState();
const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    saveState(store.getState());
});

export default store;