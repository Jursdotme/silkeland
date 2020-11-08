<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative px-4 pt-8 pb-12 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <h2
        class="text-3xl font-medium leading-9 tracking-tight text-bsand-600 sm:text-4xl sm:leading-10"
      >
        Du kunne også være interesseret i...
      </h2>
      <div
        class="grid max-w-lg gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 md:max-w-none"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
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
