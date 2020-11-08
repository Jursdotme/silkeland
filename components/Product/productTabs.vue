<template>
  <div>
    <div class="block">
      <div class="border-b border-gray-200">
        <nav class="flex justify-center -mb-px">
          <a
            v-for="(tab, index) in tabs"
            :key="index"
            href="#"
            :class="[isActive(tab.id) ? activeClass : inactiveClass]"
            @click.prevent="setActive(tab.id)"
          >
            {{ tab.title }}
          </a>
        </nav>
      </div>
    </div>
    <div v-if="isActive('detaljer')">
      <div class="mx-auto mt-8 prose" v-html="tabs[0].content"></div>
    </div>
    <div v-if="isActive('egenskaber')">
      <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
      <div
        class="max-w-5xl mx-auto mt-8 overflow-hidden bg-white shadow sm:rounded-lg"
      >
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Produktegenskaber
            <span class="font-normal text-bsand-600"
              >- Dobbelt silkedyne med bomuldsvår</span
            >
          </h3>
          <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
            Varenummer: 236675
          </p>
        </div>
        <div class="px-4 py-5 sm:p-0">
          <dl>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Silke pr. m2
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                370g
              </dd>
            </div>
            <div
              class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
            >
              <dt class="text-sm font-medium leading-5 text-gray-500">Type</dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Dobbeltdyne
              </dd>
            </div>
            <div
              class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
            >
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Materiale
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Silkevår med silkefoer
              </dd>
            </div>
            <div
              class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
            >
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Vasekinfo
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Tåler skånevask
              </dd>
            </div>
            <div
              class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
            >
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Længere tekst er også mulig
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div
              class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
            >
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Downloadbar info
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                <ul class="border border-gray-200 rounded-md">
                  <li
                    class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5"
                  >
                    <div class="flex items-center flex-1 w-0">
                      <!-- Heroicon name: paper-clip -->
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="flex-1 w-0 ml-2 truncate">
                        vaskeguide.pdf
                      </span>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                      <a
                        href="#"
                        class="font-medium transition duration-150 ease-in-out text-bgreen-400 hover:text-bgreen-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li
                    class="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5 border-t border-gray-200"
                  >
                    <div class="flex items-center flex-1 w-0">
                      <!-- Heroicon name: paper-clip -->
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="flex-1 w-0 ml-2 truncate">
                        måleguide.pdf
                      </span>
                    </div>
                    <div class="flex-shrink-0 ml-4">
                      <a
                        href="#"
                        class="font-medium transition duration-150 ease-in-out text-bgreen-400 hover:text-bgreen-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div v-if="isActive('faq')">
      <div class="mx-auto mt-8">
        <faq :questions="faq" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass:
        'px-4 py-4 text-sm md:text-lg font-medium leading-5 whitespace-no-wrap border-b-2 text-bgreen-600 border-bgreen-500 focus:outline-none focus:text-bgreen-800 focus:border-bgreen-400',
      inactiveClass:
        'px-4 py-4 text-sm md:text-lg font-medium leading-5 text-gray-500 whitespace-no-wrap border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300',
      activeTab: 'detaljer',
      tabs: [
        {
          title: 'Detaljer',
          content:
            '<h2>Vedligeholdelse</h2><p>Normalt anbefaler vi at man hænger dynen ud på tørresnoren et par gange om året, dog ikke i direkte solskin. Hvis uheldet er ude kan du også vaske dynen på 30° skåneprogram og efterfølgende lade den hænge til tørre.</p><h2>Egenskaber ved silkedyner</h2><p>Silkedyner er meget temperaturregulerende og føles derfor svale om sommeren og varme om vinteren. Du vil aldrig mere opleve at skulle varme dynen op en kold efterårsdag – en silkedyne føles varm fra starten. På grund af silkens lethed vil du opleve at en silkedyne smyger sig om kroppen og giver dig en utrolig velvære og følelse af luksus.</p><p>Dit sovemiljø vil også ændre sig da husstøvsmider lever meget dårligt i silketekstiler. Derfor vil allergikere ofte vælge silkedyner frem for traditionelle dundyner.</p><h2>Sammenligning med andre silkedyner</h2><p>Silkeland har valgt udelukkende at forhandle silkedyner med 100 % naturlig langfibret Mulberry silke. Vi har i vores dyner valgt at have 370 g silke per m2 og vores producent er Øko-Tex certificeret hvilket sikrer at du som forbruger får et produkt der er produceret på en forsvarlig og anstændig måde. Så når du sammenligner priser på silkedyner fra andre forhandlere skal du huske at tage dette med i betragtning. Kvaliteten kan svinge og ansvarligheden variere!</p>',
          id: 'detaljer',
        },
        { title: 'Egenskaber', content: 'Content', id: 'egenskaber' },
        { title: 'FAQ', content: 'Content', id: 'faq' },
      ],
      faq: [
        {
          question: 'Silkedynens vægt?',
          answer:
            '<p>Da silkedyner har en utrolig temperaturregulerende evne, anbefaler vi langt de fleste at vælge vores dyner som indeholder 370 gr. silke per kvadratmeter, hvilket svarer totalt til 1036-1140 gr. silkefyld i dynen afhængig om længde er 200 cm. eller 220 cm. Denne dyne vil holde dig <strong>varm og behagelig hele efteråret og gennem vinteren</strong>, og med mindre at du er meget varm, vil den også være fin til sommerbrug.</p><p>Vores sommerdyner er velegnet til dem som døjer meget med varmen og giver <strong>optimal komfort i de varme sommernætter</strong>.Sommerdynen er let nok til at modvirke ophedning, men samtidig tyk nok til at sikre at du ikke småfryser på en køligere sommernat.Dynen indeholder 190 gr. silke per kvadratmeter, hvilket svarer til knap 600 gr. silkefyld</p>',
        },

        {
          question: 'Kan silkedyner vaskes?',
          answer:
            '<p>I modsætning til hvad mange tror, er det ikke særlig svært at passe og rense silkedyner. </p><p>Se mere om rensning af silkedyner på siden <a href="#">&quot;Sådan plejer du silke produkter&quot;</a>.</p>',
        },
        {
          question: 'Genkend kvalitetssilke?',
          answer:
            '<p>Silkelinned består typisk af 16mm eller 19mm - mm står for momme og angiver hvor mange tråde der benyttes i vævningen. De lagner og linned du finder her i butikken er syet af 19mm silke da dette giver dig et bedre og mere holdbart produkt der vil holde mange år frem. Ud over dette er selve silkens kvalitet naturligvis også meget afgørende. Vi benytter udelukkende langfibret Mulberry silke der af alle silkekendere anerkendes som den bedste kvalitet der findes.</p>',
        },
        {
          question: 'Kan varer returneres?',
          answer:
            '<p>Silkeland.dk tilbyder fuld returret blot du returnerer varen indenfor 14 dage efter du har modtaget den.</p><p>Du vil herefter få returneret varens pris. Du er meget velkommen til at sende os en email på adressen info@silkeland.dk hvis du har nogle spørgsmål til et køb du har foretaget dig.</p><p>Læs mere om din returret på siden om <a href="#">handelsbetingelser</a>.</p>',
        },
        {
          question: 'Hvad er en silkedyne?',
          answer:
            '<p>En silkedyne er en dyne hvor det traditionelle indhold af dun er erstattet af silke. Våret eller hylsteret omkring silken kan være lavet bomuld eller silke.</p><p>Silken der benyttes i vores silkedyner samt silkepuder er udelukkende naturlig langfibret Mulberry silke. Silken kommer fra silke kokoner der spindes af silkelarven Mombyx Mori. Der skal ca 5000 kokoner til at lave blot en enkelt af de dyner vi sælger.</p><p>En silkedyne er god hvis du lider af allergi, fantastisk temperaturregulerende og giver en behagelig fornemmelse af luksus og velvære.</p>',
        },
      ],
    }
  },

  methods: {
    isActive(tabId) {
      return this.activeTab === tabId
    },
    setActive(tabId) {
      this.activeTab = tabId
    },
  },
}
</script>

<style lang="scss" scoped></style>
