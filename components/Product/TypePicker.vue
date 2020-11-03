<template>
  <div>
    <span class="font-semibold">{{ product }}</span>
    <div class="flex items-center mt-2 space-x-2">
      <span class="text-sm font-semibold tracking-wide uppercase"
        >{{ label }}:</span
      >
      <div>
        <div class="sm:hidden">
          <select aria-label="Selected tab" class="block w-full form-select">
            <option v-for="(option, index) in options" :key="index">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex space-x-2">
            <a
              v-for="(option, index) in options"
              :key="index"
              href="#"
              class="px-3 py-2 text-sm font-medium leading-5 border-2 rounded-md focus:border-transparent text-bgreen-500 hover:text-bgreen-700 focus:outline-none focus:text-bgreen-700 focus:bg-bgreen-100"
            >
              {{ option }}
            </a>
          </nav>
        </div>
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
      default: 'Dobbelt silkesengetøj (cafe au lait)',
    },
    options: {
      type: Array,
      // Object or array defaults must be returned from
      // a factory function
      default() {
        return ['Option 1', 'Option 2', 'Option 3']
      },
    },
  },
}
</script>
