<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <div class="carousel carousel-dots" ref="carouselEl" data-slide="3" data-slide-rs="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="25" data-loop="true" data-speed="800">
        <!-- Loop through properties -->
        <div v-for="(item, i) in items" :key="i" class="property-item">
          <div class="property--img">
            <NuxtLink :to="`/properties/${item.id}`">
              <img :src="item.img" :alt="item.title" class="img-responsive" />
              <span class="property--status">{{ item.status }}</span>
            </NuxtLink>
          </div>
          <div class="property--content">
            <div class="property--info">
              <h5 class="property--title">
                <NuxtLink :to="`/properties/${item.id}`">{{ item.title }}</NuxtLink>
              </h5>
              <p class="property--location">{{ item.location }}</p>
              <p class="property--price">
                {{ item.price }}
                <span v-if="item.time" class="time">{{ item.time }}</span>
              </p>
            </div>
            <div class="property--features">
              <ul class="list-unstyled mb-0">
                <li>
                  <span class="feature">Beds:</span>
                  <span class="feature-num">{{ item.features.beds }}</span>
                </li>
                <li>
                  <span class="feature">Baths:</span>
                  <span class="feature-num">{{ item.features.baths }}</span>
                </li>
                <li>
                  <span class="feature">Area:</span>
                  <span class="feature-num">{{ item.features.area }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End v-for -->
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  items: {
    type: Array,
    required: true,
  },
});

// Carousel ref
const carouselEl = ref(null);

onMounted(async () => {
  // Now initialize Owl Carousel
  $(".carousel").each(function () {
    var $Carousel = $(this);
    $Carousel.owlCarousel({
      loop: $Carousel.data("loop"),
      autoplay: $Carousel.data("autoplay"),
      margin: $Carousel.data("space"),
      nav: $Carousel.data("nav"),
      dots: $Carousel.data("dots"),
      center: $Carousel.data("center"),
      dotsSpeed: $Carousel.data("speed"),
      thumbs: $Carousel.data("thumbs"),
      thumbsPrerendered: $Carousel.data("thumbs"),
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: $Carousel.data("slide-rs"),
        },
        1000: {
          items: $Carousel.data("slide"),
        },
      },
    });
  });
});
</script>
