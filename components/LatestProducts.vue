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
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
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
          inStock: true,
          onSale: true,
        },
        {
          id: 2,
          title: 'Silkepude med silkevår',
          price: '949',
          salePrice: '749',
          category: 'Puder',
          image: '/products/Rectangle 5-1.jpg',
          inStock: false,
          onSale: true,
        },
        {
          id: 3,
          title: 'Enkelt silkesengetøj (cafe au lait)',
          price: '1699',
          salePrice: '1399',
          category: 'Sengetøj',
          image: '/products/Rectangle 5-2.jpg',
          inStock: true,
          onSale: false,
        },
        {
          id: 4,
          title: 'Silkedyne med bomuldsvår',
          price: '1499',
          salePrice: '1199',
          category: 'Dyner',
          image: '/products/Rectangle 5-3.jpg',
          inStock: true,
          onSale: true,
        },
      ],
    }
  },
}
</script>
