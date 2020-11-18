<template>
  <div>
    <span class="font-semibold text-bsand-700">{{ product }}</span>
    <div class="flex flex-wrap items-center mt-2 space-x-2 sm:flex-no-wrap">
      <span
        class="w-full text-sm font-medium tracking-wide uppercase sm:w-auto text-bsand-500"
        >{{ label }}:</span
      >
      <div>
        <div class="sm:hidden">
          <select
            aria-label="Selected tab"
            class="block w-full -ml-2 form-select md:ml-2"
          >
            <option v-for="(option, index) in options" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex space-x-2">
            <a
              v-for="(option, index) in options"
              :key="index"
              href="#"
              :class="option.inStock ? enabled : disabled"
              class="px-3 py-2 text-sm font-medium leading-5 border-2 rounded-md"
            >
              {{ option.name }}
            </a>
          </nav>
        </div>
      </div>
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
              class="block w-full text-center form-input sm:leading-5"
              :value="amount"
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: String,
      default: 'Dobbelt silkesengetøj (cafe au lait)',
    },
    label: {
      type: String,
      default: 'Størrelse',
    },
    options: {
      type: Array,
      // Object or array defaults must be returned from
      // a factory function
      default() {
        return [
          { name: '200 x 200 cm', inStock: true },
          { name: '200 x 220 cm', inStock: false },
        ]
      },
    },
  },
  data() {
    return {
      amount: 1,
      enabled:
        'border-bgreen-400 focus:border-transparent text-bgreen-500 hover:text-bgreen-700 focus:text-bgreen-700 focus:bg-bgreen-100 focus:outline-none',
      disabled:
        'focus:border-transparent text-gray-400 focus:text-gray-400 border-gray-100 focus:border-gray-100 bg-gray-100 cursor-not-allowed',
    }
  },
  methods: {
    increase() {
      this.amount++
    },
    decrease() {
      this.amount--
    },
    reset() {
      this.amount = 0
    },
  },
}
</script>
