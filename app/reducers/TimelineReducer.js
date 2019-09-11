import {
    SEARCH_BOX
  } from '../actions/types';
  
  const INITIAL_STATE = { loading: false, error: '', success: '' ,searchBox:true}
  
export default(state=INITIAL_STATE,action)=>{
  switch(action.type){
      case SEARCH_BOX:
          return { ...state,searchBox:action.payload}
      default:
          return state
  }
}
  