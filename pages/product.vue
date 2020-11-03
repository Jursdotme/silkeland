<template>
  <div class="px-4 mx-auto mt-24 max-w-7xl">
    <div class="grid grid-cols-2 gap-16">
      <div>
        <div class="relative pb-3/4">
          <img
            alt="ecommerce"
            class="absolute inset-0 object-cover w-full h-full shadow-xl rounded-2xl"
            src="/product-large.jpg"
          />
        </div>
      </div>
      <div class="mt-4">
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
        <h1 class="mt-2 text-3xl font-medium text-gray-900">
          Dobbelt silkedyne med bomuldsvår
        </h1>

        <div class="mt-2">
          <span class="text-2xl font-medium text-gray-900">1.599,00 kr</span>
        </div>

        <p class="leading-relaxed">
          Denne dobbeltdyne er et godt valg hvis I er to der ønsker at sove i
          silke. Dynen er fyldt med 370 g silke per m2 og fås i to længder,
          200x200 cm samt 200x220 cm. Silken er syet ind i et lækkert bomuldsvår
          og hele dynen er naturligvis Øko-Tex certifieret ligesom alle andre
          produkter på Silkeland.dk.
        </p>

        <div class="flex flex-col pt-4 mt-4 space-y-4 border-t-2">
          <TypePicker
            v-for="(type, index) in types"
            :key="index"
            :product="type.product"
            :label="type.label"
            :option="type.options"
          />
        </div>

        <div class="flex">
          <button
            class="flex px-6 py-2 ml-auto text-white transition duration-100 border-0 rounded bg-bgreen-400 focus:outline-none hover:bg-bgreen-600"
          >
            Button
          </button>
        </div>
      </div>
    </div>
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
          product: 'Silke pudebetræk (champagne)',
          options: ['45 x 60 cm', '50 x 60 cm', '60 x 63 cm'],
          label: 'Størrelse',
        },
      ],
    }
  },
}
</script>
