<template>
  <div>
    <dt class="text-lg leading-7">
      <!-- Expand/collapse question button -->
      <button
        class="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
        @click="isActive = !isActive"
      >
        <span class="font-medium text-gray-900">
          {{ question }}
        </span>
        <span class="flex items-center ml-6 h-7">
          <!--
                    Heroicon name: chevron-down

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
          <svg
            :class="[isActive ? '-rotate-180' : 'rotate-0']"
            class="w-6 h-6 transform"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </dt>
    <dd class="pr-12 mt-2 mb-4">
      <div
        v-if="isActive"
        class="text-base leading-6 prose-sm text-gray-500 md:prose"
        v-html="answer"
      ></div>
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: false,
      default: '',
    },
    answer: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
