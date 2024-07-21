<template>
  <ChildPrimitive>
    <template v-slot:hehe-shortinfo>
      <ShortInfo/>
    </template>
    <template v-slot:hehe-listoutbox>
      <ListOut v-bind:articleList="articleList" ></ListOut>
    </template>
    <template v-slot:hehe-paging>
      <span>buy paging</span>
    </template>
  </ChildPrimitive>
</template>

<script scope>
//__ import __//
import shortinfoBuy from "./short-info/short-info-buy";
import ChildPrimitive from "./child-primitive";
import ListOut from "./list-out/list-out";

//__ export __//
export default {
  //__ name __//
  name: "child-donate-slot",

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
    ShortInfo: shortinfoBuy,
    ChildPrimitive,
    ListOut
  }
};
</script>
