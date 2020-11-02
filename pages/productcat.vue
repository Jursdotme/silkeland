<template>
  <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <div class="relative px-2 sm:px-6 lg:px-8">
        <div>
          <figure>
            <img
              class="object-cover w-full rounded-lg shadow-xl sm-h-64 md:h-128"
              src="/dynekat.jpg"
              alt=""
              width="1310"
              height="873"
            />
          </figure>
        </div>
        <div
          class="relative grid gap-8 pt-8 md:bg-white md:shadow-2xl mx-62 md:mx-8 lg:grid-cols-3 md:-mt-32 md:p-14 rounded-3xl"
        >
          <div class="col-span-2 mx-auto text-lg max-w-prose">
            <h1
              class="text-base font-semibold leading-6 tracking-wide uppercase text-bgreen-500"
            >
              Silkedyner
            </h1>
            <p
              class="mt-2 mb-8 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 md:text-3xl sm:text-4xl sm:leading-10"
            >
              Få et allergivenligt sovemiljø med luksusdyner i silke
            </p>
            <p class="text-base leading-8 text-bsand-600 md:text-xl">
              Silkedyner sørger for at regulere din krops temperatur natten
              igennem, så du hverken fryser eller sveder. Dyner fra Silkeland er
              desuden produceret af den fineste langfibrede Mulberry silke, der
              blandt eksperter anses for at være langt den bedste kvalitet. Du
              får med andre ord en luksusdyne i bedste kvalitet når du handler
              hos os.
            </p>
          </div>
          <div class="mx-auto prose lg:prose-lg text-bsand-600">
            <ul>
              <li>Undgå husstøvmider i dit soveværelse</li>
              <li>Få et allergivenligt sovemiljø</li>
              <li>Oplev silkens fremragende temperaturregulerende effekt</li>
              <li>60 dages fuld returret på alle varer</li>
              <li>Gratis levering samt returfragt</li>
            </ul>
          </div>
        </div>
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
