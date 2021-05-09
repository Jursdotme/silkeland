<template>
  <div
    class="w-full grid-cols-5 px-4 mx-auto mt-10 md:px-8 lg:px-4 lg:grid max-w-7xl"
  >
    <div class="relative z-0 col-span-4 col-start-1 row-start-1">
      <img
        src="https://images.unsplash.com/photo-1514480100661-33506ca03fe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
        class="object-cover w-full h-full shadow-xl rounded-t-3xl sm:rounded-3xl"
      />
    </div>
    <div
      class="relative z-10 flex flex-col justify-center row-start-1 p-4 bg-white rounded-t-none shadow-2xl sm:mx-4 sm:p-16 lg:my-32 lg:col-span-3 xl:col-span-2 lg:col-start-3 xl:col-start-4 rounded-b-3xl sm:rounded-3xl sm:-mt-16 lg:mx-0"
    >
      <p class="text-sm font-medium text-red-500 uppercase sm:text-base">
        Cras fermentum leo sed
      </p>
      <h2
        class="mt-4 text-2xl font-bold leading-none text-red-600 uppercase sm:text-3xl md:text-5xl"
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
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red"
          >
            Køb nu
          </a>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-red-600 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:text-red-700 hover:bg-red-200 focus:outline-none focus:border-red-300 focus:shadow-outline-red"
          >
            Se alle tilbud
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
