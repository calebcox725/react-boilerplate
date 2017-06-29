import { TEST } from '../actions/example';

const initialState = {
  foo: 'bar',
};

export default function example(state = initialState, action){
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { foo: action.payload });
    default:
      return state;
  }
}
