<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div
        class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
      >
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
          >
            Kontakt os
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Har du et problem med din ordre, et spørgsmål til et produkt eller
            bare et spørgsmål til hvordan du handler med silkeland.dk, så er du
            altid velkommen til at kontakte os.
          </p>
          <dl class="mt-8 text-base leading-6 text-gray-500">
            <div>
              <dt class="sr-only">Adresse</dt>
              <dd>
                <p>Silkeland ApS</p>
                <p>Mariedalsvej</p>
                <p>8220 Brabrand</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <!-- Heroicon name: phone -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span class="ml-3">(+45) 4358 4494</span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <!-- Heroicon name: mail -->
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3"> info@silkeland.dk </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Navn</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="full_name"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Navn"
                />
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label for="phone" class="sr-only">Telefon</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="phone"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Telefon"
                />
              </div>
            </div>
            <div>
              <label for="message" class="sr-only">Besked</label>
              <div class="relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Besked"
                ></textarea>
              </div>
            </div>
            <div class="">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500 focus:outline-none focus:border-bgreen-700 focus:shadow-outline-bgreen active:bg-bgreen-700"
                >
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
