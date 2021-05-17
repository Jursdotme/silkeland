<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div
    style="
      background-image: url(https://images.unsplash.com/photo-1486338892246-cd25343d5338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2060&q=80);
    "
    class="bg-center bg-cover"
  >
    <div
      class="w-full pt-16 pb-20 mx-auto max-w-7xl lg:pt-28 lg:pb-44 lg:text-left"
    >
      <div class="px-4 lg:w-2/3 sm:px-8 xl:pr-16">
        <h2 class="text-6xl font-black text-white">
          Det perfekte påskeæg til den du holder af
        </h2>
        <p
          class="max-w-md mx-auto mt-3 text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div class="max-w-xs mt-8 rounded-md shadow">
          <nuxt-link
            to="/paaskekampagne"
            class="flex items-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-bgreen-700 hover:bg-bgreen-800 md:py-4 md:text-lg md:px-10"
          >
            Se vores Valentines tilbud
          </nuxt-link>
        </div>

        <div
          class="flex flex-col max-w-sm mx-auto mt-8 space-y-2 md:max-w-full sm:space-y-0 sm:text-left sm:space-x-2 sm:flex-row"
        >
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
          >
            Silkedyner
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
          >
            Silkepuder
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
          >
            Silkesengetøj
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
          >
            Gavekort
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
