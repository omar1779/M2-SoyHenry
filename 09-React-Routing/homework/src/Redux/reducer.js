import { GET_CLIMA, } from "./actions";

const initialState= {
  allClima : []
}

export default function reducer (state = initialState , action) {
  console.log(action , "action-reducer")
  switch (action.type){
    case GET_CLIMA :{
      return {
        ...state,
        allClima : [...state.allClima, action.payload]
      }
    }
    default:
      return state
  }
}