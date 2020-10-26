<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-white">
    <main class="lg:relative">
      <div
        class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-bsand-400 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            Den bedste silke til en
            <br class="xl:hidden" />
            <span class="text-bgreen-400"> perfekt nats søvn</span>
          </h2>
          <p
            class="mt-3 max-w-md mx-auto text-lg text-bgreen-300 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Se vores udvalg
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-bgreen-600 bg-bgreen-100 hover:text-bgreen-700 hover:bg-bgreen-200 focus:outline-none focus:border-bgreen-300 focus:shadow-outline-bgreen transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Hvorfor silke?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="/Hero.jpg"
          alt="Woman on her phone"
        />
      </div>
    </main>
  </div>
</template>
