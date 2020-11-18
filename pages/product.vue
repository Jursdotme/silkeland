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
          <div
            class="grid hidden grid-cols-2 gap-8 mt-8 lg:grid-cols-4 md:grid"
          >
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

          <div class="pt-6">
            <div class="flex justify-start mb-1 text-sm align-bottom">
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
                <span class="text-bgreen-600"
                  >Varen er på lager. Levering 1-2 dage</span
                >
              </div>
            </div>
          </div>

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
