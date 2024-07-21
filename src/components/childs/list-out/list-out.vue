<template>
     <ul>
        <li v-for="(item, index) in articleList" :key="index">
      {{ index }}: {{ item }}
    </li>
      </ul>
  </template>
  
  <script scope>
  //__ export __//
  export default {
    //__ name __//
    name: "list-out",
    //__ props __//
    props: {
      articleList: Array,
    },
  };
  </script>
  