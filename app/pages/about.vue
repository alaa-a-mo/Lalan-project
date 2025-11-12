<template>
  <div>
    <PageBanner :title="$t('page title')" background="/images/page-titles/1.jpg" />
    <!-- about #1
============================================= -->
<div>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
    <section id="about" class="about bg-white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-5 col-md-5">
            <div class="about--img">
              <img
                class="img-responsive"
                src="/images/about/1.jpg"
                alt="about img"
              />
            </div>
          </div>
          <!-- .col-md-5 -->
          <div class="col-xs-12 col-sm-7 col-md-6 col-md-offset-1">
            <div class="heading heading-3">
              <h2 class="heading--title">
                We Provide Lovable Experiment in the Real Estate Field
              </h2>
            </div>
            <!-- .heading-title end -->
            <div class="about--panel">
              <h3>Our Vision</h3>
              <p>
                Propin ipsum dolor sit amet, consectetur adipisicing elited
                eiusmod tempore incidid ut labor et dolore magna aliquaut enim
                ad minim veniam.
              </p>
            </div>
            <!-- .about-panel end -->
            <div class="about--panel">
              <h3>Our Goal</h3>
              <p>
                Duis aute viele irure dolor in reprer volupta velite esse cilume
                dolore eu fugiat nulla pariatur. Excepteur sint occae cupidat
                non proident.
              </p>
            </div>
            <!-- .about-panel end -->
          </div>
          <!-- .col-md-6 -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </section>
    <!-- #about end -->
    <!-- Feature -->
    <section id="feature" class="feature feature-left pt-90 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">What We Provide?</h2>
              <p class="heading--desc">
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-xs-12 col-sm-6 col-md-6"
          >
            <div class="feature-panel">
              <div class="feature--icon">
                <img :src="feature.icon" :alt="feature.title" />
              </div>
              <div class="feature--content">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- .feature end -->
    <!-- agents
============================================= -->
    <section id="agents" class="agents bg-white pt-90">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Trusted Agents</h2>
              <p class="heading--desc">
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
            <!-- .heading end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row">
          <!-- agent #1 -->
          <AgentCard
            v-for="(agent, index) in agents"
            :key="index"
            v-bind="agent"
          />
        </div>
      </div>
    </section>
    <!-- #agents end  -->
     <ContactSection />
  </div>
</template>
<script setup>
const features = [
  {
    icon: "/images/features/icons/1.png",
    title: "Presenting Your Property",
    description:
      "Duis sed odio sit amet nibh vtate cursusa sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidet auctor ornare odio. Sede non mauris vitae erat conquat.",
  },
  {
    icon: "/images/features/icons/2.png",
    title: "Renting or Selling",
    description:
      "Duis sed odio sit amet nibh vtate cursusa sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidet auctor ornare odio. Sede non mauris vitae erat conquat.",
  },
  {
    icon: "/images/features/icons/3.png",
    title: "Property Exchange",
    description:
      "Duis sed odio sit amet nibh vtate cursusa sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidet auctor ornare odio. Sede non mauris vitae erat conquat.",
  },
  {
    icon: "/images/features/icons/4.png",
    title: "Buying a Property",
    description:
      "Duis sed odio sit amet nibh vtate cursusa sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidet auctor ornare odio. Sede non mauris vitae erat conquat.",
  },
];
const agents = [
  {
    name: "Steve Martin",
    position: "Buying Agent",
    image: "/images/agents/grid/1.png",
    description:
      "Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
    social: {
      facebook: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mark Smith",
    position: "Selling Agent",
    image: "/images/agents/grid/2.png",
    description:
      "Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
    social: {
      facebook: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ryan Printz",
    position: "Real Estate Broker",
    image: "/images/agents/grid/3.png",
    description:
      "Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
    social: {
      facebook: "#",
      twitter: "#",
      dribbble: "#",
      linkedin: "#",
    },
  },
];
const { locales, setLocale } = useI18n()

</script>
