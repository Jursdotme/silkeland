<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button
      type="button"
      class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
      @click="isActive = !isActive"
    >
      <span>{{ content.label }}</span>
      <!--
            Heroicon name: chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
          -->
      <svg
        class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <!--
          'More' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-class="translate-y-0 pacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isActive"
        class="absolute w-screen max-w-3xl px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
      >
        <div class="rounded-lg shadow-lg">
          <div class="overflow-hidden rounded-lg shadow-xs">
            <div
              class="relative z-20 grid grid-cols-2 gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
            >
              <nuxt-link
                v-for="(item, index) in content.items"
                :key="index"
                v-click-outside="closeMenu"
                :to="item.link"
                class="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
              >
                <p class="text-base font-medium leading-6 text-gray-900">
                  {{ item.label }}
                </p>
                <p class="text-sm leading-5 text-gray-500">
                  {{ item.description }}
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    content: {
      type: Object,
      default() {
        return {
          label: 'Label',
          items: [
            {
              label: 'Label',
              description: 'This is some description',
              link: '/',
            },
          ],
        }
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    closeMenu() {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
