<template>
  <div>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10"
        >
          F.A.Q
        </h2>
        <div class="pt-6 mt-6 border-t-2 border-gray-200">
          <dl>
            <FaqItem
              v-for="(question, index) in questions"
              :key="index"
              :question="question.question"
              :answer="question.answer"
            />
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
