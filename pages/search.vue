<template>
  <div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <h1 class="text-2xl leading-6 text-bsand-400">
        Resultater for: <span class="font-bold text-bsand-600">[søgeterm]</span>
      </h1>

      <div class="block mt-8">
        <div class="border-b border-gray-200">
          <nav class="flex justify-start -mb-px">
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              href="#"
              :class="[isActive(tab.id) ? activeClass : inactiveClass]"
              @click.prevent="setActive(tab.id)"
            >
              {{ tab.title }}
            </a>
          </nav>
        </div>
      </div>
      <div
        v-if="activeTab == 'products'"
        class="grid max-w-lg gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-4 md:max-w-none"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <div
        v-if="activeTab == 'pages'"
        class="p-6 mt-12 overflow-hidden bg-white shadow-lg rounded-3xl"
      >
        <dl class="divide-y divide-gray-200">
          <div class="py-6">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              How do you make holy water?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              You boil the hell out of it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              <a
                href="#"
                class="block mt-2 text-bgreen-500 hover:text-bgreen-600"
                >Læs mere</a
              >
            </dd>
          </div>

          <div class="py-6">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              What&#039;s the best thing about Switzerland?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
              <a
                href="#"
                class="block mt-2 text-bgreen-500 hover:text-bgreen-600"
                >Læs mere</a
              >
            </dd>
          </div>

          <div class="py-6">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              What do you call someone with no body and no nose?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas cupiditate laboriosam fugiat.
              <a
                href="#"
                class="block mt-2 text-bgreen-500 hover:text-bgreen-600"
                >Læs mere</a
              >
            </dd>
          </div>

          <div class="py-6">
            <dt class="text-lg font-medium leading-6 text-gray-900">
              Why do you never see elephants hiding in trees?
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Because they&#039;re so good at it. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              <a
                href="#"
                class="block mt-2 text-bgreen-500 hover:text-bgreen-600"
                >Læs mere</a
              >
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass:
        'px-4 py-4 text-sm md:text-lg font-medium leading-5 whitespace-no-wrap border-b-2 text-bgreen-600 border-bgreen-500 focus:outline-none focus:text-bgreen-800 focus:border-bgreen-400',
      inactiveClass:
        'px-4 py-4 text-sm md:text-lg font-medium leading-5 text-gray-500 whitespace-no-wrap border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300',
      activeTab: 'products',
      tabs: [
        { title: 'Produkter', id: 'products' },
        { title: 'Andre resultater', id: 'pages' },
      ],
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
          id: 5,
          title: 'Silke pudebetræk (cafe au lait)',
          price: '369',
          salePrice: '319',
          category: 'Pudebetræk',
          image: '/products/Rectangle 5.jpg',
          inStock: true,
          onSale: true,
        },
        {
          id: 6,
          title: 'Silkepude med silkevår',
          price: '949',
          salePrice: '749',
          category: 'Puder',
          image: '/products/Rectangle 5-1.jpg',
          inStock: false,
          onSale: true,
        },
        {
          id: 7,
          title: 'Enkelt silkesengetøj (cafe au lait)',
          price: '1699',
          salePrice: '1399',
          category: 'Sengetøj',
          image: '/products/Rectangle 5-2.jpg',
          inStock: true,
          onSale: false,
        },
        {
          id: 8,
          title: 'Silkedyne med bomuldsvår',
          price: '1499',
          salePrice: '1199',
          category: 'Dyner',
          image: '/products/Rectangle 5-3.jpg',
          inStock: true,
          onSale: true,
        },
        {
          id: 9,
          title: 'Silke pudebetræk (cafe au lait)',
          price: '369',
          salePrice: '319',
          category: 'Pudebetræk',
          image: '/products/Rectangle 5.jpg',
          inStock: true,
          onSale: true,
        },
        {
          id: 10,
          title: 'Silkepude med silkevår',
          price: '949',
          salePrice: '749',
          category: 'Puder',
          image: '/products/Rectangle 5-1.jpg',
          inStock: false,
          onSale: true,
        },
        {
          id: 11,
          title: 'Enkelt silkesengetøj (cafe au lait)',
          price: '1699',
          salePrice: '1399',
          category: 'Sengetøj',
          image: '/products/Rectangle 5-2.jpg',
          inStock: true,
          onSale: false,
        },
        {
          id: 12,
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
  methods: {
    isActive(tabId) {
      return this.activeTab === tabId
    },
    setActive(tabId) {
      this.activeTab = tabId
    },
  },
}
</script>
