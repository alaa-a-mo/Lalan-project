<template>
    <section id="page-title" class="page-title bg-overlay bg-overlay-dark2 bg-section" :style="{ backgroundImage: `url(${background})` }">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                        <div class="title title-1 text-center">
                            <div class="title--content">
                                <div class="title--heading">
                                    <h1>{{ title }}</h1>
                                </div>
                                <ol class="breadcrumb">
                                    <li>
                                        <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li class="active">{{ title }}</li>
                                </ol>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <!-- .title end -->
                    </div>
                    <!-- .col-md-12 end -->
                </div>
                <!-- .row end -->
            </div>
            <!-- .container end -->
        </section>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  background: {
    type: String,
    default: '/images/page-titles/1.jpg'
  }
})
</script>