import {RECEIVE_LIST,FY_ARR} from './mutation-type' 
import state from './state';

export default {
  [RECEIVE_LIST](State,{list_data}){
    state.listTmp = list_data

  },
  [FY_ARR](State,data){
    state.fyArr = data

  }
}