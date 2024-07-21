<template>
  <div>
    <div>
      BlaBla
      <div>
        <button
          v-for="(tab, index) in tabs"
          v-bind:key="tab"
          v-on:click="changeTab(tab)"
        >
          {{ tabTitle[index] }}
        </button>
      </div>
    </div>
    <slot name="hehe-shortinfo"></slot>
    <slot name="hehe-listoutbox"></slot>
    <slot name="hehe-paging"></slot>
  </div>
</template>

<script scope>
//__ import __//
  import { EventBus } from '../eventBus';

//__ export __//
export default {
  //__ name __//
  name: "child-primitive",
  //__ data __//
  data() {
    return {
      // 0: take, 1: buy, 2: donate
      selectedFlag: null,
      tabs: ["TAKE", "BUY", "DONATE"],
      tabTitle: ["-TAKE", "-BUY", "-DONATE"],
    };
  },
  //__ lifecycle __//
  //__ custom methods __//
  methods: {
    changeTab(tab) {
      EventBus.$emit("changeTab", tab);
    },
  },
};
</script>
