<template>
  <div class="mb-8">
    <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="hidden sm:table-header-group">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50"
            >
              Vare
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50"
            >
              Variant
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 sm:hidden md:table-cell"
            >
              Antal
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50"
            >
              Pris
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50">
              <span class="sr-only">Rediger</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="product in products"
            :key="product.id"
            class="grid grid-cols-2 sm:table-row"
          >
            <td class="col-span-2 px-6 pt-4 pb-2 sm:py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  <img class="w-10 h-10 rounded" :src="product.image" alt="" />
                </div>
                <div class="ml-4">
                  <nuxt-link
                    to="/product"
                    class="text-sm font-medium text-gray-900"
                  >
                    {{ product.title }}
                  </nuxt-link>
                </div>
              </div>
            </td>
            <td class="px-6 py-2 sm:py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">Størrelse</div>
              <div class="text-sm text-gray-500">140 x 200 cm</div>
            </td>
            <td
              class="flex justify-end px-6 py-2 sm:py-4 whitespace-nowrap sm:hidden md:table-cell"
            >
              <span class="inline-flex text-xs font-semibold sm:px-2">
                <div class="flex items-center justify-end flex-1 space-x-2">
                  <button @click="decrease">
                    <svg
                      class="w-6 h-6 text-bsand-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  <div class="w-12">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-5 text-gray-700 sr-only"
                      >Antal</label
                    >
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="amount"
                        class="block w-full text-xs text-center form-input sm:leading-5"
                        value="1"
                      />
                    </div>
                  </div>
                  <button @click="increase">
                    <svg
                      class="w-6 h-6 text-bsand-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </span>
            </td>
            <td
              class="px-6 pt-2 pb-4 text-lg font-semibold text-right sm:py-4 sm:text-sm whitespace-nowrap tabular-nums lining-nums"
            >
              {{ product.price }},-
            </td>
            <td
              class="flex justify-end px-6 pt-2 pb-4 text-sm font-medium text-right sm:py-4 whitespace-nowrap sm:table-cell"
            >
              <svg
                class="w-5 h-5 cursor-pointer text-bgreen-300 hover:text-bgreen-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
              <svg
                class="w-5 h-5 cursor-pointer text-bgreen-300 hover:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </td>
          </tr>

          <!-- More rows... -->
        </tbody>
      </table>
    </div>
    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="submit"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-300"
        >
          Opdater kurv
        </button>
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
          salePrice: '',
          category: 'Pudebetræk',
          image: '/products/Rectangle 5.jpg',
          inStock: true,
          onSale: false,
        },
        {
          id: 2,
          title: 'Silkepude med silkevår',
          price: '949',
          salePrice: '',
          category: 'Puder',
          image: '/products/Rectangle 5-1.jpg',
          inStock: false,
          onSale: false,
        },
        {
          id: 3,
          title: 'Enkelt silkesengetøj (cafe au lait)',
          price: '1699',
          salePrice: '',
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
