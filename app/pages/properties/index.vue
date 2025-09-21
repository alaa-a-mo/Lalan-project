<template>
  <div>
    <Header variant="light" />
    <!-- map
============================================ -->
    <section id="map" class="hero-map pt-0 pb-0">
      <div class="container-fluid pr-0 pl-0">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div id="googleMap"></div>
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
      <SearchProperties />
    </section>
    <!-- #map end -->
    <!-- properties-list
============================================= -->
    <section id="properties-list">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4">
            <!-- widget property type
=============================-->
            <div class="widget widget-property">
              <div class="widget--title">
                <h5>Property Type</h5>
              </div>
              <div class="widget--content">
                <ul class="list-unstyled mb-0">
                  <li v-for="(type, index) in propertytypes" :key="index">
                    <NuxtLink :to="type.to"
                      >{{ type.name }} <span>({{ type.count }})</span></NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- . widget property type end -->

            <!-- widget property status
=============================-->
            <div class="widget widget-property">
              <div class="widget--title">
                <h5>Property Status</h5>
              </div>
              <div class="widget--content">
                <ul class="list-unstyled mb-0">
                  <li v-for="(status, index) in propertyStatus" :key="index">
                    <NuxtLink :to="status.to"
                      >{{ status.name }}
                      <span>({{ status.count }})</span></NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- . widget property status end -->

            <!-- widget property city
=============================-->
            <div class="widget widget-property">
              <div class="widget--title">
                <h5>Property By City</h5>
              </div>
              <div class="widget--content">
                <ul class="list-unstyled mb-0">
                  <li v-for="(city, index) in propertyCities" :key="index">
                    <NuxtLink :to="city.to"
                      >{{ city.name }} <span>({{ city.count }})</span></NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- . widget property city end -->

            <FeaturedProperties />
          </div>
          <!-- .col-md-4 end -->
          <div class="col-xs-12 col-sm-12 col-md-8">
            <div class="row">
              <div class="properties-filter clearfix">
                  <div class="select--box pull-left">
                    <label>Sort by:</label>
                    <i class="fa fa-angle-up"></i>
                    <i class="fa fa-angle-down"></i>
                    <select v-model="selectedSort">
                      <option value="default">Default Sorting</option>
                      <option value="newest">Newest Items</option>
                      <option value="oldest">Oldest Items</option>
                      <option value="highestPrice">Highest Price</option>
                      <option value="lowestPrice">Lowest Price</option>
                    </select>
                  </div>
                  <!-- .select-box -->
                  <div class="view--type pull-right">
                    <NuxtLink id="switch-list" to="#" class="active"
                      ><i class="fa fa-th-list"></i
                    ></NuxtLink>
                    <NuxtLink id="switch-grid" to="#" class=""
                      ><i class="fa fa-th-large"></i
                    ></NuxtLink>
                  </div>
                </div>
              <!-- Properties list -->
              <div class="properties properties-list">
                <div
                  class="col-xs-12 col-sm-12 col-md-12"
                  v-for="property in sortedProperties"
                  :key="property.id"
                >
                  <div class="property-item">
                    <div class="property--img">
                      <NuxtLink :to="`/properties/${property.id}`">
                        <img
                          :src="property.img"
                          :alt="property.title"
                          class="img-responsive"
                        />
                      </NuxtLink>
                      <span class="property--status">{{
                        property.status
                      }}</span>
                    </div>
                    <div class="property--content">
                      <div class="property--info">
                        <h5 class="property--title">
                          <NuxtLink :to="`/properties/${property.id}`">
                            {{ property.title }}
                          </NuxtLink>
                        </h5>
                        <p class="property--location">
                          {{ property.location }}
                        </p>
                        <p class="property--price">{{ property.price }}</p>
                      </div>
                      <div class="property--features">
                        <ul class="list-unstyled mb-0">
                          <li>
                            <span class="feature">Beds:</span>
                            <span class="feature-num">{{
                              property.features.beds
                            }}</span>
                          </li>
                          <li>
                            <span class="feature">Baths:</span>
                            <span class="feature-num">{{
                              property.features.baths
                            }}</span>
                          </li>
                          <li>
                            <span class="feature">Area:</span>
                            <span class="feature-num">{{
                              property.features.area
                            }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-50">
                <ul class="pagination">
                  <li class="active"><NuxtLink to="#">1</NuxtLink></li>
                  <li><NuxtLink to="#">2</NuxtLink></li>
                  <li><NuxtLink to="#">3</NuxtLink></li>
                  <li><NuxtLink to="#">...</NuxtLink></li>
                  <li>
                    <NuxtLink to="#" aria-label="Next">
                      <span aria-hidden="true"
                        ><i class="fa fa-angle-right"></i
                      ></span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- .col-md-12 end -->
            </div>
            <!-- .row -->
          </div>
          <!-- .col-md-8 end -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </section>
    <!-- #properties-list  end  -->
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

useHead({
  script: [
    { src: "/js/jquery-2.2.4.min.js", defer: true },
    { src: "/js/plugins.js", defer: true },
    { src: "/js/functions.js", defer: true },
    {
      src: "https://maps.google.com/maps/api/js?sensor=true&key=AIzaSyCiRALrXFl5vovX0hAkccXXBFh7zP8AOW8",
      defer: true,
    },
    { src: "/js/plugins/jquery.gmap.min.js", defer: true },
    { src: "/js/map-addresses.js", defer: true },
    { src: "/js/map-custom.js", defer: true },
  ],
});

const propertytypes = [
  { name: "Apartment", count: 13 },
  { name: "House", count: 8, to: "#" },
  { name: "Office", count: 3, to: "#" },
  { name: "Villa", count: 4, to: "#" },
  { name: "Land", count: 2, to: "#" },
];
const propertyStatus = [
  { name: "For Rent", count: 25, to: "#" },
  { name: "For Sale", count: 32, to: "#" },
];
const propertyCities = [
  { name: "London", count: 5, to: "#" },
  { name: "Sydney", count: 10, to: "#" },
  { name: "New York", count: 4, to: "#" },
  { name: "Paris", count: 7, to: "#" },
];

// state for toggle
const properties = ref ([
  {
    id: 1,
    type: "House",
    title: "House in Kent Street",
    location: "127 Kent Street, Sydney, NSW 2000",

    img: "/images/properties/1.jpg",
    status: "For Sale",
    price: "$130,000",
    date: "10/12/2024",
    features: { beds: 2, baths: 2, area: "587 sq ft" },
  },
  {
    id: 2,
    type: "Apartment",
    title: "Apartment For Rent",
    location: "1609 N Richmond St, Chicago, IL 60647",

    img: "/images/properties/6.jpg",
    status: "For Rent",
    price: "$900",
    time: "month",
    date: "11/05/2024",
    features: { beds: 1, baths: 1, area: "500 sq ft" },
  },
  {
    id: 3,
    type: "House",
    title: "2750 House in Urban St.",
    location: "2750 Urban Street Dr, Anderson, IN 46011",

    img: "/images/properties/5.jpg",
    status: "For Rent",
    price: "$1550",
    time: "month",
    date: "03/09/2024",
    features: { beds: 2, baths: 1, area: "1390 sq ft" },
  },
  {
    id: 4,
    type: "Office",
    title: "Modern Office For Rent",
    location: "2003 Sheffield Ave, Anderson, IN 46011",

    img: "/images/properties/12.jpg",
    status: "For Rent",
    price: "$530",
    time: "month",
    date: "05/11/2024",
    features: { beds: 0, baths: 1, area: "150 sq ft" },
  },
  {
    id: 5,
    type: "House",
    title: "House in Kent Street",
    location: "127 Kent Street, Sydney, NSW 2000",

    img: "/images/properties/1.jpg",
    status: "For Sale",
    price: "$130,000",
    date: "02/13/2024",
    features: { beds: 2, baths: 2, area: "587 sq ft" },
  },
  {
    id: 6,
    type: "Villa",
    title: "Villa in Oglesby Ave",
    location: "1445 N State Pkwy, Chicago, IL 60610",

    img: "/images/properties/1.jpg",
    status: "For Rent",
    price: "$1200",
    date: "05/25/2024",
    features: { beds: 3, baths: 2, area: "350 sq ft" },
  },
]);
// selected sort option
const selectedSort = ref("default");

// computed property for sorting
const sortedProperties = computed(() => {
  let props = [...properties.value];

  switch (selectedSort.value) {
    case "newest":
      return props.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "oldest":
      return props.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "highestPrice":
      return props.sort(
        (a, b) => extractPrice(b.price) - extractPrice(a.price)
      );
    case "lowestPrice":
      return props.sort(
        (a, b) => extractPrice(a.price) - extractPrice(b.price)
      );
    default:
      return props;
  }
});

// ✅ helper to turn price strings into numbers
function extractPrice(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.]/g, ""));
}
</script>
