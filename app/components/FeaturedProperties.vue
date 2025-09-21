<template>
  <div class="widget widget-featured-property">
    <div class="widget--title">
      <h5>Featured Properties</h5>
    </div>
    <div class="widget--content">
      <div
        class="carousel carousel-dots"
        data-slide="1"
        data-slide-rs="1"
        data-autoplay="false"
        data-nav="false"
        data-dots="true"
        data-space="0"
        data-loop="true"
        data-speed="800"
      >
        <!-- .property-item #1 -->
        <div
          class="property-item owl-item"
          v-for="(property, index) in featuredProperties"
          :key="index"
        >
          <div class="property--img">
            <img
              :src="property.img"
              :alt="property.title"
              class="img-responsive"
            />
            <span class="property--status">{{ property.status }}</span>
          </div>
          <div class="property--content">
            <div class="property--info">
              <h5 class="property--title">
                <NuxtLink :to="`/properties/${property.id}`">{{ property.title }}</NuxtLink>
              </h5>
              <p class="property--location">
                {{ property.location }}
              </p>
              <p class="property--price">
                {{ property.price
                }}<span class="time">{{ property.time }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- .property item end -->
      </div>
      <!-- .carousel end -->
    </div>
  </div>
</template>
<script setup>
useHead({
  script: [
    { src: "/js/jquery-2.2.4.min.js", defer: true },
    { src: "/js/plugins.js", defer: true },
    { src: "/js/functions.js", defer: true },
  ],
});
const featuredProperties = [
  {
    id: 1,
    title: "House in Chicago",
    location: "1445 N State Pkwy, Chicago, IL 60610",
    price: "$1200",
    time: "month",
    status: "For Rent",
    img: "/images/properties/13.jpg",
    
  },
  {
    id: 2,
    title: "Villa in Oglesby Ave",
    location: "1035 Oglesby Ave, Chicago, IL 60617",
    price: "$130,000",
    time: "month",
    status: "For Rent",
    img: "/images/properties/2.jpg",
    
  },
  {
    id: 3,
    title: "Apartment in Long St.",
    location: "34 Long St, Jersey City, NJ 07305",
    price: "$70,000",
    time: null,
    status: "For Sale",
    img: "/images/properties/3.jpg",
    
  },
  {
    id: 4,
    title: "House in Chicago",
    location: "1445 N State Pkwy, Chicago, IL 60610",
    price: "$1200",
    time: "month",
    status: "For Rent",
    img: "/images/properties/13.jpg",
    
  },
];
onMounted(async () => {
  // Wait until Vue actually renders DOM nodes
  await nextTick()

  // Now initialize Owl Carousel
  $('.carousel').each(function () {
    var $Carousel = $(this)
    $Carousel.owlCarousel({
      loop: $Carousel.data('loop'),
      autoplay: $Carousel.data('autoplay'),
      margin: $Carousel.data('space'),
      nav: $Carousel.data('nav'),
      dots: $Carousel.data('dots'),
      center: $Carousel.data('center'),
      dotsSpeed: $Carousel.data('speed'),
      thumbs: $Carousel.data('thumbs'),
      thumbsPrerendered: $Carousel.data('thumbs'),
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: $Carousel.data('slide-rs'),
        },
        1000: {
          items: $Carousel.data('slide'),
        },
      },
    })
  })
})
</script>