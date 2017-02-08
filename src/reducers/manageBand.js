export default function manageBand(state = { users: [] }, action){
  switch(action.type){
    case 'ADD_USER':
      return Object.assign({}, state, {users: [...state.users, action.payload]})
    default:
      return state
  }

}
