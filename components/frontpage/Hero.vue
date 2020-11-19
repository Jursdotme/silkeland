<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-white">
    <main class="lg:relative">
      <div
        class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-44 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h2
            class="text-4xl font-extrabold leading-10 tracking-tight text-bsand-400 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Den bedste silke til en
            <br class="xl:hidden" />
            <span class="text-bgreen-400"> perfekt nats søvn</span>
          </h2>
          <p
            class="max-w-md mx-auto mt-3 text-lg text-bgreen-300 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <a
            href="#"
            class="block mt-4 font-semibold underline text-bgreen-500"
          >
            Hvorfor silke?
          </a>

          <div
            class="flex flex-col max-w-sm mx-auto mt-8 space-y-2 md:max-w-full sm:space-y-0 sm:text-left sm:space-x-2 sm:justify-center lg:justify-start sm:flex-row"
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
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="/Hero.jpg"
          alt="Woman on her phone"
        />
      </div>
    </main>
  </div>
</template>
