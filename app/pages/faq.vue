<template>
  <div>
    <PageBanner title="FAQ" background="/images/page-titles/1.jpg" />
    <!-- Accordion #1
============================================= -->
    <section id="accordion1" class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading text-center mb-75">
              <h2 class="heading--title">Asked Questions</h2>
              <p class="heading--desc">
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-7 col-md-7">
            <div class="accordion accordion-1" id="accordion01">
              <div class="panel" v-for="(item, index) in faqItems" :key="index">
                <div class="panel--heading">
                  <a
                    :href="`collapse01-${item.id}`"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion01"
                    class="accordion-toggle"
                    :class="{ collapsed: activeIndex !== index }"
                    @click.prevent="toggleAccordion(index)"
                  >
                    {{ item.question }}
                  </a>
                </div>

                <div
                  :id="`collapse01-${item.id}`"
                  class="panel--body panel-collapse collapse"
                  :class="{ in: activeIndex === index }"
                  >
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
            <!-- End .Accordion-->
          </div>
          <!-- .col-md-7 end -->
          <div class="col-xs-12 col-sm-5 col-md-4">
            <img src="/images/accordion/1.jpg" alt="img" />
          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
useHead({
  script: [
    { src: "/js/jquery-2.2.4.min.js", defer: true },
    { src: "/js/plugins.js", defer: true },
    { src: "/js/functions.js", defer: true },
  ],
});

const activeIndex = ref(0); // open first panel by default

const faqItems = [
  {
    id: 1,
    question: "What is a real estate broker?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit cras sollicitudin, tellus vitae condy egestas. Libero varius ligula a id nec libero amet.",
  },
  {
    id: 2,
    question: "Why should I use a real estate salesperson?",
    answer:
      "Trends, vision dominates a lot of our subconscious interpretation of the world around us. On top it, pleasing images create a better user experience. Rounding up a bunch of specific designs.Trends, vision dominates a lot of our subconscious interpretation of the world around us.",
  },
  {
    id: 3,
    question: "What if my offer is rejected?",
    answer:
      "Trends, vision dominates a lot of our subconscious interpretation of the world around us. On top it, pleasing images create a better user experience. Rounding up a bunch of specific designs.Trends, vision dominates a lot of our subconscious interpretation of the world around us.",
  },
  {
    id: 4,
    question: "Should I buy or continue to rent?",
    answer:
      "Trends, vision dominates a lot of our subconscious interpretation of the world around us. On top it, pleasing images create a better user experience. Rounding up a bunch of specific designs.Trends, vision dominates a lot of our subconscious interpretation of the world around us.",
  },
];
function toggleAccordion(index) {
  // close if clicking on the same
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
