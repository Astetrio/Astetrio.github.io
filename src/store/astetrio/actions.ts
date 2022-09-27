import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AstetrioStateInterface } from './state';

const actions: ActionTree<AstetrioStateInterface, StateInterface> = {
  getPrice(): number {
    return 321;
  },
};

export default actions;
