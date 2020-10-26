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
                <h3 class="mt-2 font-semibold text-bsand-700">
                  {{ product.title }}
                </h3>
                <p class="mt-3 text-xl leading-6 text-gray-500">
                  <span class="line-through text-bsand-200"
                    >{{ product.price }},-</span
                  >
                  {{ product.salePrice }},-
                </p>
              </a>
            </div>
          </div>
          <div class="px-6 pb-6">
            <a
              href="#"
              class="block py-2 text-center text-white transition-all duration-100 rounded-lg shadow-lg bg-bgreen-400 hover:bg-bgreen-500 hover:shadow-xl"
              >Køb nu</a
            >
          </div>
        </div>
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
