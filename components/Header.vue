<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative z-20 bg-white shadow">
    <div class="hidden border-b bg-bgreen-50 border-bgreen-200 lg:block">
      <div
        class="flex items-center justify-between w-full px-4 mx-auto space-x-4 max-w-7xl"
      >
        <div class="flex-1">
          <div id="emaerket-widget-m9agjja37hi"></div>
        </div>
        <a
          href="#"
          class="px-4 py-3 text-sm text-bgreen-300 hover:text-bgreen-600"
          >Handelsbetingelser</a
        >
        <a
          href="#"
          class="px-4 py-3 text-sm text-bgreen-300 hover:text-bgreen-600"
          >Om os</a
        >
        <a
          href="#"
          class="flex items-center py-3 pl-4 pr-2 space-x-4 text-sm text-bgreen-300 hover:text-bgreen-600"
          ><span>Kontakt</span>
          <div
            class="flex items-center px-2 py-1 space-x-2 rounded bg-bgreen-100 text-bgreen-500"
          >
            <span
              ><svg
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path></svg
            ></span>
            <span>(+45) 4358 4494</span>
          </div>
        </a>
      </div>
    </div>
    <div class="relative bg-white shadow">
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="flex items-center justify-between py-6 md:space-x-10">
          <div class="flex">
            <nuxt-link to="/" class="inline-flex">
              <img class="w-auto h-12 sm:h-16" src="/Logo.png" alt="Workflow" />
            </nuxt-link>
          </div>
          <div class="-my-2 -mr-2 lg:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              @click="isMobileNavOpen = !isMobileNavOpen"
            >
              <!-- Heroicon name: menu -->
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden space-x-6 xl:space-x-10 lg:flex">
            <nuxt-link
              to="/productcat"
              class="inline-flex items-center text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
            >
              Silkedyner
            </nuxt-link>
            <nuxt-link
              to="/productcat"
              class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
            >
              Silkepuder
            </nuxt-link>
            <nuxt-link
              to="/productcat"
              class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
            >
              Silkesengetøj
            </nuxt-link>
            <a
              href="#"
              class="inline-flex items-center text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
            >
              Silkens ABC
            </a>
          </nav>
          <div
            class="flex-col items-end justify-end hidden xl:items-center xl:space-x-8 lg:flex xl:flex-row"
          >
            <div>
              <label
                for="account_number"
                class="block text-sm font-medium leading-5 text-gray-700 sr-only"
                >Søg efter produkt</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  id="account_number"
                  class="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                  placeholder="Søg..."
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <span class="inline-flex mt-2 rounded-md shadow-sm xl:mt-0">
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen active:bg-bgreen-700"
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
              </a>
            </span>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
      <transition
        enter-active-class="transition duration-200 ease-out transform"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in transform"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-if="isMobileNavOpen"
          class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden"
        >
          <div class="rounded-lg shadow-lg">
            <div
              class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50"
            >
              <div class="px-5 pt-5 pb-6 space-y-6">
                <div class="flex items-center justify-between">
                  <nuxt-link to="/">
                    <img
                      class="w-auto h-12 sm:h-16"
                      src="/Logo.png"
                      alt="Workflow"
                    />
                  </nuxt-link>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      @click="isMobileNavOpen = !isMobileNavOpen"
                    >
                      <!-- Heroicon name: x -->
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav class="grid gap-y-8">
                    <nuxt-link
                      to="/productcat"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                    >
                      <!-- Heroicon name: chart-bar -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-bgreen-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>

                      <div
                        class="text-base font-medium leading-6 text-gray-900"
                      >
                        Silkedyner
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      to="/productcat"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                    >
                      <!-- Heroicon name: cursor-click -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-bgreen-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>

                      <div
                        class="text-base font-medium leading-6 text-gray-900"
                      >
                        Silkepuder
                      </div>
                    </nuxt-link>
                    <nuxt-link
                      to="/productcat"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                    >
                      <!-- Heroicon name: shield-check -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-bgreen-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>

                      <div
                        class="text-base font-medium leading-6 text-gray-900"
                      >
                        Silkesengetøj
                      </div>
                    </nuxt-link>
                    <a
                      href="#"
                      class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                    >
                      <!-- Heroicon name: view-grid -->
                      <svg
                        class="flex-shrink-0 w-6 h-6 text-bgreen-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>

                      <div
                        class="text-base font-medium leading-6 text-gray-900"
                      >
                        Silkens ABC
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="px-5 py-6 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Handelsbetingelser
                  </a>
                  <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Om os
                  </a>
                  <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Kontakt
                  </a>
                  <a
                    href="#"
                    class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Privatlivspolitik
                  </a>
                </div>
                <div class="space-y-6">
                  <div>
                    <label
                      for="account_number"
                      class="block text-sm font-medium leading-5 text-gray-700 sr-only"
                      >Søg efter produkt</label
                    >
                    <div class="relative mt-1 rounded-md shadow-sm">
                      <input
                        id="account_number"
                        class="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                        placeholder="Søg..."
                      />
                      <div
                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                      >
                        <svg
                          class="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen active:bg-bgreen-700"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileNavOpen: false,
    }
  },
}
</script>
