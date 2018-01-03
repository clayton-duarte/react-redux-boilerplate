//import actions
    import { YOUR_ACTION } from '../actions';

//initial state
const initialState = {}

//export reducer
export default function(state = initialState, action) {
    switch (action.type) {
        case YOUR_ACTION:
            return action.payload;
        default:
            return null;
    }
    return state;
}