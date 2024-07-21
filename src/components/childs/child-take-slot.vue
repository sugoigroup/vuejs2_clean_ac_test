<template>
    <ChildPrimitive>
      <template v-slot:hehe-shortinfo>
        <ShortInfo/>
      </template>
    <template v-slot:hehe-listoutbox>
      <ListOut v-bind:articleList="articleList" ></ListOut>
    </template>
    <template v-slot:hehe-paging>
      <p>take paging</p>
    </template>
    </ChildPrimitive>
  </template>
  
  <script scope>
  //__ import __//
import shortinfoTake from "./short-info/short-info-take";
import ChildPrimitive from "./child-primitive";
import ListOut from "./list-out/list-out";
  
  //__ export __//
  export default {
    //__ name __//
    name: "child-take-slot",
  
    //__ data __//
    data() {
      return {
      };
    },

    //__ props __//
    props: {
      articleList: Array,
    },

    //__ components __//
    components: {
      ShortInfo: shortinfoTake,
      ChildPrimitive,
      ListOut
    }
  };
  </script>
  