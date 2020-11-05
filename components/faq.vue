<template>
  <div>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:text-4xl sm:leading-10"
        >
          Frequently asked questions
        </h2>
        <div class="pt-6 mt-6 border-t-2 border-gray-200">
          <dl>
            <div v-for="(question, index) in questions" :key="index">
              <dt class="text-lg leading-7">
                <!-- Expand/collapse question button -->
                <button
                  class="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
                >
                  <span class="font-medium text-gray-900">
                    {{ question.question }}
                  </span>
                  <span class="flex items-center ml-6 h-7">
                    <!--
                    Heroicon name: chevron-down

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                    <svg
                      class="w-6 h-6 transform -rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd class="pr-12 mt-2">
                <p class="text-base leading-6 text-gray-500">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
}
</script>
