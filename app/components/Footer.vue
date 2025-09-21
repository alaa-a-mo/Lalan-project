<template>
  <footer id="footer" class="footer footer-1 bg-white">
    <!-- Widget Section
	============================================= -->
    <div class="footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 widget--about">
            <div class="widget--content">
              <div class="footer--logo">
                <img src="/images/logo/logo-dark2.png" alt="logo" />
              </div>
              <p>
                86 Petersham town, New South Wales Wardll Street, Australia PA
                6550
              </p>
              <div class="footer--contact">
                <ul class="list-unstyled mb-0">
                  <li>+61 525 240 310</li>
                  <li>
                    <NuxtLink to="mailto:contact@land.com">contact@land.com</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- .col-md-2 end -->
          <div
            class="col-xs-12 col-sm-3 col-md-2 col-md-offset-1 widget--links"
          >
            <div class="widget--title">
              <h5>Company</h5>
            </div>
            <div class="widget--content">
              <ul class="list-unstyled mb-0">
        <li>
          <NuxtLink to="/about">About us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Career</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/properties">Properties</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Contact</NuxtLink>
        </li>
              </ul>
            </div>
          </div>
          <!-- .col-md-2 end -->
          <div class="col-xs-12 col-sm-3 col-md-2 widget--links">
            <div class="widget--title">
              <h5>Learn More</h5>
            </div>
            <div class="widget--content">
              <ul class="list-unstyled mb-0">
        <li>
          <NuxtLink to="#">Privacy</NuxtLink>
         </li>
        <li>
          <NuxtLink to="#">Terms & Conditions</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Account</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">FAQ</NuxtLink>
        </li>
              </ul>
            </div>
          </div>
          <!-- .col-md-2 end -->
          <div class="col-xs-12 col-sm-12 col-md-4 widget--newsletter">
            <div class="widget--title">
              <h5>newsletter</h5>
            </div>
            <div class="widget--content">
              <form class="newsletter--form mb-40">
                <input
                  type="email"
                  class="form-control"
                  id="newsletter-email"
                  placeholder="Email Address"
                />
                <button type="submit"><i class="fa fa-arrow-right"></i></button>
              </form>
              <h6>Get In Touch</h6>
              <div class="social-icons">
                <NuxtLink to="#"><i class="fa fa-twitter"></i></NuxtLink>
                <NuxtLink to="#"><i class="fa fa-facebook"></i></NuxtLink>
                <NuxtLink to="#"><i class="fa fa-vimeo"></i></NuxtLink>
              </div>
            </div>
          </div>
          <!-- .col-md-4 end -->
        </div>
      </div>
      <!-- .container end -->
    </div>
    <!-- .footer-widget end -->

    <!-- Copyrights
	============================================= -->
    <div class="footer--copyright text-center">
      <div class="container">
        <div class="row footer--bar">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <span
              >© 2018 
              <NuxtLink to="http://themeforest.net/user/zytheme">Zytheme</NuxtLink>,
              All Rights Reserved.</span
            >
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .footer-copyright end -->
  </footer>
</template>
