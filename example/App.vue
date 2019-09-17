<template>
  <div id="app">
    <sandbox :defaults="{url: 'https://api.github.com/orgs/vuejs/repos'}">

      <AjaxHandler />

      <Editor
        slot="control"
        slot-scope="scope"
        v-bind="scope"
      />

    </sandbox>
  </div>
</template>

<script>
import { Sandbox } from "component-fixture";
import "component-fixture/dist/ComponentFixture.css";
import AjaxHandler from "@/components/AjaxHandler.vue";
import { get } from "axios";


export default {
  name: "app",
  provide:{
    get
  },
  components: {
    AjaxHandler,
    Sandbox
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
