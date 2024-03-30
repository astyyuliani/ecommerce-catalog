<script setup>
import CardProduct from '@/components/CardProduct.vue'
import AnimatedPlaceholder from '@/components/AnimatedPlaceholder.vue'
</script>

<template>
  <section id="background-section">
    <CardProduct class="card-section" style="height: 100%">
      <AnimatedPlaceholder borderRadius="1rem" id="clothesImage" />
      <article class="clothes-description">
        <h1 id="clothes-title">
          <AnimatedPlaceholder heigth="50px" width="550px" borderRadius="0.2rem" />
        </h1>
        <section class="clothes-categories">
          <p class="clothes-category">
            <AnimatedPlaceholder heigth="25px" width="150px" borderRadius="0.2rem" />
          </p>
          <section class="clothes-rating">
            <p>
              <AnimatedPlaceholder heigth="25px" width="65px" borderRadius="0.2rem" />
            </p>
            <div class="rating-indicator">
              <div>
                <AnimatedPlaceholder heigth="25px" width="150px" borderRadius="0.2rem" />
              </div>
            </div>
          </section>
        </section>
        <div class="border-bottom"></div>
        <p class="clothes-description">
          <AnimatedPlaceholder
            heigth="25px"
            width="550px"
            borderRadius="0.2rem"
            marginBlock="0.5rem"
          />
          <AnimatedPlaceholder
            heigth="25px"
            width="550px"
            borderRadius="0.2rem"
            marginBlock="0.5rem"
          />
          <AnimatedPlaceholder
            heigth="25px"
            width="550px"
            borderRadius="0.2rem"
            marginBlock="0.5rem"
          />
          <AnimatedPlaceholder
            heigth="25px"
            width="550px"
            borderRadius="0.2rem"
            marginBlock="0.5rem"
          />
          <AnimatedPlaceholder
            heigth="25px"
            width="550px"
            borderRadius="0.2rem"
            marginBlock="0.5rem"
          />
        </p>
        <section class="clothes-footer">
          <div class="border-bottom"></div>
          <h1 id="clothes-price">
            <AnimatedPlaceholder heigth="25px" width="120px" borderRadius="0.2rem" />
          </h1>
          <div class="button-group">
            <AnimatedPlaceholder heigth="35px" width="200px" borderRadius="0.2rem" />
            <AnimatedPlaceholder heigth="35px" width="200px" borderRadius="0.2rem" />
          </div>
        </section>
      </article>
    </CardProduct>
  </section>
</template>
