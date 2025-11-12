<template>
  <div v-if="property">
    <PageBanner
      :title="property.title"
      background="/images/page-titles/1.jpg"
    />
  </div>
  <!-- property single gallery
============================================= -->
  <section id="property-single-gallery" class="property-single-gallery">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="property-single-gallery-info">
            <div class="property--info clearfix">
              <div class="pull-left">
                <h5 class="property--title">{{ property.title }}</h5>
                <p class="property--location">
                  <i class="fa fa-map-marker"></i>{{ property.location }}
                </p>
              </div>
              <div class="pull-right">
                <span class="property--status">{{ property.status }}</span>
                <p class="property--price">{{ property.price }}</p>
              </div>
            </div>
            <!-- .property-info end -->
            <div class="property--meta clearfix">
              <div class="pull-left">
                <ul class="list-unstyled list-inline mb-0">
                  <li>
                    Property ID:<span class="value">{{ property.id }}</span>
                  </li>
                  <li>
                    Add to favorites:<span class="value">
                      <i class="fa fa-heart-o"></i
                    ></span>
                  </li>
                </ul>
              </div>
              <div class="pull-right">
                <div class="property--meta-share">
                  <span class="share--title">share</span>
                  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="facebook"
                    ><i class="fa fa-facebook"></i
                  ></a>
                  <a href="#" class="google-plus"
                    ><i class="fa fa-google-plus"></i
                  ></a>
                  <a href="#" class="pinterest"
                    ><i class="fa fa-pinterest-p"></i
                  ></a>
                </div>
                <!-- .property-meta-share end -->
              </div>
            </div>
            <!-- .property-info end -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8">
          <div class="property-single-carousel inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Gallery</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="property-single-carousel-content">
                  <div
                    class="carousel carousel-thumbs slider-navs"
                    data-slide="1"
                    data-slide-res="1"
                    data-autoplay="true"
                    data-thumbs="true"
                    data-nav="true"
                    data-dots="false"
                    data-space="30"
                    data-loop="true"
                    data-speed="800"
                    data-slider-id="1"
                  >
                    <img
                      src="/images/properties/slider/1.jpg"
                      alt="Property Image"
                    />
                    <img
                      src="/images/properties/slider/2.jpg"
                      alt="Property Image"
                    />
                    <img
                      src="/images/properties/slider/3.jpg"
                      alt="Property Image"
                    />
                    <img
                      src="/images/properties/slider/4.jpg"
                      alt="Property Image"
                    />
                    <img
                      src="/images/properties/slider/5.jpg"
                      alt="Property Image"
                    />
                  </div>
                  <!-- .carousel end -->
                  <div class="owl-thumbs thumbs-bg" data-slider-id="1">
                    <button class="owl-thumb-item">
                      <img
                        src="/images/properties/slider/thumbs/1.jpg"
                        alt="Property Image thumb"
                      />
                    </button>
                    <button class="owl-thumb-item">
                      <img
                        src="/images/properties/slider/thumbs/2.jpg"
                        alt="Property Image thumb"
                      />
                    </button>
                    <button class="owl-thumb-item">
                      <img
                        src="/images/properties/slider/thumbs/3.jpg"
                        alt="Property Image thumb"
                      />
                    </button>
                    <button class="owl-thumb-item">
                      <img
                        src="/images/properties/slider/thumbs/4.jpg"
                        alt="Property Image thumb"
                      />
                    </button>
                    <button class="owl-thumb-item">
                      <img
                        src="/images/properties/slider/thumbs/5.jpg"
                        alt="Property Image thumb"
                      />
                    </button>
                  </div>
                </div>
                <!-- .col-md-12 end -->
              </div>
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-desc end -->
          <div class="property-single-desc inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Description</h2>
                </div>
              </div>
              <!-- feature-panel #1 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/1.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Area:</h5>
                    <p>{{ property.features.area }}</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <!-- feature-panel #2 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/2.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Beds:</h5>
                    <p>{{ property.features.beds }} Bedrooms</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <!-- feature-panel #3 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/3.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Baths:</h5>
                    <p>{{ property.features.baths }} Bathrooms</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <!-- feature-panel #4 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/4.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Rooms:</h5>
                    <p>{{ property.features.rooms }} Rooms</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <!-- feature-panel #5 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/5.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Floors:</h5>
                    <p>{{ property.features.floors }} Floors</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <!-- feature-panel #6 -->
              <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="feature-panel">
                  <div class="feature--img">
                    <img
                      src="/images/property-single/features/6.png"
                      alt="icon"
                    />
                  </div>
                  <div class="feature--content">
                    <h5>Garage:</h5>
                    <p>{{ property.features.garage }} Garages</p>
                  </div>
                </div>
              </div>
              <!-- feature-panel end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="property--details">
                  <p>
                    {{ property.description }}
                  </p>
                </div>
                <!-- .property-details end -->
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-desc end -->

          <div class="property-single-features inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Features</h2>
                </div>
              </div>
              <!-- feature-item #1 -->
              <div
                class="col-xs-6 col-sm-4 col-md-4"
                v-for="(feature, index) in property.featuresList"
                :key="index"
              >
                <div class="feature-item">
                  <p>{{ feature }}</p>
                </div>
              </div>
              <!-- feature-item end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-features end -->

          <div class="property-single-location inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Location</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <ul class="list-unstyled mb-20">
                  <li><span>Address:</span>{{ property.location }}</li>
                  <li><span>City:</span>{{ property.city }}</li>
                  <li><span>Country:</span>{{ property.country }}</li>
                  <li><span>State:</span>{{ property.state }}</li>
                  <li><span>Zip/Postal code:</span>{{ property.zip }}</li>
                </ul>
              </div>
              <!-- .col-md-12 end -->

              <div class="col-xs-12 col-sm-12 col-md-12">
                <div id="googleMap" style="width: 100%; height: 380px"></div>
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-location end -->

          <div class="property-single-design inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Floor Plans</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="accordion accordion-1" id="accordion01">
                  <!-- Panel 01 -->
                  <div
                    class="panel"
                    v-for="(floor, index) in property.floorPlans"
                    :key="index"
                  >
                    <div class="panel--heading clearfix">
                      <div class="pull-left">
                        <a
                          class="accordion-toggle"
                          data-toggle="collapse"
                          data-parent="#accordion01"
                          href="#collapse01-1"
                          >{{ floor.title }}</a
                        >
                      </div>
                      <div class="pull-right">
                        <ul class="list-unstyled list-inline mb-0">
                          <li><span>Size:</span>{{ floor.size }}</li>
                          <li><span>Rooms:</span>{{ floor.rooms }}</li>
                          <li><span>Baths:</span>{{ floor.baths }}</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      id="collapse01-1"
                      class="panel--body panel-collapse collapse in"
                    >
                      <p>
                        {{ property.description }}
                      </p>
                      <img
                        :src="floor.img"
                        :alt="floor.title"
                        class="img-responsive"
                      />
                    </div>
                  </div>
                  <!-- .panel end -->
                  <!-- Panel 02 -->

                  <!-- .panel end -->
                </div>
                <!-- End .Accordion-->
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-design end -->

          <div class="property-single-video inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Video</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div
                  class="video--content text-center bg-section"
                  style="background-image: url('/images/video/1.jpg')"
                >
                  <div class="video--button">
                    <div class="video-overlay">
                      <div class="pos-vertical-center">
                        <a class="popup-video" :href="property.popupVideo">
                          <i class="fa fa-youtube-play"></i>
                        </a>
                      </div>
                    </div>
                    <!-- .video-player end -->
                  </div>
                </div>
                <!-- .video-content end -->
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-video end -->

          <div class="property-single-reviews inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">3 Reviews</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <ul class="property-review">
                  <li
                    class="review-comment"
                    v-for="(review, index) in property.reviews"
                    :key="index"
                  >
                    <div class="avatar">{{ review.name[0] }}</div>
                    <div class="comment">
                      <h6>{{ review.name }}</h6>
                      <div class="date">{{ review.date }}</div>
                      <div class="property-rating">
                        <i
                          class="fa fa-star"
                          v-for="n in review.rating"
                          :key="'full-' + n"
                        ></i>
                        <i
                          class="fa fa-star-o"
                          v-for="n in 5 - review.rating"
                          :key="'empty-' + n"
                        ></i>
                      </div>
                      <p>
                        {{ review.comment }}
                      </p>
                    </div>
                  </li>

                  <!-- comment end -->
                </ul>
                <!-- .comments-list end -->
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-reviews end -->

          <div class="property-single-leave-review inner-box">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="heading">
                  <h2 class="heading--title">Leave a Review</h2>
                </div>
              </div>
              <!-- .col-md-12 end -->
              <div class="col-xs-12 col-sm-12 col-md-12">
                <ReviewForm />
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row end -->
          </div>
          <!-- .property-single-leave-review end -->
        </div>
        <!-- .col-md-8 -->
        <div class="col-xs-12 col-sm-12 col-md-4">
          <!-- widget property agent
=============================-->
          <div class="widget widget-property-agent">
            <div class="widget--title">
              <h5>About Agent</h5>
            </div>
            <div class="widget--content">
              <a href="#">
                <div class="agent--img">
                  <img
                    :src="property.agent.img"
                    :alt="property.agent.name"
                    class="img-responsive"
                  />
                </div>
                <div class="agent--info">
                  <h5 class="agent--title">{{ property.agent.name }}</h5>
                </div>
              </a>
              <!-- .agent-profile-details end -->
              <div class="agent--contact">
                <ul class="list-unstyled">
                  <li><i class="fa fa-phone"></i>{{ property.agent.phone }}</li>
                  <li>
                    <i class="fa fa-envelope-o"></i>{{ property.agent.email }}
                  </li>
                  <li>
                    <i class="fa fa-link"></i>{{ property.agent.website }}
                  </li>
                </ul>
              </div>
              <!-- .agent-contact end -->
              <div class="agent--social-links">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
              </div>
              <!-- .agent-social-links -->
            </div>
          </div>
          <!-- . widget property agent end -->

          <!-- widget request
=============================-->
          <div class="widget widget-request">
            <div class="widget--title">
              <h5>Request a Showing</h5>
            </div>
            <div class="widget--content">
              <ContactForm />
            </div>
          </div>
          <!-- . widget request end -->

          <FeaturedProperties />

          <!-- widget mortgage calculator
=============================-->
          <div class="widget widget-mortgage-calculator">
            <div class="widget--title">
              <h5>Mortage Calculator</h5>
            </div>
            <div class="widget--content">
              <form class="mb-0">
                <div class="form-group">
                  <label for="sale-price">Sale Price</label>
                  <input
                    type="text"
                    class="form-control"
                    name="sale-price"
                    id="sale-price"
                    placeholder="$"
                  />
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                  <label for="down-payment">Down Payment</label>
                  <input
                    type="text"
                    class="form-control"
                    name="down-payment"
                    id="down-payment"
                    placeholder="$"
                  />
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                  <label for="term">Term</label>
                  <input
                    type="text"
                    class="form-control"
                    name="term"
                    id="term"
                    placeholder="years"
                  />
                </div>
                <!-- .form-group end -->
                <div class="form-group">
                  <label for="interest-rate">Interest Rate</label>
                  <input
                    type="text"
                    class="form-control"
                    name="interest-rate"
                    id="interest-rate"
                    placeholder="%"
                  />
                </div>
                <!-- .form-group end -->
                <input
                  type="submit"
                  value="Calculate"
                  name="submit"
                  class="btn btn--primary btn--block"
                />
              </form>
            </div>
          </div>
          <!-- . widget mortgage calculator end -->
        </div>
        <!-- .col-md-4 -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container -->
  </section>
  <!-- #property-single end -->
  <!-- properties-carousel
============================================= -->
  <section id="properties-carousel" class="properties-carousel pt-0">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="heading heading-2 mb-70">
            <h2 class="heading--title">Similar Properties</h2>
          </div>
        </div>
      </div>
      <PropertiesCarousel :items="properties" />
    </div>
  </section>
  <ContactSection />
</template>
<script setup>
const route = useRoute();
useHead({
  script: [
    { src: "/js/jquery-2.2.4.min.js", defer: true },
    { src: "/js/plugins.js", defer: true },
    { src: "/js/functions.js", defer: true },
    {
      src: "http://maps.google.com/maps/api/js?sensor=true&amp;key=AIzaSyCiRALrXFl5vovX0hAkccXXBFh7zP8AOW8",
      defer: true,
    },
    { src: "/js/plugins/jquery.gmap.min.js", defer: true },
    { src: "/js/map-custom.js", defer: true },
  ],
});
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
  {
    id: 5,
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
    date: "02/13/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 2,
      baths: 3,
      area: "587 sq ft",
      rooms: 6,
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
      name: "James Bond",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "james-bond.com",
      img: "/images/agents/grid/7.jpg",
    },
  },
  {
    id: 6,
    type: "Villa",
    title: "Villa in Oglesby Ave",
    location: "1445 N State Pkwy, Chicago, IL 60610",
    city: "Chicago",
    country: "USA",
    state: "Illinois",
    zip: "60610",
    popupVideo: "https://www.youtube.com/watch?v=nrJtHemSPW4",
    img: "/images/properties/1.jpg",
    status: "For Rent",
    price: "$1200",
    date: "05/25/2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: {
      beds: 3,
      baths: 2,
      area: "350 sq ft",
      rooms: 5,
      floors: 2,
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
      name: "Eren Yeager",
      phone: "(950) 491-570-180",
      email: "support@example.com",
      website: "eren-yeager.com",
      img: "/images/agents/grid/7.jpg",
    },
  },
];
const propertyId = Number(route.params.id); // cleaner than parseInt
const property = properties.find((p) => p.id === propertyId);
</script>
