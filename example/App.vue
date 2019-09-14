<template>
  <div id="app">
    <component-fixture :defaults="{url: 'https://api.github.com/orgs/vuejs/repos'}">

      <AjaxHandler />

      <Editor
        slot="control"
        slot-scope="scope"
        v-bind="scope"
      />

    </component-fixture>
  </div>
</template>

<script>
import { ComponentFixture, Editor } from "component-fixture";
import "component-fixture/dist/ComponentFixture.css";
import AjaxHandler from "@/components/AjaxHandler.vue";
import { get } from "axios";


export default {
  name: "app",
  provide:{
    get
  },
  components: {
    ComponentFixture,
    Editor,
    AjaxHandler
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
