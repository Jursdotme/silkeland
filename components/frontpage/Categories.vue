<template>
  <div class="px-4 mx-auto mt-24 max-w-7xl">
    <div class="text-center">
      <h2
        class="text-3xl font-medium leading-9 tracking-tight text-bsand-600 sm:text-4xl sm:leading-10"
      >
        Vælg en kategori
      </h2>
      <p class="max-w-2xl mx-auto mt-3 text-bsand-400 sm:mt-4">
        Man kan fremad se, at de har været udset til at læse, at der skal dannes
        par af ligheder. De kan optimeres fra oven af at formidles stort uden
        brug fra optimering af presse.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
      <nuxt-link
        v-for="(category, index) in categories"
        :key="index"
        to="/productcat"
        class="relative overflow-hidden shadow-lg rounded-2xl hover:shadow-2xl group hover:scale-105"
      >
        <img
          class="object-cover w-full h-64"
          :src="category.image"
          :alt="category.description"
        />
        <div
          class="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black to-transparent"
        >
          <h3
            class="text-2xl font-bold transition-all duration-200 ease-out transform md:translate-y-14 group-hover:translate-y-0"
          >
            {{ category.title }}
          </h3>
          <p
            class="transition-all duration-300 ease-out transform md:opacity-0 group-hover:opacity-100 md:translate-y-14 group-hover:translate-y-0"
          >
            {{ category.description }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: 'Silkedyner',
          description:
            'Med en silkedyne er du sikret et allergivenligt sovemiljø.',
          image: '/dynekat.jpg',
        },
        {
          title: 'Silkepuder',
          description:
            'Med en silkedyne er du sikret et allergivenligt sovemiljø.',
          image: '/pudekat.jpg',
        },
        {
          title: 'Silkebetræk',
          description:
            'Med en silkedyne er du sikret et allergivenligt sovemiljø.',
          image: '/lagenkat.jpg',
        },
      ],
    }
  },
}
</script>
