<template>
  <div class="multiple-delete">
    <button @click="deleteSelected" :disabled="!selectedRows.length">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    newsItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedRows: [],
    };
  },
  methods: {
    deleteSelected() {
      this.$emit("delete-rows", this.selectedRows);
    },
    toggleSelection(index) {
      if (this.selectedRows.includes(index)) {
        this.selectedRows.splice(this.selectedRows.indexOf(index), 1);
      } else {
        this.selectedRows.push(index);
      }
    },
  },
};
</script>

<style scoped>
.multiple-delete {
  margin-top: 10px;
}
</style>
