<template>
  <div>
    <section id="heroSearch" class="hero-search mtop-100 pt-0 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="slider--content">
              <div class="text-center">
                <h1>Find Your Favorite Property</h1>
              </div>
              <SearchProperties />
            </div>
          </div>
          <!-- .container  end -->
        </div>
        <!-- .slider-text end -->
      </div>
      <div
        class="carousel slider-navs"
        data-slide="1"
        data-slide-rs="1"
        data-autoplay="true"
        data-nav="true"
        data-dots="false"
        data-space="0"
        data-loop="true"
        data-speed="800"
      >
        <!-- Slide #1 -->
        <div
          class="slide--item bg-overlay bg-overlay-dark3 bg-section"
          v-for="(slide, index) in slides"
          :key="index"
          :style="{ backgroundImage: `url(${slide.img})` }"
        ></div>
        <!-- .slide-item end -->
      </div>
    </section>
    <section id="properties-carousel" class="properties-carousel pt-90 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Latest Properties</h2>
              <p class="heading--desc">
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
            <!-- .heading-title end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <PropertiesCarousel :items="properties" />
      </div>
      <!-- .container -->
    </section>
    <!-- Feature
============================================= -->
    <section id="feature" class="feature feature-1 text-center bg-white pb-90">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 text-center mb-70">
              <h2 class="heading--title">Simple Steps</h2>
              <p class="heading--desc">
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
            <!-- .heading-title end -->
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row">
          <!-- feature Panel #1 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="/images/features/icons/5.png" alt="icon img" />
              </div>
              <div class="feature--content">
                <h3>Search For Real Estates</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eule pariate.
                </p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #2 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="/images/features/icons/6.png" alt="icon img" />
              </div>
              <div class="feature--content">
                <h3>Select Your Favorite</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eule pariate.
                </p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
          <!-- feature Panel #3 -->
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="feature-panel">
              <div class="feature--icon">
                <img src="/images/features/icons/7.png" alt="icon img" />
              </div>
              <div class="feature--content">
                <h3>Take Your Key</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eule pariate.
                </p>
              </div>
            </div>
            <!-- .feature-panel end -->
          </div>
          <!-- .col-md-4 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
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
useHead({
  script: [
    { src: "/js/jquery-2.2.4.min.js", defer: true },
    { src: "/js/plugins.js", defer: true },
    { src: "/js/functions.js", defer: true },
  ],
});
onMounted(async () => {
  // Wait until Vue actually renders DOM nodes
  await nextTick();

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
const slides = [
  {
    id: 1,
    img: "/images/slider/slide-bg/3.jpg",
    alt: "background 3",
  },
  {
    id: 2,
    img: "/images/slider/slide-bg/1.jpg",
    alt: "background 1",
  },
  {
    id: 3,
    img: "/images/slider/slide-bg/3.jpg",
    alt: "background 3 again",
  },
];
const properties = [
  {
    id: 1,
    type: "House",
    title: "House in Kent Street",
    location: "127 Kent Street, Sydney, NSW 2000",
    city: "Sydney",
    country: "Australia",
    state: "Newcastle",
    zip: "2000",
    popupVideo: "https://www.youtube.com/watch?v=nrJtHemSPW4",
    img: "/images/properties/1.jpg",
    status: "For Sale",
    price: "$130,000",
    date: "10/12/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 2,
      baths: 2,
      area: "587 sq ft",
      rooms: 4,
      floors: 2,
      garage: 1,
    },
    featuresList: [
      "Center Cooling",
      "Balcony",
      "Pet Friendly",
      "Fire Alarm",
      "Modern Kitchen",
      "Storage",
      "Heating",
      "Pool",
      "Laundry",
      "Gym",
      "Elevator",
      "Dish Washer",
    ],
    floorPlans: [
      {
        title: "Ground Floor",
        size: "800 sq ft",
        rooms: 2,
        baths: 1,
        img: "/images/property-single/1.png",
      },
      {
        title: "First Floor",
        size: "600 sq ft",
        rooms: 2,
        baths: 1,
        img: "/images/property-single/1.png",
      },
    ],
    reviews: [
      {
        name: "Ryan Printz",
        date: "Feb 12, 2018",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Steve Martin",
        date: "Jan 16, 2018",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Nicole Smith",
        date: "Nov 25, 2017",
        rating: 3,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
    ],
    agent: {
      name: "Matt Peters",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "matt-peters.com",
      img: "/images/agents/grid/7.jpg",
    },
  },
  {
    id: 2,
    type: "Apartment",
    title: "Apartment For Rent",
    location: "1609 N Richmond St, Chicago, IL 60647",
    city: "Chicago",
    country: "USA",
    state: "Illinois",
    zip: "60647",
    popupVideo: "https://www.youtube.com/watch?v=nrJtHemSPW4",
    img: "/images/properties/6.jpg",
    status: "For Rent",
    price: "$900",
    time: "month",
    date: "11/05/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 1,
      baths: 1,
      area: "500 sq ft",
      rooms: 3,
      floors: 1,
      garage: 1,
    },
    featuresList: [
      "Center Cooling",
      "Balcony",
      "Pet Friendly",
      "Fire Alarm",
      "Modern Kitchen",
      "Storage",
      "Heating",
      "Pool",
      "Laundry",
      "Gym",
      "Elevator",
      "Dish Washer",
    ],
    floorPlans: [
      {
        title: "Ground Floor",
        size: "500 sq ft",
        rooms: 3,
        baths: 1,
        img: "/images/property-single/1.png",
      },
    ],
    reviews: [
      {
        name: "Ryan Printz",
        date: "Feb 12, 2018",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Steve Martin",
        date: "Jan 16, 2018",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Nicole Smith",
        date: "Nov 25, 2017",
        rating: 3,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
    ],
    agent: {
      name: "Sarah Lynn",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "sarah-lynn.com",
      img: "/images/agents/grid/7.jpg",
    },
  },
  {
    id: 3,
    type: "House",
    title: "2750 House in Urban St.",
    location: "2750 Urban Street Dr, Anderson, IN 46011",
    city: "Anderson",
    country: "USA",
    state: "Indiana",
    zip: "46011",
    popupVideo: "https://www.youtube.com/watch?v=nrJtHemSPW4",
    img: "/images/properties/5.jpg",
    status: "For Rent",
    price: "$1550",
    time: "month",
    date: "03/09/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 6,
      baths: 3,
      area: "1390 sq ft",
      rooms: 5,
      floors: 3,
      garage: 2,
    },
    featuresList: [
      "Center Cooling",
      "Balcony",
      "Pet Friendly",
      "Fire Alarm",
      "Modern Kitchen",
      "Storage",
      "Heating",
      "Pool",
      "Laundry",
      "Gym",
      "Elevator",
      "Dish Washer",
    ],
    floorPlans: [
      {
        title: "Ground Floor",
        size: "800 sq ft",
        rooms: 2,
        baths: 1,
        img: "/images/property-single/1.png",
      },
      {
        title: "First Floor",
        size: "600 sq ft",
        rooms: 2,
        baths: 1,
        img: "/images/property-single/1.png",
      },
      {
        title: "Second Floor",
        size: "600 sq ft",
        rooms: 1,
        baths: 1,
        img: "/images/property-single/1.png",
      },
    ],
    reviews: [
      {
        name: "Ryan Printz",
        date: "Feb 12, 2018",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Steve Martin",
        date: "Jan 16, 2018",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Nicole Smith",
        date: "Nov 25, 2017",
        rating: 3,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
    ],
    agent: {
      name: "Walter White",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "waloter-white.com",
      img: "/images/agents/grid/7.jpg",
    },
  },
  {
    id: 4,
    type: "Office",
    title: "Modern Office For Rent",
    location: "2003 Sheffield Ave, Anderson, IN 46011",
    city: "Anderson",
    country: "USA",
    state: "Indiana",
    zip: "46011",
    popupVideo: "https://www.youtube.com/watch?v=nrJtHemSPW4",
    img: "/images/properties/12.jpg",
    status: "For Rent",
    price: "$530",
    time: "month",
    date: "05/11/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 2,
      baths: 1,
      area: "150 sq ft",
      rooms: 2,
      floors: 1,
      garage: 1,
    },
    featuresList: [
      "Center Cooling",
      "Balcony",
      "Pet Friendly",
      "Fire Alarm",
      "Modern Kitchen",
      "Storage",
      "Heating",
      "Pool",
      "Laundry",
      "Gym",
      "Elevator",
      "Dish Washer",
    ],
    floorPlans: [
      {
        title: "Ground Floor",
        size: "800 sq ft",
        rooms: 2,
        baths: 1,
        img: "/images/property-single/1.png",
      },
    ],
    reviews: [
      {
        name: "Ryan Printz",
        date: "Feb 12, 2018",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Steve Martin",
        date: "Jan 16, 2018",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
      {
        name: "Nicole Smith",
        date: "Nov 25, 2017",
        rating: 3,
        comment:
          "Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.",
      },
    ],
    agent: {
      name: "John Snow",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "john-snow.com",
      img: "/images/agents/grid/7.jpg",
    },
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
</script>
