<template>
  <div class="search-properties">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <form class="mb-0">
            <div class="form-box">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="form-group">
                    <div class="select--box">
                      <i class="fa fa-angle-down"></i>
                      <select name="select-location" id="select-location">
                        <option
                          v-for="(location, index) in selectLocation"
                          :key="index"
                        >
                          {{ location }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- .col-md-3 end -->
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="form-group">
                    <div class="select--box">
                      <i class="fa fa-angle-down"></i>
                      <select name="select-type" id="select-type">
                        <option
                          v-for="(type, index) in selectType"
                          :key="index"
                        >
                          {{ type }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- .col-md-3 end -->
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="form-group">
                    <div class="select--box">
                      <i class="fa fa-angle-down"></i>
                      <select name="select-status" id="select-status">
                        <option
                          v-for="(status, index) in selectStatus"
                          :key="index"
                        >
                          {{ status }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- .col-md-3 end -->
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <input
                    type="submit"
                    value="Search"
                    name="submit"
                    class="btn btn--primary btn--block mb-30"
                  />
                </div>
                <!-- .col-md-3 end -->
                <!-- extra options wrapped in transition -->
                <transition name="slide">
                  <div v-show="showOptions" class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group">
                      <div class="select--box">
                        <i class="fa fa-angle-down"></i>
                        <select>
                          <option
                            v-for="(bed, index) in selectBeds"
                            :key="index"
                          >
                            {{ bed }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="slide">
                  <div v-show="showOptions" class="col-xs-12 col-sm-6 col-md-3">
                    <div class="form-group">
                      <div class="select--box">
                        <i class="fa fa-angle-down"></i>
                        <select>
                          <option
                            v-for="(bath, index) in selectBaths"
                            :key="index"
                          >
                            {{ bath }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- .col-md-3 end -->
                <transition name="slide">
                  <div class="col-xs-12 col-sm-6 col-md-6" v-show="showOptions">
                    <div class="filter mb-30">
                      <p>
                        <label for="amount">Price Range: </label>
                        <input
                          id="amount"
                          type="text"
                          class="amount"
                          readonly
                        />
                      </p>
                      <div class="slider-range"></div>
                    </div>
                  </div>
                </transition>
                <!-- .col-md-3 end -->
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <NuxtLink
                    to="#"
                    class="less--options"
                    :class="{ active: showOptions }"
                    @click="toggleOptions"
                  >
                    {{ showOptions ? "Less options" : "More options" }}
                  </NuxtLink>
                </div>
              </div>
              <!-- .row end -->
            </div>
            <!-- .form-box end -->
          </form>
        </div>
        <!-- .col-md-12 end -->
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
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
const selectLocation = [
  "Any Location",
  "Alabama",
  "Alaska",
  "California",
  "Florida",
  "Mississippi",
  "Oregon",
];
const selectType = ["Any Type", "Apartment", "House", "Office", "Villa"];
const selectStatus = ["Any Status", "For Rent", "For Sale"];
const selectBeds = ["Beds", "2", "3"];
const selectBaths = ["Baths", "2", "3"];
const showOptions = ref(true);

function toggleOptions(event) {
  event.preventDefault();
  showOptions.value = !showOptions.value;
}
</script>
<style scoped>
/* Slide animation (similar to jQuery slideToggle) */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
  max-height: 500px; /* big enough to fit the content */
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>