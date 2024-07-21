import container from '@/di/patientInjector'
import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';

import FetchUserUseCaseInput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import MyEntity1 from '@/mypackage/patient/entities/MyEntity1';
import User from '@/mypackage/patient/entities/User';




const state = {
  user: null
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    resetState(state) {
      state.items = null;
    }
  };
  
  const actions = {

  resetState({ commit }) {
    commit('resetState');
  },
    async setUser({ commit }) {

      const fetchUserUseCase = container.get(FetchUserUseCase);
      const fetchUserUseCaseInput = container.get(FetchUserUseCaseInput);



      const [user1, user2] = await Promise.all([
      fetchUserUseCase.execute(fetchUserUseCaseInput.input(
          new MyEntity1 (
            1,
            'myName',
            {'aa':'a'},
            new User('id', 'name')
          )
        )),
        fetchUserUseCase.execute(fetchUserUseCaseInput.input(
          new MyEntity1 (
            2,
            'myName2',
            {'aa2':'a2'},
            new User('id2', 'name2')
          )
        ))
      ]);

      commit('setUser', user1.outputData);
      commit('setUser', user2.outputData);
    },
  };
  
  const getters = {
    user: state => state.user
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };