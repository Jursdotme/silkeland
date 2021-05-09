<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div>
    <div
      style="background-image: url(efteraar-hero@2x.jpg)"
      class="bg-center bg-cover aspect-h-5 aspect-w-4 md:aspect-h-3 md:aspect-w-5 sm:aspect-h-2 xl:aspect-h-2 xl:aspect-w-4"
    >
      <div class="w-full mx-auto text-center max-w-7xl mt-1/3-w lg:text-left">
        <div class="flex items-center px-4 mx-auto lg:w-2/3 sm:px-8 xl:pr-16">
          <h2 class="sr-only">Silkelands Efterårsudsalg</h2>

          <div class="hidden max-w-xs mx-auto mt-8 rounded-md shadow sm:block">
            <nuxt-link
              to="/efteraarskampagne"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
            >
              Se de gode tilbud
            </nuxt-link>
          </div>

          <div
            class="flex-col justify-center hidden max-w-sm mx-auto mt-8 space-y-2 md:max-w-full sm:space-y-0 sm:text-left sm:space-x-2 sm:flex-row xl:flex"
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
    <nuxt-link
      to="/efteraarskampagne"
      class="flex items-center justify-center px-8 py-3 m-4 text-base font-medium text-white border border-transparent rounded-md sm:hidden bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10"
    >
      Se de gode tilbud
    </nuxt-link>
  </div>
</template>
