<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-white">
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold leading-9 text-center text-gray-900">
        Læs mere
      </h2>
      <div class="mt-12">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
        >
          <nuxt-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            class="p-4 space-y-2 rounded-lg hover:bg-bsand-100"
          >
            <dt class="text-lg font-medium leading-6 text-gray-900">
              {{ item.label }}
            </dt>
            <dd class="text-base leading-6 text-gray-500">
              {{ item.description }}
            </dd>
          </nuxt-link>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Fordele Ved Silke Dyner',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Den Gode Kvalitet',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Hvorfor Silkeland?',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Hvilken Dyne Skal Jeg Vælge?',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Håndlavet Eller Maskinlavet?',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Silkepleje',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Allergivenligt',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: '100% Naturprodukt',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
        {
          label: 'Økologisk Fra a-z',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit. ',
          link: '/',
        },
        {
          label: 'Silkens Historie',
          description: 'Quis proident deserunt ullamco eu qui eu aliqua elit.',
          link: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
