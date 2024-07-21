<template>
  <div>
    <span v-if="user">ID: {{ userid }}</span
    ><br />
    <span v-if="user">User: {{ username }}</span
    ><br />
    <button @click="fetchUser">Fetch User2</button>
    <Child/>

    -------------------
    <ul>
      <li v-for="item in user" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>


import childWrapper from "./childs/child-wrapper.vue"
import {  mapState, mapActions } from 'vuex';

export default {
  components: {
    Child : childWrapper
  },
  // data() {
  //   return {
  //     user: null,
  //   };
  // },
  computed: {
    ...mapState('sampleModule', ['user']),
    userid: function() {
      debugger;
        return this.user.id;
      },

      username: function() {
        return this.user.name;
      }
  },
  watch: {
    user(newVal) {
      if (newVal === null) {
        this.setUser();
      }
    }
  },
  created() {
    this.setUser();

  },

  beforeDestroy() {
      this.resetState();
    },
  methods: {
    ...mapActions('sampleModule', ['setUser','resetState']),
    async fetchUser() {
      this.setUser();

    }

  }
};
</script>
