<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div
    style="background-image: url(summer-hero.jpg)"
    class="bg-center bg-cover"
  >
    <div
      class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-44 lg:text-left"
    >
      <div class="px-4 mx-auto lg:w-2/3 sm:px-8 xl:pr-16">
        <img src="sommervarmen.svg" alt="" class="text-white fill-current" />
        <h2 class="sr-only">Silke er perfekt til Sommervarmen</h2>
        <p
          class="max-w-md mx-auto mt-3 text-lg text-center text-white sm:text-xl md:mt-5 md:max-w-3xl"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div class="max-w-xs mx-auto mt-8 rounded-md shadow">
          <nuxt-link
            to="/sommerkampagne"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
          >
            Se vores sommertilbud
          </nuxt-link>
        </div>
        <a
          href="#"
          class="block mt-4 font-semibold text-center underline text-amber-500"
        >
          Hvorfor silke?
        </a>

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
