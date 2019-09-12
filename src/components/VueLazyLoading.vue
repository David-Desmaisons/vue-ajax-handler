<template>
  <div>
    <slot v-if="loading" name="loading">
      <div class="loading">Loading ...</div>
    </slot>
    <slot v-else-if="error" name="error" v-bind="{ error }">
      <div class="loading">{{ error }}</div>
    </slot>
    <slot v-else v-bind="{ data }">
      <pre>{{ data }}</pre>
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
    loading: true,
    data: null,
    error: null
  }),
  async created() {
    try {
      this.data = await this.get(this.url);
      this.loading = false;
    } catch (error) {
      this.error = error;
      this.loading = false;
    }
  }
};
</script>
