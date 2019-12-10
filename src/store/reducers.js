import { combineReducers } from 'redux'
import userReducer from './userReducer'
import ofertaReducer from './ofertaReducer'

const Reducers = combineReducers({
  User: userReducer,
  Oferta: ofertaReducer
})

export default Reducers;