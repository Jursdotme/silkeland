<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div
    style="background-image: url(januar-hero.jpg)"
    class="bg-bottom bg-cover"
  >
    <div
      class="w-full pt-16 pb-20 mx-auto text-center lg:pb-96 lg:pt-24 lg:text-left max-w-7xl"
    >
      <div class="px-4 mx-auto lg:w-1/2 sm:px-8 xl:pr-16">
        <h2 class="text-6xl font-black text-center uppercase">
          Stort Januarudsalg
        </h2>
        <p
          class="max-w-md mx-auto mt-3 text-lg text-center sm:text-xl md:mt-5 md:max-w-3xl"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div class="max-w-xs mx-auto mt-8 rounded-md shadow">
          <nuxt-link
            to="/januarudsalg"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
          >
            Se vores Januarudsalg
          </nuxt-link>
        </div>

        <div
          class="flex flex-col justify-center max-w-sm mx-auto mt-8 space-y-2 md:max-w-full sm:space-y-0 sm:text-left sm:space-x-2 sm:flex-row"
        >
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Silkedyner
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Silkepuder
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Silkesengetøj
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-amber-700 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Gavekort
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
