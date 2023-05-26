<template>
  <div class="home">
    <Carousel />
    <div class="home__container">
      <div class="home__container__emphasis">
        <h1>Doces em destaque</h1>
        <p>
          Produtos destacados por sua popularidade, além de suas deliciosidades
          e gosturas doces
        </p>
      </div>
      <div class="home__container__items">
        <div
          v-for="product in emphasis"
          :key="product._id"
          @click="HandleProduct(product)"
        >
          <product-card :product="product" />
        </div>
      </div>
      <div class="home__container__wrapper" />
      <div class="home__container__emphasis">
        <h1>Cardápio</h1>
        <p>Onde você encontra todos os produtos, ordenados ou filtrados</p>
      </div>
      <input
        class="home__container__input"
        type="text"
        placeholder="Pesquise pelo nome do doce"
        v-model="filter"
      />
      <div class="home__container__chips">
        <div v-for="type in types" :key="type._id" @click="handleFilter(type)">
          <Chip :text="type" />
        </div>
      </div>
      <div id="cardapio" class="home__container__items">
        <div
          v-for="product in filteredProducts"
          :key="product._id"
          @click="HandleProduct(product)"
        >
          <product-card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import Chip from "@/components/Chip.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: { Carousel, ProductCard, Chip },
  data() {
    return {
      filter: "",
      products: [],
      types: [],
      emphasis: [],
    };
  },

  async mounted() {
    const types = [];
    try {
      const res = await axios.get(`${process.env.VUE_APP_BACKEND}api/products`);
      this.products = res.data;
    } catch (err) {
      console.log(err.response.data.msg);
    }
    this.products.forEach((el) => {
      return types.push(el.type);
    });
    this.emphasis = this.products.filter((el) => el.isEmphasis);
    this.types = this.itensUnicos(types);
  },

  methods: {
    HandleProduct(value) {
      this.$store.commit("storeCurrentProduct", value);
      this.$router.push("/produtos");
    },
    handleFilter(value) {
      this.filter = value;
    },
    itensUnicos(arr) {
      return arr.filter((v, i, a) => a.indexOf(v) === i);
    },
  },
  computed: {
    filteredProducts() {
      if (this.filter) {
        const products = this.products.filter((product) => {
          return (
            product.name.toLowerCase().includes(this.filter.toLowerCase()) ||
            product.type.toLowerCase().includes(this.filter.toLowerCase())
          );
        });
        return products;
      }
      return this.products;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.home {
  width: 100%;
  height: 100%;
  padding-bottom: 180px;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__emphasis {
      margin: 40px 0 26px;
      width: 350px;

      h1 {
        font-size: 32px;
        font-weight: 600;
        color: $primary;
      }
      p {
        font-size: 16px;
        font-weight: 300;
        color: $brown-100;
        font-family: "Cairo", sans-serif;
        line-height: 20px;
      }
    }

    &__items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 21px;
      cursor: pointer;
      max-width: 1200px;
    }

    &__wrapper {
      margin: 50px 0;
      width: 300px;
      height: 2px;
      background: $yellow-100;
    }

    &__input {
      width: 50%;
      padding: 12px 24px;
      background: transparent;
      border-radius: 10px;
      border: 2.5px solid $yellow-100;
      margin-bottom: 16px;
      font-size: 20px;
      color: $brown-200;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: $brown-200;
        font-size: 20px;
      }
    }

    &__chips {
      display: flex;
      gap: 10px;
      margin-bottom: 36px;
    }
  }
}
</style>
