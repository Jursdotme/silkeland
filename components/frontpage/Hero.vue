<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div
    style="
      --overlay-image: url('istockphoto-636259188-1024x1024.jpg');
      --overlay-colors: rgba(120, 186, 232, 0), rgba(120, 186, 100, 0);
    "
    class="bg-left-bottom bg-cover bg-overlay"
  >
    <div
      class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-44 lg:text-left"
    >
      <div class="px-4 mx-auto text-white lg:w-2/3 sm:px-8 xl:pr-16">
        <img src="xmas.svg" alt="" class="fill-current svg-shadow" />
        <h2 class="sr-only">Silke er perfekt til Sommervarmen</h2>
        <p
          class="max-w-md mx-auto mt-3 text-lg text-center sm:text-xl md:mt-5 md:max-w-3xl text-shadow"
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div class="max-w-xs mx-auto mt-8 rounded-md shadow">
          <nuxt-link
            to="/julekampagne"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-700 border border-transparent rounded-md hover:bg-red-800 md:py-4 md:text-lg md:px-10"
          >
            Se vores Juletilbud
          </nuxt-link>
        </div>
        <a
          href="#"
          class="block mt-4 font-semibold text-center text-white underline text-shadow"
        >
          Hvorfor silke?
        </a>

        <div
          class="flex flex-col justify-center max-w-sm mx-auto mt-8 space-y-2 md:max-w-full sm:space-y-0 sm:text-left sm:space-x-2 sm:flex-row"
        >
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Silkedyner
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Silkepuder
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Silkesengetøj
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Gavekort
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
