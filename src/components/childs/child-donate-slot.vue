<template>
  <ChildPrimitive>
    <template v-slot:hehe-shortinfo>
      <ShortInfo/>
    </template>
    <template v-slot:hehe-listoutbox>
      <ListOut v-bind:articleList="articleList" ></ListOut>
    </template>
    <template v-slot:hehe-paging>
      <span>donate paging</span>
    </template>
  </ChildPrimitive>
</template>

<script scope>
//__ import __//
import shortinfoDonate from "./short-info/short-info-donate";
import ChildPrimitive from "./child-primitive";
import ListOut from "./list-out/list-out";

//__ export __//
export default {
  //__ name __//
  name: "child-donation-slot",

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
    ShortInfo: shortinfoDonate,
    ChildPrimitive,
    ListOut
  }
};
</script>
