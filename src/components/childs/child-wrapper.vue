<template>
    <div>
      tet
      <component
        v-bind:is="selected"
        v-bind:articleList="articleList"
      ></component>
    </div>
  </template>
  
  <script scope>
  //__ import __//
  import childTakeSlot from "./child-take-slot";
  import childBuySlot from "./child-buy-slot";
  import childDonateSlot from "./child-donate-slot";
  import { EventBus } from '../eventBus';
  
  //__ export __//
  export default {
    //__ name __//
    name: "child-wrapper",
    //__ data __//
    data() {
      return {
        selected: null,
        articleList: [],
      };
    },
    //__ lifecycle __//
    created: function () {
      EventBus.$on("changeTab", (tab) => {
        this.changeTab(tab);
      });
    },
    mounted() {
      this.changeTab("TAKE");
    },
    beforeDestroy() {
      EventBus.$off("changeTab");
    },
  
    //__ custom methods __//
    methods: {
      changeTab(tab) {
        if (tab && tab != this.selected) {
          console.log(this.selected)
        }
  
        tab = tab || this.selected;
        this.selected = tab;
        switch (tab) {
        case "TAKE":
          this.articleList = ["take1", "take2"];
          break;
        case "BUY":
          this.articleList = ["BUY1", "BUY2"];
          break;
        case "DONATE":
          this.articleList = ["DONATE1", "DONATE2"];
          break;
      }
      console.log(this.articleList);
      console.log(tab);

      },
    },
    //__ components __//
    components: {
      TAKE: childTakeSlot,
      BUY: childBuySlot,
      DONATE: childDonateSlot,
    },
  };
  </script>
  
  <style scoped>
  </style>
  