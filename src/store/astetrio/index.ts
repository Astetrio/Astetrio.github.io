import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { AstetrioStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const aqwaterModule: Module<AstetrioStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default aqwaterModule;
