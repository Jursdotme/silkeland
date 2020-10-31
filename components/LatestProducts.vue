<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-medium leading-9 tracking-tight text-bsand-600 sm:text-4xl sm:leading-10"
        >
          Udvalgte produkter
        </h2>
        <p class="max-w-2xl mx-auto mt-3 text-bsand-400 sm:mt-4">
          Man kan fremad se, at de har været udset til at læse, at der skal
          dannes par af ligheder. De kan optimeres fra oven af at formidles
          stort uden brug fra optimering af presse.
        </p>
      </div>
      <div
        class="grid max-w-lg gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 md:max-w-none"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="flex flex-col overflow-hidden bg-white shadow-lg rounded-3xl"
        >
          <div class="relative flex-shrink-0 overflow-visible">
            <span
              class="absolute px-4 py-1 text-white -translate-y-1/2 bg-orange-500 rounded-br-3xl"
              >Tilbud</span
            >
            <img class="object-cover w-full h-48" :src="product.image" alt="" />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6">
            <div class="flex-1">
              <p
                class="text-sm font-medium leading-5 uppercase text-bgreen-400"
              >
                <a href="#" class="hover:underline"> {{ product.category }} </a>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-bsand-700">
                  {{ product.title }}
                </h3>
                <p class="mt-3 text-xl font-semibold leading-6 text-bsand-700">
                  <span class="line-through text-bsand-200"
                    >{{ product.price }},-</span
                  >
                  {{ product.salePrice }},-
                </p>
              </a>
            </div>
          </div>
          <div class="px-6 pb-6">
            <div class="flex justify-between mb-1 text-sm align-bottom">
              <div class="flex items-center space-x-2">
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
              <div class="flex items-center space-x-2">
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
            <a
              href="#"
              class="block py-2 text-center text-white transition-all duration-100 rounded-lg shadow-lg bg-bgreen-400 hover:bg-bgreen-500 hover:shadow-xl"
              >Køb nu</a
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <a
          href="#"
          class="inline-flex items-center px-8 py-4 space-x-2 transition duration-150 ease-in-out bg-white rounded-lg shadow text-bsand-600 hover:shadow-lg"
          ><span>Vis flere produkter</span>
          <span
            ><svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path></svg></span
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Silke pudebetræk (cafe au lait)',
          price: '369',
          salePrice: '319',
          category: 'Pudebetræk',
          image: '/products/Rectangle 5.jpg',
        },
        {
          id: 2,
          title: 'Silkepude med silkevår',
          price: '949',
          salePrice: '749',
          category: 'Puder',
          image: '/products/Rectangle 5-1.jpg',
        },
        {
          id: 3,
          title: 'Enkelt silkesengetøj (cafe au lait)',
          price: '1699',
          salePrice: '1399',
          category: 'Sengetøj',
          image: '/products/Rectangle 5-2.jpg',
        },
        {
          id: 4,
          title: 'Silkedyne med bomuldsvår',
          price: '1499',
          salePrice: '1199',
          category: 'Dyner',
          image: '/products/Rectangle 5-3.jpg',
        },
      ],
    }
  },
}
</script>
