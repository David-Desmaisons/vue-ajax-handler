<template>
  <div>
    <slot v-if="loading" name="loading">
      <div class="loading">Loading ...</div>
    </slot>
    <slot v-else-if="error" name="error" v-bind="{ error }">
      <div class="loading">{{ error }}</div>
    </slot>
    <slot v-else v-bind="{ data }">
      <pre>{{ JSON.stringify(data, null, 4) }}</pre>
    </slot>
  </div>
</template>

<script>
export default {
  name: "lazy-loading",
  inject: ["get"],
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    loading: false,
    data: null,
    error: null
  }),
  async created() {
    await this.load();
  },
  methods: {
    async load() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.error = null;
      try {
        this.data = await this.get(this.url);
        this.loading = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
pre {
  background: lightgrey;
}
</style>
