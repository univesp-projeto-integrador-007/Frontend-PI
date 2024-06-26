<template>
  <div class="product">
    <div class="product__container-image">
      <img :src="product.image" alt="Foto do Produto" />
    </div>
    <div class="product__container-product">
      <h2 class="product__container-product__type">{{ product.type }}</h2>
      <h1 class="product__container-product__title">{{ product.name }}</h1>
      <p class="product__container-product__description">
        {{ product.description }}
      </p>
      <div class="product__container-product__wrapper" />
      <div>
        <span class="product__container-product__value">{{ maskedMoney(product.price) }}</span>
        <span v-if="product.oldPrice" class="product__container-product__old-value">
          {{ maskedMoney(product.oldPrice) }}
        </span>
      </div>
      <div class="product__container-product__button">
        <button @click="addToCart(product)">
          <img src="@/assets/plus-circle.svg" alt="" /> Adicionar ao carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import ProductCard from '@/components/ProductCard.vue'
import ConvertMoney from '@/helpers/convert-money'
import axios from 'axios'
export default {
  components: { ProductCard, Button },
  name: 'ProductView',
  data() {
    return {
      product: {}
    }
  },
  async beforeMount() {
    const id = this.$route.params.id
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND}api/products/${id}`)
      this.product = res.data
    } catch (err) {
      console.log(err)
    }
    this.track()
  },
  methods: {
    addToCart(value) {
      this.$store.commit('storeCart', value)
    },
    maskedMoney(value) {
      return ConvertMoney(value)
    },
    track() {
      this.$gtag.event('access', {
        event_category: 'product',
        event_label: 'produto',
        value: this.product.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.product {
  padding: 50px 150px 180px;
  display: flex;
  @media (max-width: $tablet) {
    flex-direction: column;
    gap: 25px;
  }

  @media (max-width: 720px) {
    padding: 50px 25px 200px;
  }

  &__container-image {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    img {
      width: 100%;
    }
  }

  &__container-product {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;
    padding-left: 50px;
    width: 100%;

    @media (max-width: $tablet) {
      padding: 0;
    }

    &__type {
      font-family: 'Cairo', sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      color: $brown-100;

      @media (max-width: $tablet) {
        font-size: 1.1rem;
      }
    }

    &__title {
      font-size: 2.8rem;
      font-weight: bold;
      color: $primary;
      text-align: left;

      @media (max-width: $tablet) {
        font-size: 1.6rem;
      }
    }

    &__description {
      font-weight: 400;
      font-size: 1.3rem;
      color: $brown-200;

      @media (max-width: $tablet) {
        font-size: 1.1rem;
      }
    }

    &__wrapper {
      margin: 10px 0;
      width: 80px;
      height: 2px;
      background: $yellow-150;
    }

    &__value {
      font-weight: 600;
      font-size: 2.5rem;
      color: $brown-200;

      @media (max-width: $tablet) {
        font-size: 2rem;
      }
    }

    &__old-value {
      font-weight: 400;
      font-size: 1.6rem;
      color: $brown-100;
      margin-left: 15px;
      text-decoration: line-through;

      @media (max-width: $tablet) {
        font-size: 1.4rem;
      }
    }

    &__button {
      @media (max-width: $mobile) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        background: transparent;
        border: 4px solid $secondary;
        border-radius: 50px;
        color: $secondary;
        font-size: 1.7rem;
        font-weight: 600;
        cursor: pointer;

        &:active {
          background: $secondary;
          color: #fff;
          transition: 0.4s;
        }

        @media (max-width: $tablet) {
          padding: 5px 10px;
          margin-bottom: 20px;
          font-size: 1.4rem;
        }
      }
    }

    &__product {
      padding: 25px 0;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
}
</style>
