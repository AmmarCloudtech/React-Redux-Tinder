// State argument is not application state, only the state this reducer is responsible for.
// reducers are only ever called when an action occurs(is dispatched by an app)

export default function (state = null, action) { // In ES6  state = null means if state is undefined set it to null.
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }
  return state;
}
