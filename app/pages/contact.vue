<template>
  <div>
    <PageBanner title="Contact" background="/images/page-titles/1.jpg" />
    <!-- Contact #1
============================================= -->
    <section id="contact" class="contact contact-1">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3">
            <div class="heading heading-2 mb-55">
              <h2 class="heading--title">Get In Touch</h2>
            </div>
            <div class="contact-panel">
              <h3>Address</h3>
              <p>{{ contactInfo.address }}</p>
            </div>
            <!-- .contact-panel -->
            <div class="contact-panel">
              <h3>Phone:</h3>
              <p>{{ contactInfo.phone1 }}</p>
              <p>{{ contactInfo.phone2 }}</p>
            </div>
            <!-- .contact-panel -->
            <div class="contact-panel">
              <h3>Email:</h3>
              <p>{{ contactInfo.email }}</p>
            </div>
            <!-- .contact-panel -->
          </div>
          <!-- .col-md-3 end -->

          <div
            class="col-xs-12 col-sm-12 col-md-8 col-md-offset-1 bg-white p-30 bg-white"
          >
            <div id="googleMap" style="width: 100%; height: 370px"></div>
          </div>
          <!-- .col-md-8 end -->
        </div>
        <!-- .row end -->
      </div>
    </section>
    <!-- #contact  end -->
    <!-- Contact #2
============================================= -->
    <section id="contact2" class="contact contact-2 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="heading heading-2 mb-50">
              <h2 class="heading--title">Contact Us</h2>
            </div>
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <form class="mb-0" @submit.prevent="submitContact">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4">
                  <div class="form-group">
                    <label for="contact-name">Your Name*</label>
                    <input
                      type="text"
                      class="form-control"
                      name="contact-name"
                      id="contact-name"
                      v-model="form.name"
                      required
                    />
                  </div>
                </div>
                <!-- .col-md-4 end -->
                <div class="col-xs-12 col-sm-12 col-md-4">
                  <div class="form-group">
                    <label for="contact-email">Email Address*</label>
                    <input
                      type="email"
                      class="form-control"
                      name="contact-email"
                      id="contact-email"
                      v-model="form.email"
                      required
                    />
                  </div>
                </div>
                <!-- .col-md-4 end -->
                <div class="col-xs-12 col-sm-12 col-md-4">
                  <div class="form-group">
                    <label for="phone-number">Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      name="phone-number"
                      id="phone-number"
                      v-model="form.phone"
                      placeholder="(optional)"
                    />
                  </div>
                </div>
                <!-- .col-md-4 end -->
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <div class="form-group">
                    <label for="message">Message*</label>
                    <textarea
                      class="form-control"
                      name="contact-message"
                      id="message"
                      rows="2"
                      v-model="form.message"
                      required
                    ></textarea>
                  </div>
                </div>
                <!-- .col-md-12 end -->
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <input
                    type="submit"
                    value="Send Message"
                    name="submit"
                    class="btn btn--primary"
                  />
                </div>
                <!-- .col-md-12 -->
              </div>
            </form>
          </div>
          <!-- .col-md-12 end -->
        </div>
        <!-- .row end -->
      </div>
    </section>
    <!-- #contact2  end -->
    <ContactSection />
  </div>
</template>
<script setup>
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
onMounted(() => {
  // Wait a tick for jQuery to be ready
  $("#googleMap").gMap({
    address: "121 King St,Melbourne, Australia",
    zoom: 12,
    maptype: "ROADMAP",
    markers: [
      {
        address: "Melbourne, Australia",
        maptype: "ROADMAP",
        icon: {
          image: "/images/gmap/marker1.png", // adjust path
          iconsize: [52, 75],
          iconanchor: [52, 75],
        },
      },
    ],
  });
});
const contactInfo = {
  address: "86 Petersham town, Wardll street Australia PA 6550.",
  phone1: "(04) 491 570 110",
  phone2: "+61 525 240 310",
  email: "contact@land.com",
};
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitContact = () => {
  console.log('Contact form submitted:', form)
    alert('Form submitted!')
}
</script>
