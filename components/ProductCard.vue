<template>
  <div class="flex flex-col overflow-hidden bg-white shadow-lg rounded-3xl">
    <nuxt-link to="/product" class="relative flex-shrink-0 overflow-visible">
      <span
        v-if="product.onSale"
        class="absolute z-10 px-4 py-1 text-white -translate-y-1/2 bg-orange-500 rounded-br-3xl"
        >Tilbud</span
      >
      <div class="aspect-w-16 aspect-h-9">
        <img class="object-cover" :src="product.image" alt="" />
      </div>
    </nuxt-link>
    <div class="flex flex-col justify-between flex-1 p-6">
      <div class="flex-1">
        <p class="text-sm font-medium leading-5 uppercase text-bgreen-400">
          <nuxt-link to="/productcat" class="hover:underline">
            {{ product.category }}
          </nuxt-link>
        </p>
        <nuxt-link to="/product" class="block">
          <h3 class="mt-2 text-bsand-700">
            {{ product.title }}
          </h3>
          <p
            v-if="product.onSale"
            class="mt-3 text-xl font-semibold leading-6 text-bsand-700"
          >
            <span class="line-through text-bsand-200"
              >{{ product.price }},-</span
            >
            {{ product.salePrice }},-
          </p>

          <p v-else class="mt-3 text-xl font-semibold leading-6 text-bsand-700">
            {{ product.price }},-
          </p>
        </nuxt-link>
      </div>
    </div>
    <div class="px-6 pb-6">
      <div class="flex justify-between mb-1 text-sm align-bottom">
        <div v-if="product.inStock" class="flex items-center space-x-2">
          <span
            ><svg
              class="w-6 h-6 text-bgreen-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path></svg
          ></span>
          <span class="text-bgreen-600">På lager</span>
        </div>
        <div v-else class="flex items-center space-x-2">
          <span
            ><svg
              class="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path></svg
          ></span>
          <span class="text-yellow-700">Restordre</span>
        </div>
        <div v-if="product.inStock" class="flex items-center space-x-2">
          <span
            ><svg
              class="w-6 h-6 text-bgreen-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              ></path></svg
          ></span>
          <span class="text-bgreen-600">1-2 dage</span>
        </div>
      </div>
      <nuxt-link
        to="/product"
        class="block py-2 text-center text-white transition-all duration-100 rounded-lg shadow-lg bg-bgreen-400 hover:bg-bgreen-500 hover:shadow-xl"
        >Køb nu</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default() {
        return {}
      },
    },
  },
}
</script>
