import {RECEIVE_LIST,FY_ARR}from './mutation-type' 
import listData from '../../data/list-data'
export default {
  getList({commit}){
    //commit为提交的意思
   //触发对应的mutation
   commit(RECEIVE_LIST,listData)
  },
  getFyArr({commit},data){
    commit(FY_ARR,data)
  }
}