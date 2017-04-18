/**
 * ./app/store/configureStore.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );
}
