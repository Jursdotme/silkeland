<template>
  <div class="grid grid-cols-6 gap-8 mt-4 mb-8">
    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
      <h3 class="text-lg font-medium leading-6 text-bsand-700">
        Anvend rabatkode
      </h3>
      <div
        class="mt-2 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
      >
        <div class="p-6">
          <label for="coupon" class="sr-only">Rabatkode</label>
          <input
            id="coupon"
            type="text"
            name="coupon"
            class="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-bgreen-400 focus:border-bgreen-400 sm:text-sm"
            placeholder="indtast rabatkode..."
          />
          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
              >
                Anvend rabatkode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
      <h3 class="text-lg font-medium leading-6 text-bsand-700">
        Anvend Gavekort
      </h3>
      <div
        class="mt-2 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
      >
        <div class="p-6">
          <label for="giftcard" class="sr-only">Gavkortkode</label>
          <input
            id="giftcard"
            type="text"
            name="giftcard"
            class="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-bgreen-400 focus:border-bgreen-400 sm:text-sm"
            placeholder="indtast gavekortkode..."
          />
          <div class="pt-5">
            <div class="flex justify-end space-x-2">
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-300"
              >
                Tjek status
              </button>
              <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-center border border-transparent rounded-md text-bgreen-700 bg-bgreen-100 hover:bg-bgreen-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgreen-500"
              >
                Anvend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-6 lg:col-span-2">
      <h2 class="text-lg font-medium leading-6 text-bsand-700">Oversigt</h2>
      <div
        class="mt-2 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
      >
        <div class="p-6">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>1.648,00 kr</span>
          </div>
          <div class="flex justify-between">
            <span>Moms</span>
            <span>412,00 kr</span>
          </div>
        </div>
        <div class="p-6">
          <div class="flex justify-between text-xl font-extrabold">
            <span>Ordretotal</span>
            <span>1.648,00 kr</span>
          </div>
          <a
            href="#"
            class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white border border-transparent rounded-md bg-bgreen-400 hover:bg-bgreen-500"
            >Gå til kassen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
