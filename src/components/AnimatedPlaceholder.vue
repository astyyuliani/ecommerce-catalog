<template>
  <div class="placeholder"></div>
</template>

<script setup>
defineProps({
  width: {
    String
  },
  heigth: {
    String
  },
  borderRadius: {
    String
  },
  marginBlock: {
    String
  }
})
</script>

<style scoped>
@keyframes skeleton-load {
  0% {
    background-color: hsl(0, 0%, 50%);
  }
  50% {
    background-color: hsl(0, 0%, 80%);
  }
  100% {
    background-color: hsl(0, 0%, 100%);
  }
}
.placeholder {
  width: v-bind(width);
  height: v-bind(heigth);
  margin-block: v-bind(marginBlock);
  border-radius: v-bind(borderRadius);
  box-shadow: 0px 4px 4px 0px #00000040;
  animation: skeleton-load 1.2s linear infinite alternate;
}
</style>
