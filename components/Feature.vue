<template>
  <div
    class="w-full grid-cols-5 px-4 mx-auto mt-10 md:px-8 lg:px-4 lg:grid max-w-7xl"
  >
    <div class="relative z-0 col-span-4 col-start-1 row-start-1">
      <img
        src="/feature.jpg"
        alt=""
        class="object-cover w-full h-full shadow-xl rounded-t-3xl sm:rounded-3xl"
      />
    </div>
    <div
      class="relative z-10 flex flex-col justify-center row-start-1 p-4 bg-white rounded-t-none shadow-2xl sm:p-8 sm:mx-4 sm:p-16 lg:my-32 lg:col-span-3 xl:col-span-2 lg:col-start-3 xl:col-start-4 rounded-b-3xl sm:rounded-3xl sm:-mt-16 lg:mx-0"
    >
      <p class="text-sm font-medium uppercase text-bgreen-500 sm:text-base">
        Cras fermentum leo sed
      </p>
      <h2
        class="mt-4 text-2xl font-bold leading-none uppercase sm:text-3xl md:text-5xl text-bsand-600"
      >
        Nam pharetra vel
      </h2>
      <p class="mt-4 text-gray-700 md:text-xl">
        Fusce hendrerit tempus dictum. Praesent feugiat laoreet nulla, sed
        congue justo consequat quis. In sed purus ultricies, maximus enim at,
        rutrum augue. Maecenas tristique dictum neque quis pellentesque.
      </p>
      <div class="justify-start mt-10 sm:flex">
        <div class="rounded-md shadow">
          <a
            href="#"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen"
          >
            Køb nu
          </a>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-bgreen-600 bg-bgreen-100 hover:text-bgreen-700 hover:bg-bgreen-200 focus:outline-none focus:border-bgreen-300 focus:shadow-outline-bgreen"
          >
            Se alle tilbud
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
