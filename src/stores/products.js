import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductSection = defineStore('product', () => {
  const dataProduct = ref({})
  const currentIdProduct = ref(1)
  const isLoading = ref(false)
  let className = ref({})

  const fetchData = async () => {
    try {
      const url = `https://fakestoreapi.com/products/${currentIdProduct.value}`
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('There is no Data:', error)
      return null
    }
  }

  const fetchDataAndUpdate = async () => {
    const data = await fetchData()
    if (data) {
      dataProduct.value = {
        title: data.title,
        category: data.category,
        rating: data.rating.rate,
        image: data.image,
        description: data.description,
        price: data.price
      }
    }
  }

  const showNextSection = async () => {
    isLoading.value = true
    try {
      if (currentIdProduct.value >= 20) {
        currentIdProduct.value = 0
      } else {
        currentIdProduct.value += 1
      }

      await fetchDataAndUpdate((resolve) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    } catch (error) {
      console.error('error fectching data : ' + error)
    } finally {
      isLoading.value = false
    }
  }

  const circleClasses = computed(() => {
    const classes = []
    const rating = Math.round(dataProduct.value.rating)
    for (let i = 0; i < 5; i++) {
      classes.push({ circle: true, active: i < rating })
    }
    return classes
  })

  const formattedRating = computed(() => {
    return `${dataProduct.value.rating}/5`
  })

  const checkCurrentSection = () => {
    const category = dataProduct.value.category
    switch (category) {
      case `men's clothing`:
        return (className.value = {
          section: 'men-section',
          title: 'men-clothes-title',
          rating: 'circle-men',
          price: 'men-clothes-price',
          buttonBuy: 'men-button-buy',
          buttonNext: 'men-button-next'
        })
      case `women's clothing`:
        return (className.value = {
          section: 'women-section',
          title: 'women-clothes-title',
          rating: 'circle-women',
          price: 'women-clothes-price',
          buttonBuy: 'women-button-buy',
          buttonNext: 'women-button-next'
        })
      default:
        return (className.value = {
          section: 'unavailable-section',
          title: 'unavailable-primary-text',
          rating: 'circle-unavailable',
          price: 'unvailable-clothes-price',
          buttonBuy: 'unavailable-button-buy',
          buttonNext: 'unavailable-button-next'
        })
    }
  }

  return {
    dataProduct,
    currentIdProduct,
    isLoading,
    fetchData,
    fetchDataAndUpdate,
    showNextSection,
    circleClasses,
    formattedRating,
    checkCurrentSection
  }
})
