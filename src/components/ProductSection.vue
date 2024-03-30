<script setup>
import { useProductSection } from '@/stores/products'

import CardProduct from '@/components/CardProduct.vue'
const UnavailableSection = defineAsyncComponent(() => import('@/components/UnavailableSection.vue'))
const ProductSectionSkeleton = defineAsyncComponent(
  () => import('@/components/ProductSectionSkeleton.vue')
)

import { defineAsyncComponent } from 'vue'

const products = new useProductSection()

products.currentIdProduct
products.fetchData()
products.fetchDataAndUpdate()
products.showNextSection
await products.fetchDataAndUpdate((resolve) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})
</script>

<template>
  <UnavailableSection v-if="products.currentIdProduct === 0" />
  <section v-else :class="products.checkCurrentSection().section" id="background-section">
    <CardProduct class="card-section">
      <img :src="products.dataProduct.image" id="clothesImage" />
      <article class="clothes-description">
        <h1 :class="products.checkCurrentSection().title" id="clothes-title">
          {{ products.dataProduct.title }}
        </h1>
        <section class="clothes-categories">
          <p class="clothes-category">{{ products.dataProduct.category }}</p>
          <section class="clothes-rating">
            <p>{{ products.formattedRating }}</p>
            <div class="rating-indicator">
              <div
                v-for="(circle, index) in products.circleClasses"
                :key="index"
                :class="[circle, products.checkCurrentSection().rating]"
              ></div>
            </div>
          </section>
        </section>
        <div class="border-bottom"></div>
        <p class="clothes-description">
          {{ products.dataProduct.description }}
        </p>
        <section class="clothes-footer">
          <div class="border-bottom"></div>
          <h1 :class="products.checkCurrentSection().price" id="clothes-price">
            ${{ products.dataProduct.price }}
          </h1>
          <div class="button-group">
            <button :class="products.checkCurrentSection().buttonBuy">Buy now</button>
            <button
              @click="products.showNextSection"
              :class="products.checkCurrentSection().buttonNext"
            >
              Next Product
            </button>
          </div>
        </section>
      </article>
    </CardProduct>
  </section>
  <ProductSectionSkeleton v-if="products.isLoading" />
</template>
