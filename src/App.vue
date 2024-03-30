<script setup>
import ProductSection from '@/components/ProductSection.vue'
import ProductSectionSkeleton from '@/components/ProductSectionSkeleton.vue'
</script>

<template>
  <body>
    <!-- Add Suspense for give loading to fetching data from async component -->
    <Suspense>
      <template #default>
        <ProductSection />
      </template>
      <template #fallback>
        <ProductSectionSkeleton />
      </template>
    </Suspense>
  </body>
</template>
