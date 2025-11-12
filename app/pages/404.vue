<template>
  <div>
    <!--404
=============================================-->
    <section
      class="page-404 text-center bg-overlay bg-overlay-dark3 bg-section"
      :style="{ backgroundImage: `url('/images/background/bg-1.jpg')` }"
    >
      <div class="pos-vertical-center">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <img src="/images/404/404-icon.png" alt="icon" />
              <h3>Error - The page doesn’t exist!</h3>
              <p>
                The page you were looking for was not found
                <NuxtLink to="/">back to home</NuxtLink>
              </p>
            </div>
          </div>
          <!-- .row end -->
        </div>
        <!-- .cotainer end -->
      </div>
      <!-- .cotainer end -->
    </section>
    <!-- .page-404 end -->
  </div>
</template>
