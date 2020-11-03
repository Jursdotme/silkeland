<template>
  <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <ProductCatTop />
      <div
        class="grid max-w-lg gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 md:max-w-none"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="grid grid-cols-3 mt-32">
        <div class="col-span-2 mx-auto prose">
          <h2>Silkedyne fra Silkeland</h2>
          <p class="lead">
            Der er mange gode grunde til at vælge en silkedyne, når du er på
            udkig efter en ny dyne.
          </p>
          <p>
            Silkedyner sørger for at
            <strong>regulere din krops temperatur</strong> natten igennem, så du
            hverken fryser eller sveder, hvad enten det er sommer eller vinter.
            Dyner fra Silkeland er desuden produceret af
            <strong>100 % ægte</strong> Mulberry silke fra Kina. Denne silketype
            anses for at være den fineste, og du får dermed en
            <strong>luksusdyne</strong> i bedste kvalitet, når du handler hos
            os.
          </p>
          <p>
            Med silkedyner fra Silkeland er du sikret et
            <strong>allergivenligt sovemiljø</strong> – niveauet af
            husstøvsmider reduceres nemlig helt automatisk, når du går fra
            traditionelle dundyner til silkedyner. Silkedyner er desuden
            <strong>nemme at holde rene og friske</strong>. Du skal ikke tænke
            på andet end at give dig hen til skøn nattesøvn i drømmeland.
          </p>
          <p>
            Når du først er ejer af en silkedyne, vil du også eje en silkepude.
            Se vores udvalg af
            <nuxt-link to="/productcat">silkepuder her</nuxt-link>. Find det
            rigtige
            <nuxt-link to="/productcat"
              >silkesengetøj til silkedynen her</nuxt-link
            >. Sørg for at silken bevarer farverne, fortsat skinner og er blød
            og smidig efter vask med vores
            <nuxt-link to="/productcat">plejemiddel</nuxt-link>.
          </p>
        </div>
        <div class="col-span-1">
          <ProductCatQuote />
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
