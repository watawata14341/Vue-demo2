<template>
  <p>いいね({{ herfNumber }})</p>
  <button @click="increment">+1</button>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 10
    }
  },
  computed: {
    herfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment(){
        this.$emit("my-click",this.totalNumber+1);
    }
  }
};
</script>