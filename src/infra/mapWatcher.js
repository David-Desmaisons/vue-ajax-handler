function mapToEvents(watchers) {
  return watchers.reduce((acc, curr) => {
    acc[curr] = function(value) {
      this.$emit(curr, value);
    };
    return acc;
  }, {});
}

export { mapToEvents };
