<template>
  <div class="ajax-root">
    <!-- slot to render loading feedback -->
    <slot v-if="loading" name="loading">
      <div class="loading">Loading ...</div>
    </slot>
    <!-- slot to render error feedback -->
    <slot v-else-if="error" name="error" v-bind="{ error }">
      <div class="error">{{ error }}</div>
    </slot>
    <!-- slot to render data when loaded. Receives data as parameter. -->
    <slot v-else v-bind="{ data }">
      <pre class="data">{{ JSON.stringify(data, null, 4) }}</pre>
    </slot>
  </div>
</template>
<script>
import { mapToEvents } from "../infra/mapWatcher";

export default {
  name: "ajax-handler",
  inject: ["get"],
  props: {
    /**
     * The url used to make ajax request.
     */
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    /**
     * @private
     */
    loading: false,

    /**
     * @private
     */
    data: null,

    /**
     * @private
     */
    error: null
  }),
  async created() {
    await this.load();
  },
  watch: {
    ...mapToEvents(["loading", "data", "error"])
  },
  methods: {
    /**
     * Perform an ajax call.
     * Automatically called by created hook.
     */
    async load() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      try {
        this.data = await this.get(this.url);
        this.loading = false;
        this.error = null;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
div.ajax-root {
  width: 100%;
}
pre.data {
  background: lightgrey;
}
</style>
