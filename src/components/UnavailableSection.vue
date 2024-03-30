<template>
  <section class="unavailable-section" id="background-section">
    <CardProduct class="unavailable-card-section" style="height: 580px">
      <p class="unavailable-primary-text">This product is unavailable to show</p>
      <button @click="products.showNextSection" class="unavailable-button">Next product</button>
    </CardProduct>
  </section>
</template>

<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { useProductSection } from '@/stores/products'

const products = new useProductSection()
</script>
