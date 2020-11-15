<template>
  <div>
    <div class="px-4 mx-auto mt-24 max-w-7xl">
      <div class="grid gap-16 md:grid-cols-3 lg:grid-cols-2">
        <div class="row-start-2 md:row-start-1">
          <div class="aspect-w-16 aspect-h-9">
            <img
              alt="ecommerce"
              class="object-cover shadow-xl rounded-2xl"
              src="/product-large.jpg"
            />
          </div>
          <div class="grid grid-cols-2 gap-8 mt-8 lg:grid-cols-4">
            <div v-for="index in 4" :key="index" class="aspect-w-1 aspect-h-1">
              <img
                src="/product-large.jpg"
                class="object-cover shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>
        <div class="mt-4 md:col-span-2 lg:col-span-1">
          <div class="flex justify-between">
            <span class="font-medium leading-5 uppercase text-bgreen-400">
              SILKEDYNE
            </span>
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-bgreen-100 text-bgreen-600"
            >
              Varenr: 236675
            </span>
          </div>
          <h1 class="mt-2 text-3xl font-medium text-bsand-800">
            Dobbelt silkedyne med bomuldsvår
          </h1>

          <div class="mt-2 space-x-2">
            <span class="text-2xl font-medium line-through text-bsand-400"
              >2.599,00 kr</span
            >
            <span class="text-2xl font-medium text-bsand-800">1.599,00 kr</span>
          </div>

          <p class="leading-relaxed text-bsand-600">
            Denne dobbeltdyne er et godt valg hvis I er to der ønsker at sove i
            silke. Dynen er fyldt med 370 g silke per m2 og fås i to længder,
            200x200 cm samt 200x220 cm. Silken er syet ind i et lækkert
            bomuldsvår og hele dynen er naturligvis Øko-Tex certifieret ligesom
            alle andre produkter på Silkeland.dk.
          </p>

          <div>(Lagerstatus)</div>

          <div class="flex flex-col pt-4 mt-4 space-y-4">
            <TypePicker
              v-for="(type, index) in types"
              :key="index"
              class="pt-4 border-t border-bsand-200"
              :product="type.product"
              :label="type.label"
              :option="type.options"
            />
          </div>

          <div class="flex justify-end mt-4">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen active:bg-bgreen-700"
              >
                Læg i kurv
              </button>
            </span>
          </div>
        </div>
      </div>
      <SellingPoints class="mb-16" />
      <ProductTabs class="mt-16 mb-16" />
    </div>
    <div class="px-4 pt-16 bg-white">
      <ProductCatQuote />
    </div>
    <RelatedProducts />
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          product: 'Dobbelt silkesengetøj (cafe au lait)',
          label: 'Størrelse',
          options: ['200 x 200 cm', '200 x 220 cm'],
        },
        {
          product: 'Dobbelt silkesengetøj (cafe au lait)',
          label: 'Størrelse',
          options: ['200 x 200 cm', '200 x 220 cm'],
        },
      ],
    }
  },
}
</script>
