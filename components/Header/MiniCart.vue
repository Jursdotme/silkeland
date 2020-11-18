<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative inline-block text-left">
    <div>
      <button
        id="options-menu"
        type="button"
        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen active:bg-bgreen-700"
        aria-haspopup="true"
        aria-expanded="true"
        @click="isOpen = !isOpen"
      >
        Min kurv <span>(0)</span>
        <svg
          class="w-5 h-5 ml-2 -mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      </button>
    </div>

    <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-96"
    >
      <div class="flex justify-between px-4 py-3">
        <p class="text-gray-600">
          Kurv total:
          <span class="font-bold text-gray-900 truncate">2.248,00 kr</span>
        </p>
        <p class="text-gray-600">
          <span class="font-bold text-gray-900 truncate">2</span> varer
        </p>
      </div>
      <div
        class="py-1 overflow-y-scroll max-h-64"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <nuxt-link
          v-for="product in products"
          :key="product.id"
          to="/product"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <div class="flex items-center justify-between">
            <div>
              <div class="flex items-center">
                <span>{{ product.name }}</span>
                <span class="flex items-center ml-1 space-x-1 text-gray-400"
                  ><svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <span>1</span></span
                >
              </div>
              <div class="flex space-x-2 text-gray-400">
                <div class="font-semibold">749,00 kr</div>
                <div>Størrelse: 50 x 60 cm</div>
              </div>
            </div>

            <div class="flex space-x-2">
              <svg
                class="w-5 h-5 text-bgreen-300 hover:text-bgreen-500"
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
                class="w-5 h-5 text-bgreen-300 hover:text-red-500"
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
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="grid grid-cols-2 gap-2 px-2 pb-2">
        <nuxt-link
          to="/cart"
          class="flex items-center justify-center w-full px-4 py-2 text-sm text-center text-white rounded-bl bg-bgreen-400 hover:bg-bgreen-500"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span class="ml-2">Se Kurv</span>
        </nuxt-link>
        <nuxt-link
          to="/cart"
          class="flex items-center justify-center w-full px-4 py-2 text-sm text-center text-white rounded-br bg-bgreen-400 hover:bg-bgreen-500"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span class="ml-2">Til Kassen</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      products: [
        {
          id: 1,
          name: 'Silkepude med bomuldsvår',
          price: '749,00',
          amount: '1',
        },
        {
          id: 2,
          name: 'Silkepude med silkevår',
          price: '1899,00',
          amount: '2',
        },
        {
          id: 3,
          name: 'Enkelt silkesengetøj (cafe au lait)',
          price: '949,00',
          amount: '1',
        },
        {
          id: 4,
          name: 'Silkepude med bomuldsvår',
          price: '749,00',
          amount: '2',
        },
        {
          id: 5,
          name: 'Silkepude med bomuldsvår',
          price: '749,00',
          amount: '1',
        },
        {
          id: 6,
          name: 'Silkepude med bomuldsvår',
          price: '749,00',
          amount: '3',
        },
      ],
    }
  },
}
</script>

<style scoped>
.overflow-y-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-y-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
