<template>
  <div>
    <span v-if="user">ID: {{ userid }}</span
    ><br />
    <span v-if="user">User: {{ username }}</span
    ><br />
    <button @click="fetchUser">Fetch User</button>
  </div>
</template>

<script>
import container from '@/di/patientInjector'
import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';

import FetchUserUseCaseInput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import MyEntity1 from '@/mypackage/patient/entities/MyEntity1';
import User from '@/mypackage/patient/entities/User';

export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    userid: function() {
        return this.user.get().id;
      },

      username: function() {
        return this.user.get().name;
      }
  },
  methods: {
    async fetchUser() {
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


      console.log(user1);
      console.log(user2);
      this.user = user1;

    }

  }
};
</script>
