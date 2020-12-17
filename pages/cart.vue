<template>
  <div class="px-4 mx-auto mt-24 max-w-7xl">
    <h1 class="">Kurv</h1>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          class="block min-w-full grid-cols-3 gap-8 py-2 lg:grid sm:px-6 lg:px-8"
        >
          <CartTable class="md:col-span-2" />
          <CartOverview />
        </div>
      </div>
    </div>
    <div
      class="px-4 mx-auto my-16 prose-sm prose ms:my-24 sm:prose lg:prose-lg xl:prose-2xl max-w-7xl"
    >
      I Silkelands butik kan du benytte Dankort og VISA som betaling.
      Betalingerne går via en sikker SSL krypteret forbindelse fra Silkeland
      direkte til PBS. Dine kreditkortsoplysninger er beskyttet og krypteret,
      når de sendes til behandling ved PBS. Vi får derfor ikke kendskab til det
      du indtaster, men får kun besked om transaktionen er godkendt eller ej.
    </div>
  </div>
</template>
