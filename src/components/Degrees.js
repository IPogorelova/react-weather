import React from 'react';
import {createStore} from 'redux';
import '../App.css';

const URL = 'api.openweathermap.org/data/2.5/weather?q=';

let defaultState = {
    degrees: 0
};

function amount(state = defaultState, action) {
    if (action.type === 'GET_DEGREES') {
        return {
            ...state,
            degrees: action.data
        }
    }

    return state
}

let store = createStore(amount);


store.subscribe(function () {
    console.log(store);
    console.log(defaultState);
    console.log(store.getState());
});

store.dispatch({type: 'GET_DEGREES', data: 20});

class Degrees extends React.Component{
    render() {
        return(
            <div>
                <span>Today's weather: </span>
                <span>{store.getState().degrees}</span>
            </div>
        )
    }
}

export default Degrees;
